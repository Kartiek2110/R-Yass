import emailjs from "@emailjs/browser";
import type { ContactFormData } from "../types";

// EmailJS Configuration - Working!
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'VrdlMzPF-fcYAEuqL';
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_0fwgtyg';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_vjlaro1';

// Google Apps Script URL (SIMPLE and WORKING approach!)
const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbw_eT-mc90SrGEWAqrrnOwZobButywRXaNB5ncYwL8hrtIvZCTdJM9ZqrQwcUPm9d2GRg/exec';

// Client email configuration
const CLIENT_EMAIL = "bhardwaj93kartiekey@gmail.com";

// Enhanced email sending with better error handling
export const sendEmail = async (formData: ContactFormData) => {
  try {
    console.log("🚀 Initializing EmailJS...");
    emailjs.init(EMAILJS_PUBLIC_KEY);

    console.log("📧 Sending email with config:", {
      serviceId: EMAILJS_SERVICE_ID,
      templateId: EMAILJS_TEMPLATE_ID,
      publicKey: EMAILJS_PUBLIC_KEY,
    });

    const templateParams = {
      to_email: CLIENT_EMAIL,
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone || "Not provided",
      company: formData.company || "Not provided",
      service: formData.service,
      budget: formData.budget || "Not specified",
      message: formData.message,
      reply_to: formData.email,
    };

    console.log("📋 Template params:", templateParams);

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    console.log("✅ Email sent successfully!", response);
    return { success: true, response };
  } catch (error: unknown) {
    console.error("❌ Email error details:", error);

    const errorMessage = error instanceof Error ? error.message : String(error);
    const errorText = (error as { text?: string })?.text;

    // Provide specific error messages
    if (errorText?.includes("service ID not found")) {
      throw new Error(
        "EmailJS Service ID is incorrect. Please check your EmailJS dashboard."
      );
    } else if (errorText?.includes("template ID not found")) {
      throw new Error(
        "EmailJS Template ID is incorrect. Please check your EmailJS dashboard."
      );
    } else if (errorText?.includes("public key")) {
      throw new Error(
        "EmailJS Public Key is incorrect. Please check your EmailJS account settings."
      );
    }

    throw new Error(
      `Email sending failed: ${errorMessage || errorText || "Unknown error"}`
    );
  }
};

// SIMPLE Google Sheets via Apps Script (Based on your reference code!)
export const saveToGoogleSheets = async (formData: ContactFormData) => {
  try {
    console.log("📊 Saving to Google Sheets via Apps Script...");

    // Create FormData (just like your reference code)
    const googleFormData = new FormData();
    googleFormData.append("timestamp", new Date().toISOString());
    googleFormData.append("name", formData.name);
    googleFormData.append("email", formData.email);
    googleFormData.append("phone", formData.phone || "");
    googleFormData.append("company", formData.company || "");
    googleFormData.append("service", formData.service);
    googleFormData.append("budget", formData.budget || "");
    googleFormData.append("message", formData.message);

    console.log("📋 Sending data to Google Apps Script...");

    // Send to Google Apps Script (exactly like your reference code)
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      body: googleFormData,
      mode: "no-cors", // This is the key - same as your reference!
    });

    console.log("📊 Google Apps Script response:", response);

    // With no-cors, we can't read the response, but if no error was thrown, it worked!
    console.log("✅ Data sent to Google Sheets successfully!");
    return {
      success: true,
      message: "Data sent to Google Sheets via Apps Script",
    };
  } catch (error: unknown) {
    console.error("❌ Google Sheets error:", error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    throw new Error(`Google Sheets saving failed: ${errorMessage}`);
  }
};

// Smart form submission with progressive fallback
export const submitContactForm = async (formData: ContactFormData) => {
  console.log("🚀 Starting form submission...", formData);

  const results = {
    email: null as { success: boolean; response?: unknown } | null,
    sheets: null as { success: boolean; message?: string } | null,
    errors: {
      email: null as Error | null,
      sheets: null as Error | null,
    },
    message: "",
  };

  // Try email first (most important)
  try {
    console.log("📧 Attempting email send...");
    results.email = await sendEmail(formData);
    console.log("✅ Email successful!");
  } catch (error: unknown) {
    console.error("❌ Email failed:", error);
    results.errors.email =
      error instanceof Error ? error : new Error(String(error));
  }

  // Try Google Sheets (secondary)
  try {
    console.log("📊 Attempting Google Sheets save...");
    results.sheets = await saveToGoogleSheets(formData);
    console.log("✅ Google Sheets successful!");
  } catch (error: unknown) {
    console.error("❌ Google Sheets failed:", error);
    results.errors.sheets =
      error instanceof Error ? error : new Error(String(error));
  }

  // Determine success and provide helpful messages
  const emailSuccess = results.email?.success;
  const sheetsSuccess = results.sheets?.success;

  if (emailSuccess && sheetsSuccess) {
    results.message = "🎉 Perfect! Email sent and data saved to spreadsheet.";
    return results;
  } else if (emailSuccess) {
    results.message =
      "✅ Email sent successfully! (Google Sheets had an issue, but your inquiry was received)";
    return results;
  } else if (sheetsSuccess) {
    results.message =
      "✅ Data saved successfully! (Email had an issue, but we got your information)";
    return results;
  } else {
    // Both failed - provide debugging info
    const debugInfo = {
      emailError: results.errors.email?.message,
      sheetsError: results.errors.sheets?.message,
      config: {
        hasEmailJSKey: !!EMAILJS_PUBLIC_KEY,
        hasServiceId: !!EMAILJS_SERVICE_ID,
        hasTemplateId: !!EMAILJS_TEMPLATE_ID,
        hasGoogleScriptUrl: !!GOOGLE_SCRIPT_URL,
      },
    };

    console.error("🚨 Both services failed. Debug info:", debugInfo);
    throw new Error(
      "Unable to process your inquiry. Please try again or contact us directly."
    );
  }
};
