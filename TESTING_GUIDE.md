# 🧪 Testing Guide - Arihant Builders & Construction Website

## ✅ Complete Functionality Checklist

---

## 1. Contact Information Display

### Test: Navigation & Footer
- [ ] Website shows "Arihant Builders & Construction" in logo
- [ ] Phone number displays in footer: `+91 98765 43210`
- [ ] Email displays in footer: `info@arihantbuilders.com`
- [ ] Location shows "Kota, Rajasthan, India"

**✅ Expected:** Contact info from config file appears everywhere

---

## 2. Enquiry Modal (Pop-up Form)

### Where to Test:
- Home page: Click "Enquire Now" button
- Projects page: Click "Enquire Now" on any project
- Process page: Click "Contact Us Today"

### Test Steps:
1. **Click any "Enquire Now" button**
   - [ ] Modal opens with smooth animation
   - [ ] Form appears with all fields

2. **Fill out the form:**
   - [ ] Name field works
   - [ ] Email field works
   - [ ] Phone field works
   - [ ] Property Type dropdown works
   - [ ] Budget dropdown works
   - [ ] Message textarea works

3. **Submit the form:**
   - [ ] Success screen appears
   - [ ] Green WhatsApp button visible
   - [ ] Blue Email button visible

4. **Click WhatsApp button:**
   - [ ] WhatsApp opens (web or app)
   - [ ] Message is pre-filled with all details
   - [ ] Message goes to correct number
   - [ ] All form data is in the message

5. **Click Email button:**
   - [ ] Email client opens
   - [ ] Email address is correct
   - [ ] Subject line includes customer name
   - [ ] Body contains all enquiry details

**✅ Expected:** Both WhatsApp and Email contain complete customer information

---

## 3. Contact Page Form

### Where to Test:
- Navigate to "Contact" page from menu

### Test Steps:
1. **Fill contact form:**
   - [ ] All fields work (Name, Email, Phone, Project Type, Message)

2. **Submit:**
   - [ ] Success screen shows
   - [ ] WhatsApp button appears
   - [ ] Email button appears

3. **Click buttons:**
   - [ ] WhatsApp opens with pre-filled message
   - [ ] Email opens with pre-filled message

**✅ Expected:** Same functionality as enquiry modal

---

## 4. Google Maps Integration

### Where to Test:
- Contact page, scroll down to map section

### Test Steps:
1. **Hover over map:**
   - [ ] "Click for directions →" appears
   - [ ] Map icon scales up
   - [ ] Coordinates display below (if set)

2. **Click the map:**
   - [ ] Google Maps opens in new tab
   - [ ] Shows "Directions to [your location]"
   - [ ] Location matches your coordinates/address
   - [ ] Can see route from current location

**✅ Expected:** Google Maps opens with correct destination

---

## 5. Navigation & 3D Effects

### Test All Pages:
1. **Home page:**
   - [ ] Hero section animates in
   - [ ] Stats section has animations
   - [ ] Floating background elements visible
   - [ ] Cards have hover effects

2. **About page:**
   - [ ] Owner photo has 3D effect on hover
   - [ ] Values cards animate
   - [ ] Background animations visible

3. **Projects page:**
   - [ ] Filter buttons work
   - [ ] Project cards animate on scroll
   - [ ] Images zoom on hover
   - [ ] "Enquire Now" button per project works

4. **Process page:**
   - [ ] Process steps animate on scroll
   - [ ] Icons rotate on hover
   - [ ] Background gradients animate

5. **Contact page:**
   - [ ] Form has focus effects
   - [ ] Contact cards have hover animations
   - [ ] Map has hover effect

**✅ Expected:** Smooth 3D animations throughout

---

## 6. Responsive Design

### Test on Different Devices:

**Mobile (< 768px):**
- [ ] Mobile menu works
- [ ] All pages scroll smoothly
- [ ] Forms are easy to fill
- [ ] WhatsApp opens in app (not web)
- [ ] Buttons are touch-friendly

