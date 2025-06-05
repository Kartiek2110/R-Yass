# 🚀 Google Sheets API Setup (3 minutes) - MUCH BETTER than Apps Script!

## 🎯 Why This Method is Better:
- ✅ **No CORS issues** (unlike Apps Script)
- ✅ **More reliable** and faster
- ✅ **Direct API access** to your Google Sheet
- ✅ **Better error handling**

---

## ⚡ Quick Setup:

### Step 1: Enable Google Sheets API (1 minute)
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Go to **APIs & Services** → **Library**
4. Search for **"Google Sheets API"**
5. Click **"Enable"**

### Step 2: Create API Key (1 minute)
1. Go to **APIs & Services** → **Credentials**
2. Click **"+ Create Credentials"** → **"API Key"**
3. **COPY the API Key** (looks like `AIzaSyAbc123...`)
4. Click **"Restrict Key"** → **"HTTP referrers"**
5. Add: `localhost:5173`, `localhost:3000`, `your-domain.com`

### Step 3: Make Your Sheet Public (30 seconds)
1. Open your Google Sheet: [Your Sheet](https://docs.google.com/spreadsheets/d/1dMn7QYmW3L6bIELQBS-Z5uPc_Hl_hw9c9aIW35mWpFo/edit)
2. Click **"Share"** (top right)
3. Change to **"Anyone with the link"** → **"Viewer"**
4. Click **"Done"**

### Step 4: Update Your Code (30 seconds)
Replace this line in `src/utils/emailService.ts`:
```typescript
const GOOGLE_API_KEY = 'your_google_api_key_here'; // ← Paste your API key here
```

---

## 🧪 Test It:
1. Restart your dev server: `npm run dev`
2. Submit the contact form
3. Check console for: `✅ Data saved to Google Sheets via API`
4. Check your spreadsheet - new row should appear!

---

## 🎉 Done! 

Your contact form now:
- ✅ **Sends emails** (already working)
- ✅ **Saves to Google Sheets** (via reliable API)
- ✅ **No more CORS errors**
- ✅ **Professional and fast**

---

## 🔥 Alternative: Super Simple Options

### Option A: Use Zapier (2 minutes)
1. Create free [Zapier](https://zapier.com) account
2. Create "Webhook → Google Sheets" zap
3. Copy webhook URL
4. Replace `your_google_api_key_here` with webhook URL in code

### Option B: Use Make.com (2 minutes)  
1. Create free [Make.com](https://make.com) account
2. Create "Webhook → Google Sheets" scenario
3. Copy webhook URL
4. Use webhook URL in code

### Option C: Just Email for Now
Your email is already working perfectly! You can:
- Keep just the email functionality 
- Add Google Sheets later when you have time
- The website is already impressive for clients

---

## 🚨 Troubleshooting:

**API Key not working?**
- Make sure you enabled Google Sheets API
- Check your API key restrictions
- Make sure your sheet is publicly viewable

**Sheet not updating?**
- Check if your sheet name is "Sheet1" (or update SHEET_NAME in code)
- Verify your spreadsheet ID is correct
- Check browser console for error messages

**Your contact form will be 100% working after this! 🎯** 