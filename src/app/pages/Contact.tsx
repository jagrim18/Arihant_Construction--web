import { Mail, Phone, MapPin, Clock } from 'lucide-react';

import { motion } from 'motion/react';
import { CONTACT_CONFIG, getGoogleMapsDestination } from '../config/contact';

export function Contact() {
  const sendViaWhatsApp = () => {
    const whatsappMessage = encodeURIComponent('Hi, I would like to enquire about your construction services.');
    const whatsappLink = `https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=${whatsappMessage}`;
    window.open(whatsappLink, '_blank');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: [CONTACT_CONFIG.phone, 'Mon-Sat 9am-7pm'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: [CONTACT_CONFIG.email, 'We reply within 24 hours'],
    },
    {
      icon: MapPin,
      title: 'Office',
      details: [CONTACT_CONFIG.businessLocation.address, 'India - 324001'],
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: [CONTACT_CONFIG.businessHours.weekdays, CONTACT_CONFIG.businessHours.weekend],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 relative overflow-hidden"
      >
        <motion.div
          animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl mb-6">Get In Touch</h1>
            <p className="text-xl text-gray-300">
              Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl mb-8">Send Us a Message</h2>
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <p className="mb-6 text-gray-600 text-lg">
                  Connect with us directly on WhatsApp to discuss your requirements.
                </p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={sendViaWhatsApp}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-lg transition-all shadow-lg flex items-center justify-center gap-3 text-lg"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Chat on WhatsApp
                </motion.button>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl mb-8">Contact Information</h2>
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 5, scale: 1.02 }}
                    className="flex gap-4 bg-white p-6 rounded-xl shadow-md"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="flex-shrink-0"
                    >
                      <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                        <info.icon className="h-6 w-6 text-orange-600" />
                      </div>
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map Placeholder */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.02 }}
                className="h-64 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl flex items-center justify-center border border-orange-200 shadow-md cursor-pointer overflow-hidden"
              >
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${getGoogleMapsDestination()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center text-orange-600 hover:text-orange-700 transition-colors w-full h-full flex flex-col items-center justify-center p-6"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <MapPin className="h-16 w-16 mx-auto mb-4" />
                  </motion.div>
                  <p className="text-lg font-semibold">Kota, Rajasthan</p>
                  <p className="text-gray-600">Visit us for a consultation</p>
                  <motion.p
                    whileHover={{ x: 5 }}
                    className="text-sm text-orange-500 mt-2 font-medium"
                  >
                    Click for directions →
                  </motion.p>
                  {CONTACT_CONFIG.businessLocation.coordinates && (
                    <p className="text-xs text-gray-500 mt-2">
                      📍 {CONTACT_CONFIG.businessLocation.coordinates}
                    </p>
                  )}
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}