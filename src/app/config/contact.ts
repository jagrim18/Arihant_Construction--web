/**
 * ARIHANT BUILDERS - CONTACT CONFIGURATION
 * 
 * Update these details to receive enquiries on your email and WhatsApp
 */

export const CONTACT_CONFIG = {
  // Owner's Email (where form submissions will be sent)
  email: 'info@arihantbuilders.com',
  
  // Owner's WhatsApp Number (format: country code + number, no + or spaces)
  // Example: For +91 98765 43210, enter: 919876543210
  whatsappNumber: '919799926945',
  
  // Owner's Phone Number (for display)
  phone: '+91 97999 26945',
  
  // Business Location (for Google Maps directions)
  businessLocation: {
    // Display address (shown on website)
    address: 'Kota, Rajasthan, India',
    
    // For EXACT location with coordinates:
    // STEP 1: Go to Google Maps and find your business location
    // STEP 2: Right-click on your exact location and click the coordinates (they will copy)
    // STEP 3: Paste them here in format: 'latitude,longitude'
    // Example: '25.1773,75.8346' (for Kota city center)
    coordinates: '25.1773,75.8346',
    
    // Alternative: If you don't have coordinates, you can use full address
    // Leave coordinates empty ('') and it will use the address below
    // Example: 'Shop 5, Commerce College Road, Kota, Rajasthan, India'
    fallbackAddress: 'Kota, Rajasthan, India',
  },
  
  // Business Hours
  businessHours: {
    weekdays: 'Monday - Saturday: 9am - 7pm',
    weekend: 'Sunday: 10am - 4pm',
  },
};

/**
 * INSTRUCTIONS TO UPDATE:
 * 
 * 1. EMAIL: Replace 'info@arihantbuilders.com' with your actual email
 * 
 * 2. WHATSAPP: Replace '919876543210' with your WhatsApp number
 *    - Remove all spaces and special characters
 *    - Start with country code (91 for India)
 *    - Example: +91 98765 43210 becomes 919876543210
 * 
 * 3. EXACT LOCATION WITH COORDINATES (RECOMMENDED):
 *    Step 1: Open Google Maps (maps.google.com)
 *    Step 2: Search for your business or navigate to exact location
 *    Step 3: Right-click on the exact spot
 *    Step 4: Click the coordinates at the top (e.g., "25.1773, 75.8346")
 *    Step 5: Paste here in coordinates field
 *    
 *    Example coordinates for Kota locations:
 *    - Kota City Center: '25.1773,75.8346'
 *    - Commerce College Road: '25.1420,75.8350'
 *    - Dadabari: '25.1950,75.8600'
 *    - Talwandi: '25.1340,75.8540'
 * 
 * 4. After updating, the changes will automatically apply to:
 *    - Project Enquiry Form
 *    - Contact Page Form
 *    - Footer Information
 *    - Google Maps Directions (with exact location)
 */

// Helper function to get Google Maps destination
export const getGoogleMapsDestination = () => {
  if (CONTACT_CONFIG.businessLocation.coordinates && CONTACT_CONFIG.businessLocation.coordinates.trim() !== '') {
    // Use coordinates for exact location
    return CONTACT_CONFIG.businessLocation.coordinates.replace(/\s/g, '');
  } else {
    // Fallback to address
    return CONTACT_CONFIG.businessLocation.fallbackAddress.replace(/\s/g, '+');
  }
};