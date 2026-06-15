# 🏗️ Arihant Builders & Construction - Website Setup Instructions

## 📋 Quick Setup Guide

All business contact information is centralized in one file for easy updates.

### 📂 Location: `/src/app/config/contact.ts`

---

## 1️⃣ Update Email Address

```typescript
email: 'youremail@example.com',  // Replace with your actual email
```

**What happens:** All enquiry forms will send pre-filled emails to this address.

---

## 2️⃣ Update WhatsApp Number

```typescript
whatsappNumber: '919876543210',  // Replace with your WhatsApp number
```

**⚠️ Important Format:**
- Remove ALL spaces and special characters
- Start with country code (91 for India)
- NO plus (+) sign
- NO hyphens (-)

**Examples:**
- ❌ Wrong: `+91 98765 43210`
- ❌ Wrong: `91-98765-43210`
- ✅ Correct: `919876543210`

**What happens:** When customers click "Send via WhatsApp" button, it opens WhatsApp with a pre-filled message to this number.

---

## 3️⃣ Update Business Location (RECOMMENDED: Use Coordinates)

### Option A: Using Exact Coordinates (BEST FOR ACCURACY)

**Step-by-step:**

1. Open Google Maps: https://maps.google.com
2. Search for your business or navigate to exact location
3. **Right-click** on your exact business location
4. Click the **coordinates** at the top of the menu (they will automatically copy)
   - Example: `25.1773, 75.8346`
5. Paste in the config file:

```typescript
coordinates: '25.1431564,75.8456484',  // Paste your coordinates here
```

**📍 Example Coordinates for Kota Areas:**
- Kota City Center: `25.1431564,75.8456484`
- Commerce College Road: `25.1420,75.8350`
- Dadabari: `25.1950,75.8600`
- Talwandi: `25.1340,75.8540`
- Indra Vihar: `25.1620,75.8520`
- Kunhari: `25.1580,75.8680`

### Option B: Using Address (Alternative)

If you don't have coordinates, you can use full address:

```typescript
coordinates: '',  // Leave empty
fallbackAddress: 'Shop 5, Commerce College Road, Kota, Rajasthan, India',
```

**What happens:** When customers click the map location on Contact page, Google Maps opens with directions to your exact location.

---

## 4️⃣ Update Display Information

```typescript
phone: '+91 98765 43210',  // Your display phone number
```

```typescript
businessLocation: {
  address: 'Kota, Rajasthan, India',  // Shown on website
}
```

```typescript
businessHours: {
  weekdays: 'Monday - Saturday: 9am - 7pm',
  weekend: 'Sunday: 10am - 4pm',
}
```

---

## ✅ Verification Checklist

After updating the config file, verify:

- [ ] Email opens correctly when you test enquiry form
- [ ] WhatsApp opens correctly with pre-filled message
- [ ] Map directions open to correct location
- [ ] Phone number displays correctly on website
- [ ] Business hours show correctly

---

## 🎯 How It Works

### When a Customer Enquires:

1. **Fills out form** with their details (name, email, phone, project type, message)
2. **Clicks Submit**
3. **Sees success screen** with two options:
   - 🟢 **Send via WhatsApp** - Opens WhatsApp with pre-filled message
   - 🔵 **Send via Email** - Opens email client with pre-filled email

### Both Methods Include:
- Customer's name
- Customer's email
- Customer's phone number
- Property type they're interested in
- Their budget (if provided)
- Their detailed message

### Map Location:
- Customers can click the map on Contact page
- Opens Google Maps with directions to your business
- Uses exact coordinates for precision

---

## 📱 Where Information Appears

Your contact details will automatically update in:

1. **Enquiry Modal** (pops up when clicking "Enquire Now")
2. **Contact Page Form**
3. **Contact Information Cards**
4. **Footer** (bottom of every page)
5. **Google Maps Directions Link**

---

## 🆘 Common Issues & Solutions

### WhatsApp Not Opening?

**Check:**
- WhatsApp number format is correct (no spaces, starts with country code)
- You're testing on a device with WhatsApp installed
- Your browser allows pop-ups

### Map Directions Going to Wrong Location?

**Solution:**
- Get exact coordinates from Google Maps (see Step 3 above)
- Make sure there are no spaces in coordinates
- Format: `latitude,longitude` (comma-separated, no spaces)

### Email Not Opening?

**Note:** This uses `mailto:` which opens your default email client. Make sure you have an email app configured on your device.

---

## 🎨 Design Note

All design and 3D animations remain unchanged! Only the contact information needs to be updated.

---

## 📞 Current Test Settings

The website is currently configured with test data:

- Email: `info@arihantbuilders.com`
- WhatsApp: `919876543210`
- Location: Kota City Center coordinates

**Replace these with your actual business details!**

---

## 💡 Pro Tips

1. **Use Coordinates** - Much more accurate than addresses
2. **Test Everything** - Submit a test enquiry to verify all links work
3. **Check Mobile** - Test WhatsApp integration on a mobile device
4. **Update Regularly** - If you change location or phone, update the config file

---

**Need Help?** All settings are in one file: `/src/app/config/contact.ts`
