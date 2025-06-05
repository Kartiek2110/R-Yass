/**
 * Google Apps Script for R-YASS Digital Co. Contact Form
 * 
 * This script receives form submissions and saves them to your Google Sheet
 * Sheet ID: 1dMn7QYmW3L6bIELQBS-Z5uPc_Hl_hw9c9aIW35mWpFo
 * 
 * SETUP INSTRUCTIONS:
 * 1. Go to script.google.com
 * 2. Create a new project
 * 3. Replace the default code with this script
 * 4. Deploy as a web app (anyone can access)
 * 5. Copy the web app URL and update it in src/utils/emailService.ts
 */

// Your Google Sheet ID (extracted from your URL)
const SHEET_ID = '1dMn7QYmW3L6bIELQBS-Z5uPc_Hl_hw9c9aIW35mWpFo';

function doPost(e) {
  try {
    // Log the incoming request for debugging
    console.log('Incoming request:', e);
    
    // Get form data from the request (FormData format)
    const formData = e.parameter;
    console.log('Form data:', formData);
    
    // Open your Google Sheet by ID
    const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
    const sheet = spreadsheet.getActiveSheet();
    
    // Add headers if this is the first row (sheet is empty)
    if (sheet.getLastRow() === 0) {
      const headers = [
        'Timestamp',
        'Name',
        'Email',
        'Phone',
        'Company',
        'Service',
        'Budget',
        'Message',
        'Status'
      ];
      sheet.appendRow(headers);
      
      // Format the header row
      const headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#4285f4');
      headerRange.setFontColor('white');
    }
    
    // Prepare the data row from FormData
    const timestamp = formData.timestamp ? new Date(formData.timestamp) : new Date();
    const rowData = [
      timestamp,
      formData.name || '',
      formData.email || '',
      formData.phone || '',
      formData.company || '',
      formData.service || '',
      formData.budget || '',
      formData.message || '',
      'New' // Status column
    ];
    
    // Add the data to the sheet
    sheet.appendRow(rowData);
    
    // Auto-resize columns for better readability
    sheet.autoResizeColumns(1, rowData.length);
    
    // Log success
    console.log('Data successfully added to sheet');
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: true, 
        message: 'Data saved successfully',
        timestamp: timestamp.toISOString(),
        rowNumber: sheet.getLastRow()
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Log the error
    console.error('Error processing request:', error);
    
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false,
        error: error.toString(),
        message: 'Failed to save data to Google Sheets'
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Test function to verify the script works
 * You can run this in the Apps Script editor to test
 */
function testFunction() {
  const testData = {
    parameter: {
      timestamp: new Date().toISOString(),
      name: 'Test User',
      email: 'test@example.com',
      phone: '+1234567890',
      company: 'Test Company',
      service: 'Meta Ads (Facebook & Instagram)',
      budget: '$1,000 - $5,000/month',
      message: 'This is a test submission to verify the Google Apps Script is working correctly.'
    }
  };
  
  const result = doPost(testData);
  console.log('Test result:', result.getContent());
}

/**
 * Function to set up the sheet with proper formatting
 * Run this once to initialize your sheet
 */
function setupSheet() {
  try {
    const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
    const sheet = spreadsheet.getActiveSheet();
    
    // Clear existing content
    sheet.clear();
    
    // Add headers
    const headers = [
      'Timestamp',
      'Name', 
      'Email',
      'Phone',
      'Company',
      'Service',
      'Budget',
      'Message',
      'Status'
    ];
    
    sheet.appendRow(headers);
    
    // Format the header row
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setFontWeight('bold');
    headerRange.setBackground('#4285f4');
    headerRange.setFontColor('white');
    headerRange.setHorizontalAlignment('center');
    
    // Set column widths
    sheet.setColumnWidth(1, 150); // Timestamp
    sheet.setColumnWidth(2, 120); // Name
    sheet.setColumnWidth(3, 200); // Email
    sheet.setColumnWidth(4, 120); // Phone
    sheet.setColumnWidth(5, 150); // Company
    sheet.setColumnWidth(6, 200); // Service
    sheet.setColumnWidth(7, 150); // Budget
    sheet.setColumnWidth(8, 300); // Message
    sheet.setColumnWidth(9, 100); // Status
    
    console.log('Sheet setup complete!');
    
  } catch (error) {
    console.error('Error setting up sheet:', error);
  }
} 