# ⚡ 2-Minute Quick Setup - R-YASS Digital Co.

## 🚀 Get Your Contact Form Working NOW (2 minutes)

### Step 1: Create EmailJS Account (30 seconds)
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click "Sign Up" → Use Google (quick!)
3. You're in! ✅

### Step 2: Connect Your Gmail (45 seconds)
1. Click "Email Services" → "Add New Service"  
2. Choose **Gmail**
3. Click "Connect Account" → Allow permissions
4. **COPY the Service ID** (looks like `service_abc123`)

### Step 3: Create Email Template (30 seconds)
1. Go to "Email Templates" → "Create New Template"
2. **Just click "Save"** (default template works!)
3. **COPY the Template ID** (looks like `template_xyz789`)

### Step 4: Get Your Public Key (15 seconds)
1. Go to "Account" tab
2. **COPY your Public Key** (looks like `abc123xyz`)

### Step 5: Update Your Website (20 seconds)
Replace these 3 lines in `src/utils/emailService.ts`:

```typescript
const EMAILJS_PUBLIC_KEY = 'your_public_key_here'; // ← Paste your Public Key
const EMAILJS_SERVICE_ID = 'your_service_id_here'; // ← Paste your Service ID  
const EMAILJS_TEMPLATE_ID = 'your_template_id_here'; // ← Paste your Template ID
```

## ✅ Test It!
1. Restart your dev server: `npm run dev`
2. Fill out the contact form
3. Check your email: `bhardwaj93kartiekey@gmail.com`
4. Email should arrive in 1-2 minutes! 🎉

---

## 🔥 That's It! Your Form is LIVE!

**Current Status:**
- ✅ Form validation working
- ✅ Professional UI complete  
- ✅ Email notifications ready
- ⚡ **Just needs your 3 EmailJS values!**

**Next Steps (Optional):**
- Add Google Sheets integration later (see COMPLETE_SETUP_GUIDE.md)
- The website is already impressive for your client! 

---

## 🚨 Need Help?
**Form still not working?** 
1. Check browser console (F12) for errors
2. Make sure you replaced ALL 3 values
3. Restart dev server after changes

**Can't find your EmailJS values?**
- Service ID: Email Services tab
- Template ID: Email Templates tab  
- Public Key: Account tab

**Your contact form will be sending professional emails to `bhardwaj93kartiekey@gmail.com` instantly!** ⚡ 