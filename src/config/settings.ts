// R-YASS Digital Co. Website Configuration
// Update these values after setting up EmailJS and Google Apps Script

export const EMAIL_CONFIG = {
  // EmailJS Configuration (get these from EmailJS dashboard)
  SERVICE_ID: 'service_ryass_digital', // Replace with your EmailJS Service ID
  TEMPLATE_ID: 'template_ryass_contact', // Replace with your EmailJS Template ID
  PUBLIC_KEY: 'your_emailjs_public_key_here', // Replace with your EmailJS Public Key
  
  // Client email where inquiries will be sent
  CLIENT_EMAIL: 'bhardwaj93kartiekey@gmail.com',
};

export const GOOGLE_SHEETS_CONFIG = {
  // Google Apps Script Web App URL (get this after deploying your script)
  WEB_APP_URL: 'your_google_apps_script_web_app_url_here',
  
  // Your Google Sheet ID (extracted from the URL you provided)
  SHEET_ID: '1dMn7QYmW3L6bIELQBS-Z5uPc_Hl_hw9c9aIW35mWpFo',
};

export const COMPANY_INFO = {
  NAME: 'R-YASS Digital Co.',
  EMAIL: 'bhardwaj93kartiekey@gmail.com',
  PHONE: '+1 (234) 567-8900',
  ADDRESS: 'Remote-First Digital Agency',
};

// Form configuration
export const FORM_CONFIG = {
  SERVICES: [
    'Meta Ads (Facebook & Instagram)',
    'Google Ads (Search, Display & YouTube)',
    'PPC (Pay-Per-Click)',
    'SEO (Search Engine Optimization)',
    'Full Digital Marketing Package',
    'Consultation & Strategy'
  ],
  
  BUDGET_RANGES: [
    'Under $1,000/month',
    '$1,000 - $5,000/month',
    '$5,000 - $10,000/month',
    '$10,000 - $25,000/month',
    'Over $25,000/month',
    'Let\'s discuss'
  ]
}; 