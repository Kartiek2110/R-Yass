# 🚀 Complete Setup Guide for R-YASS Digital Co. Website

## 📧 EmailJS Setup (5 minutes)

### Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### Step 2: Add Email Service
1. In EmailJS dashboard, click "Email Services"
2. Click "Add New Service"
3. Choose **Gmail** (recommended)
4. Connect your email: `bhardwaj93kartiekey@gmail.com`
5. Follow the OAuth flow to authorize
6. **Copy the Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Template
1. Go to "Email Templates" in EmailJS dashboard
2. Click "Create New Template"
3. Use this template:

```html
Subject: New Lead from {{from_name}} - {{service}}

Hello R-YASS Digital Co.,

You have received a new inquiry through your website:

📝 CONTACT DETAILS:
Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Company: {{company}}

💼 SERVICE INTEREST:
Service: {{service}}
Budget: {{budget}}

📋 MESSAGE:
{{message}}

---
This email was sent from your R-YASS Digital Co. contact form.
Reply directly to this email to respond to {{from_name}}.
```

4. **Copy the Template ID** (e.g., `template_xyz789`)

### Step 4: Get Public Key
1. Go to "Account" → "General"
2. **Copy your Public Key** (e.g., `abc123xyz`)

### Step 5: Update Website Configuration
Replace these values in `src/utils/emailService.ts`:
```typescript
const EMAILJS_SERVICE_ID = 'your_service_id_here'; // From Step 2
const EMAILJS_TEMPLATE_ID = 'your_template_id_here'; // From Step 3  
const EMAILJS_PUBLIC_KEY = 'your_public_key_here'; // From Step 4
```

---

## 📊 Google Sheets Setup (3 minutes)

### Step 1: Set Up Google Apps Script
1. Go to [script.google.com](https://script.google.com/)
2. Click "New Project"
3. Delete the default code
4. **Copy and paste** the entire code from `GOOGLE_APPS_SCRIPT.js` file
5. Click "Save" and name it "R-YASS Contact Form Handler"

### Step 2: Deploy as Web App
1. Click "Deploy" → "New deployment"
2. Click the gear icon ⚙️ next to "Type"
3. Select **"Web app"**
4. Set these settings:
   - **Execute as**: Me
   - **Who has access**: Anyone
5. Click "Deploy"
6. **Copy the Web App URL** (it looks like: `https://script.google.com/macros/s/ABC123.../exec`)

### Step 3: Update Website Configuration
Replace this value in `src/utils/emailService.ts`:
```typescript
const GOOGLE_SHEETS_URL = 'your_web_app_url_here'; // From Step 2
```

### Step 4: Test the Setup (Optional but Recommended)
1. In Apps Script editor, click "Run" → "setupSheet"
2. Grant permissions when prompted
3. Check your Google Sheet - it should now have formatted headers

---

## 🎯 Final Configuration

### Update These Files:

**1. src/utils/emailService.ts**
```typescript
const EMAILJS_SERVICE_ID = 'service_YOUR_ID'; // From EmailJS
const EMAILJS_TEMPLATE_ID = 'template_YOUR_ID'; // From EmailJS
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // From EmailJS
const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec'; // From Apps Script
```

---

## ✅ Testing Your Setup

### Test Email:
1. Fill out the contact form on your website
2. Check `bhardwaj93kartiekey@gmail.com` for the email
3. Email should arrive within 1-2 minutes

### Test Google Sheets:
1. Submit the contact form
2. Check your Google Sheet: [Your Sheet](https://docs.google.com/spreadsheets/d/1dMn7QYmW3L6bIELQBS-Z5uPc_Hl_hw9c9aIW35mWpFo/edit)
3. New row should appear with the form data

---

## 🔧 Troubleshooting

### Email Issues:
- **No email received**: Check EmailJS template variables match the code
- **Template error**: Ensure template uses `{{variable_name}}` format
- **Service error**: Verify Gmail service is connected and authorized

### Google Sheets Issues:
- **Script error**: Check Apps Script logs (View → Logs)
- **Permission error**: Re-run deployment with correct permissions
- **URL error**: Ensure you copied the full web app URL

### Both Services:
- **Form not submitting**: Check browser console for JavaScript errors
- **Success message not showing**: Verify both services are configured correctly

---

## 📧 What Happens When Someone Submits the Form:

1. **Instant**: Form validates and shows loading spinner
2. **~2 seconds**: Data sent to both EmailJS and Google Sheets
3. **Success**: User sees success message
4. **Email**: You receive formatted email at `bhardwaj93kartiekey@gmail.com`
5. **Sheet**: New row added to your Google Sheet with all details

---

## 🎉 You're All Set!

Once you complete these steps:
- ✅ All form submissions will email you instantly
- ✅ All data will be automatically saved to your Google Sheet
- ✅ Professional formatted emails with all lead details
- ✅ Organized spreadsheet for lead management
- ✅ Automatic timestamps and status tracking

**Your R-YASS Digital Co. website is now a lead-generating machine!** 🚀 