**Tablet (768px - 1024px):**
- [ ] Layout adjusts properly
- [ ] Navigation visible
- [ ] Cards display in 2 columns

**Desktop (> 1024px):**
- [ ] Full navigation visible
- [ ] 3D effects work smoothly
- [ ] All animations perform well

**✅ Expected:** Website works on all screen sizes

---

## 7. Configuration File Test

### Test Changing Config:

1. **Open:** `/src/app/config/contact.ts`

2. **Change email:**
   ```typescript
   email: 'test@example.com',
   ```
   - [ ] Footer updates
   - [ ] Contact page updates
   - [ ] Email button uses new address

3. **Change WhatsApp number:**
   ```typescript
   whatsappNumber: '919999999999',
   ```
   - [ ] WhatsApp button uses new number

4. **Change coordinates:**
   ```typescript
   coordinates: '25.2000,75.9000',
   ```
   - [ ] Map link updates
   - [ ] New coordinates show on contact page

**✅ Expected:** All updates reflect immediately

---

## 8. WhatsApp Message Format

### Expected Message Content:

```
New Project Enquiry - Arihant Builders & Construction

Name: [Customer Name]
Email: [Customer Email]
Phone: [Customer Phone]
Property Type: [Selected Type]
Budget: ₹[Budget Range] Lakhs
Interested In: [Project Name - if from project page]

Message:
[Customer's detailed message]
```

**✅ All information must be included**

---

## 9. Email Format

### Expected Email:

**To:** Your configured email
**Subject:** "New Enquiry from [Customer Name]" or "Contact Form: [Customer Name]"
**Body:** Same format as WhatsApp message

**✅ All information must be included**

---

## 10. Cross-Browser Testing

Test on different browsers:

**Chrome:**
- [ ] All animations work
- [ ] WhatsApp opens
- [ ] Email opens

**Firefox:**
- [ ] All animations work
- [ ] WhatsApp opens
- [ ] Email opens

**Safari (Mac/iOS):**
- [ ] All animations work
- [ ] WhatsApp opens
- [ ] Email opens

**Edge:**
- [ ] All animations work
- [ ] WhatsApp opens
- [ ] Email opens

**✅ Expected:** Consistent experience across browsers

---

## 🐛 Common Issues & Fixes

### WhatsApp Not Opening?

**Problem:** Number format incorrect
**Fix:** Must be `919876543210` (no +, no spaces, no hyphens)

**Problem:** WhatsApp not installed
**Fix:** Will open WhatsApp Web instead

**Problem:** Browser blocking pop-up
**Fix:** Allow pop-ups for your website

---

### Map Not Opening?

**Problem:** Coordinates have spaces
**Fix:** Remove spaces: `25.1773,75.8346` (no space after comma)

**Problem:** Wrong coordinates
**Fix:** Get from Google Maps - right-click location → click coordinates

---

### Email Not Opening?

**Problem:** No email client configured
**Fix:** This is normal on some devices - user needs email app installed

---

## ✨ Final Checklist

Before going live:

- [ ] Update email in config file
- [ ] Update WhatsApp number in config file
- [ ] Add your exact coordinates
- [ ] Test enquiry form → WhatsApp works
- [ ] Test enquiry form → Email works
- [ ] Test map → Opens Google Maps
- [ ] Test on mobile device
- [ ] Test on desktop
- [ ] All contact info displays correctly
- [ ] All 3D animations work smoothly

---

## 📱 Test on Your Phone!

**Important:** WhatsApp works best when tested on actual phone:

1. Open website on mobile
2. Fill enquiry form
3. Submit
4. Click "Send via WhatsApp"
5. WhatsApp app should open directly
6. Message should be pre-filled

**✅ This is the real customer experience!**

---

## 🎯 Success Criteria

Your website is ready when:

✅ Enquiry forms send to your WhatsApp
✅ Enquiry forms send to your email
✅ Map opens to your exact location
✅ All 3D effects work smoothly
✅ Works on mobile and desktop
✅ All contact information is correct

---

**Ready to Launch!** 🚀

Once all tests pass, your website is ready to receive customer enquiries!
