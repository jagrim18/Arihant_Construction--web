import { X } from 'lucide-react';

import { motion, AnimatePresence } from 'motion/react';
import { CONTACT_CONFIG } from '../config/contact';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectTitle?: string;
}

export function EnquiryModal({ isOpen, onClose, projectTitle }: EnquiryModalProps) {
  const sendViaWhatsApp = () => {
    const defaultMessage = projectTitle 
      ? `Hi, I am interested in your project: ${projectTitle}` 
      : 'Hi, I would like to enquire about your construction services.';
    const whatsappMessage = encodeURIComponent(defaultMessage);
    const whatsappLink = `https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=${whatsappMessage}`;
    window.open(whatsappLink, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Header */}
              <div className="bg-gradient-to-r from-orange-600 to-orange-500 p-8 text-white rounded-t-2xl">
                <h2 className="text-3xl mb-2">Project Enquiry</h2>
                <p className="text-orange-100">
                  {projectTitle ? `Enquire about ${projectTitle}` : 'Let us help you build your dream property'}
                </p>
              </div>

              {/* Content */}
              <div className="p-8 text-center">
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
          </div>
        </>
      )}
    </AnimatePresence>
  );
}