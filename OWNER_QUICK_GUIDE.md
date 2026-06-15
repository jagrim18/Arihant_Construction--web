# 🚀 Quick Start Guide for Owner

## ✅ Everything Works! Here's What You Need to Know:

---

## 📧 How You Receive Enquiries

When a customer fills out any enquiry form on your website, they will see **TWO BUTTONS**:

1. **🟢 Send via WhatsApp** - Opens WhatsApp with pre-filled message
2. **🔵 Send via Email** - Opens email with pre-filled message

**Both include ALL customer details:**
- Customer name
- Customer email
- Customer phone
- Property type they want
- Their budget
- Their full message

---

## 🗺️ Google Maps Integration

The map location on the Contact page is **CLICKABLE**.

When customers click it:
- Opens Google Maps
- Shows directions to your exact location
- Uses GPS coordinates for accuracy

---

## ⚙️ How to Update Your Information

**EVERYTHING is in ONE file:**

### 📂 File Location: `/src/app/config/contact.ts`

### What to Update:

```typescript
export const CONTACT_CONFIG = {
  // 1. Your Email
  email: 'YOUR_EMAIL@gmail.com',
  
  // 2. Your WhatsApp Number (REMOVE +, spaces, hyphens)
  whatsappNumber: '919876543210',  // Example format
  
  // 3. Display Phone
  phone: '+91 98765 43210',
  
  // 4. Your EXACT Location (Get from Google Maps)
  businessLocation: {
    address: 'Kota, Rajasthan, India',
    coordinates: '25.1431564,75.8456484',  // YOUR COORDINATES HERE
  },
};
```

---

## 📍 How to Get Your Exact Coordinates

### Super Easy - 3 Steps:

1. **Open Google Maps** (maps.google.com)
2. **Find your shop/office** and right-click on exact location
3. **Click the numbers** at the top (e.g., "25.1773, 75.8346") - they auto-copy!
4. **Paste** into the `coordinates:` field

### Example Coordinates for Kota:
- Kota City: `25.1431564,75.8456484`
- Commerce College Road: `25.1420,75.8350`
- Dadabari: `25.1950,75.8600`

---

## 🎯 Customer Journey

### When Someone Wants to Enquire:

1. **Clicks "Enquire Now"** button (appears throughout website)
2. **Fills form** with their details
3. **Clicks Submit**
4. **Chooses how to send:**
   - WhatsApp → You get message on WhatsApp
   - Email → You get email

### Both methods send you the same complete information!

---

## 📱 Testing Everything

### Test Checklist:

1. ✅ Fill out enquiry form with test data
2. ✅ Click "Send via WhatsApp" - Does WhatsApp open?
3. ✅ Click "Send via Email" - Does email client open?
4. ✅ Click map location - Does Google Maps open with directions?

---

## 💡 Important Notes

### WhatsApp Number Format:
- ❌ Wrong: `+91 98765 43210`
- ❌ Wrong: `91-98765-43210`
- ✅ Correct: `919876543210`

### Coordinates Format:
- ✅ Correct: `25.1431564,75.8456484`
- ❌ Wrong: `25.1773, 75.8346` (space after comma)

---

## 🎨 Design Features

Your website includes:

- ✨ 3D animations and effects
- 📱 Mobile responsive
- 🏠 Home page with company overview
- 👤 About page with your story
- 🏗️ Projects portfolio with filters
- 📋 Process explanation
- 📞 Contact page with enquiry form
- 🗺️ Clickable map for directions

**All design stays the same - you only update contact info!**

---

## 🔧 Where Your Info Appears

Your contact details automatically update in:

1. Navigation & Footer
2. Enquiry Forms (modal pop-up)
3. Contact Page
4. Email notifications
5. WhatsApp messages
6. Google Maps directions

---

## 📞 Current Settings (TEST DATA)

```
Email: info@arihantbuilders.com
WhatsApp: +91 98765 43210
Location: Kota City Center (25.1431564,75.8456484)
```

**👉 Replace with YOUR actual details in `/src/app/config/contact.ts`**

---

## ✨ You're All Set!

Just update the config file with your real contact information and you're ready to receive enquiries!

**File to edit:** `/src/app/config/contact.ts`

---

**Questions?** Everything you need is in that one config file. Simple and easy! 🎉
