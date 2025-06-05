# R-YASS Digital Co. Website Setup Guide

## 🚀 Quick Start

1. Install dependencies:
```bash
pnpm install
```

2. Start the development server:
```bash
pnpm dev
```

## 📧 EmailJS Configuration

To enable email functionality, you need to set up EmailJS:

### 1. Create an EmailJS Account
- Go to [EmailJS.com](https://www.emailjs.com/)
- Sign up for a free account
- Create a new service (Gmail, Outlook, etc.)

### 2. Create Email Template
Create a template with the following variables:
```
{{from_name}} - Contact's name
{{from_email}} - Contact's email
{{phone}} - Contact's phone
{{company}} - Contact's company
{{service}} - Selected service
{{budget}} - Budget range
{{message}} - Contact message
{{to_name}} - Your company name (R-YASS Digital Co.)
```

### 3. Update Configuration
In `src/utils/emailService.ts`, replace:
```typescript
const EMAILJS_SERVICE_ID = 'your_service_id_here';
const EMAILJS_TEMPLATE_ID = 'your_template_id_here';
const EMAILJS_PUBLIC_KEY = 'your_public_key_here';
```

## 📊 Google Sheets Integration

### 1. Create Google Apps Script
1. Go to [Google Apps Script](https://script.google.com/)
2. Create a new project
3. Replace the default code with:

```javascript
function doPost(e) {
  try {
    // Parse the JSON data
    const data = JSON.parse(e.postData.contents);
    
    // Open your Google Sheet (replace with your sheet ID)
    const sheet = SpreadsheetApp.openById('YOUR_SHEET_ID').getActiveSheet();
    
    // Add headers if this is the first row
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp',
        'Name',
        'Email',
        'Phone',
        'Company',
        'Service',
        'Budget',
        'Message'
      ]);
    }
    
    // Add the data
    sheet.appendRow([
      new Date(data.timestamp),
      data.name,
      data.email,
      data.phone,
      data.company,
      data.service,
      data.budget,
      data.message
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

### 2. Deploy the Script
1. Click "Deploy" > "New deployment"
2. Choose "Web app" as the type
3. Set execute as "Me" and access to "Anyone"
4. Copy the web app URL

### 3. Update Configuration
In `src/utils/emailService.ts`, replace:
```typescript
const GOOGLE_SHEETS_URL = 'your_google_apps_script_url_here';
```

## 🎨 Customization

### Colors and Branding
Update colors in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
  }
}
```

### Contact Information
Update contact details in:
- `src/components/Footer.tsx`
- `src/utils/emailService.ts`

### Services
Modify services in:
- `src/components/Services.tsx`
- `src/components/ContactForm.tsx`

## 🔧 Environment Variables (Optional)

For better security, you can use environment variables:

1. Create `.env.local`:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_GOOGLE_SHEETS_URL=your_apps_script_url
```

2. Update `src/utils/emailService.ts`:
```typescript
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const GOOGLE_SHEETS_URL = import.meta.env.VITE_GOOGLE_SHEETS_URL;
```

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push

### Netlify
1. Connect your GitHub repository to Netlify
2. Add environment variables in Netlify dashboard
3. Deploy automatically on push

## 📱 Features

- ✅ Responsive design for all devices
- ✅ Smooth animations with Framer Motion
- ✅ Form validation with React Hook Form
- ✅ Email notifications via EmailJS
- ✅ Google Sheets data storage
- ✅ Modern gradient designs
- ✅ Accessible form elements
- ✅ SEO-friendly structure

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **Email**: EmailJS
- **Build Tool**: Vite
- **Package Manager**: pnpm

## 📞 Support

If you need help setting up the email or Google Sheets integration, please refer to:
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [Google Apps Script Documentation](https://developers.google.com/apps-script)

## 🎯 Next Steps

1. Replace placeholder content with your actual company information
2. Set up EmailJS and Google Sheets integrations
3. Test the contact form thoroughly
4. Customize colors and branding to match your needs
5. Deploy to your preferred hosting platform

Your professional R-YASS Digital Co. website is ready to convert visitors into clients! 🚀 