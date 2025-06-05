import type { ContactFormData } from '../types';

// Google Sheets API Configuration
const GOOGLE_SHEETS_API_KEY = 'https://script.google.com/macros/s/AKfycbwHCtg9hP6A0nDV18SSTNXDYah9yzLOSX29dzp3bog6AefOPjHMb20lyG1KboxqDWHs/exec'; // Get from Google Cloud Console
const SPREADSHEET_ID = '1dMn7QYmW3L6bIELQBS-Z5uPc_Hl_hw9c9aIW35mWpFo';
const SHEET_NAME = 'Sheet1'; // or whatever your sheet is named

// Option 1: Direct Google Sheets API (Recommended)
export const saveToGoogleSheetsAPI = async (formData: ContactFormData) => {
  try {
    const values = [
      [
        new Date().toISOString(),
        formData.name,
        formData.email,
        formData.phone || '',
        formData.company || '',
        formData.service,
        formData.budget || '',
        formData.message,
        'New'
      ]
    ];

    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${SHEET_NAME}:append?valueInputOption=RAW&key=${GOOGLE_SHEETS_API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          values: values
        })
      }
    );

    if (!response.ok) {
      throw new Error(`Google Sheets API error: ${response.status}`);
    }

    const result = await response.json();
    console.log('✅ Data saved to Google Sheets via API:', result);
    return { success: true, result };

  } catch (error: any) {
    console.error('❌ Google Sheets API error:', error);
    throw error;
  }
};

// Option 2: Simple webhook to external service (like Zapier, Make.com)
export const saveToWebhook = async (formData: ContactFormData) => {
  try {
    const webhookURL = 'your_webhook_url_here'; // From Zapier, Make.com, or similar

    const payload = {
      timestamp: new Date().toISOString(),
      name: formData.name,
      email: formData.email,
      phone: formData.phone || '',
      company: formData.company || '',
      service: formData.service,
      budget: formData.budget || '',
      message: formData.message,
      source: 'R-YASS Digital Co. Website'
    };

    const response = await fetch(webhookURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });

    console.log('✅ Data sent to webhook service');
    return { success: true, response };

  } catch (error: any) {
    console.error('❌ Webhook error:', error);
    throw error;
  }
};

// Option 3: Browser-based Google Sheets (using gapi)
export const initGoogleAPI = () => {
  return new Promise((resolve, reject) => {
    if (typeof window !== 'undefined' && (window as any).gapi) {
      (window as any).gapi.load('client:auth2', () => {
        (window as any).gapi.client.init({
          apiKey: GOOGLE_SHEETS_API_KEY,
          clientId: 'your_google_client_id_here',
          discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
          scope: 'https://www.googleapis.com/auth/spreadsheets'
        }).then(resolve).catch(reject);
      });
    } else {
      reject(new Error('Google API not loaded'));
    }
  });
};

export const saveToGoogleSheetsGAPI = async (formData: ContactFormData) => {
  try {
    await initGoogleAPI();
    
    const authInstance = (window as any).gapi.auth2.getAuthInstance();
    if (!authInstance.isSignedIn.get()) {
      await authInstance.signIn();
    }

    const values = [
      [
        new Date().toISOString(),
        formData.name,
        formData.email,
        formData.phone || '',
        formData.company || '',
        formData.service,
        formData.budget || '',
        formData.message,
        'New'
      ]
    ];

    const response = await (window as any).gapi.client.sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A:I`,
      valueInputOption: 'RAW',
      resource: { values }
    });

    console.log('✅ Data saved to Google Sheets via GAPI:', response);
    return { success: true, response };

  } catch (error) {
    console.error('❌ Google GAPI error:', error);
    throw error;
  }
}; 