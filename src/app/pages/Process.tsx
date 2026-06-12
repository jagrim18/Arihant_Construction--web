import { ClipboardCheck, Users, Hammer, CheckCircle, Phone, FileText } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { EnquiryModal } from '../components/EnquiryModal';

export function Process() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  const steps = [
    {
      icon: Phone,
      number: '01',
      title: 'Initial Consultation',
      description: 'We begin with a detailed consultation to understand your vision for your home or hostel. Our team will visit your site in Kota and discuss your project goals and budget.',
      timeline: '1-2 days',
    },
    {
      icon: FileText,
      number: '02',
      title: 'Planning & Design',
      description: 'Our architects and engineers create detailed plans and designs tailored to your needs. We handle all permits and ensure compliance with Kota municipal regulations.',
      timeline: '2-4 weeks',
    },
    {
      icon: ClipboardCheck,
      number: '03',
      title: 'Proposal & Contract',
      description: 'We provide a comprehensive proposal including timeline, budget breakdown, and materials. Once approved, we finalize the contract and schedule.',
      timeline: '1 week',
    },
    {
      icon: Users,
      number: '04',
      title: 'Pre-Construction',
      description: 'Site preparation, material procurement from trusted local suppliers, and team assembly. We conduct a final walkthrough to confirm all details before breaking ground.',
      timeline: '1-2 weeks',
    },
    {
      icon: Hammer,
      number: '05',
      title: 'Construction',
      description: 'Our experienced team executes the project with precision. We provide regular updates and maintain open communication throughout the build.',
      timeline: 'Project dependent',
    },
    {
      icon: CheckCircle,
      number: '06',
      title: 'Final Inspection & Handover',
      description: 'Comprehensive quality inspection, final walkthrough with you, and completion of all documentation. We ensure everything meets your expectations.',
      timeline: '1 week',
    },
  ];

  const qualities = [
    {
      title: 'Safety First',
      description: 'We maintain strict safety protocols on all job sites in Kota, ensuring the well-being of our team and clients.',
    },
    {
      title: 'Quality Materials',
      description: 'We source premium materials from trusted suppliers to ensure durability and longevity.',
    },
    {
      title: 'Regular Updates',
      description: 'Stay informed with weekly progress reports, photos, and direct communication with project managers.',
    },
    {
      title: 'Clean Job Sites',
      description: 'We maintain organized and clean work areas, minimizing disruption to your daily routine.',
    },
  ];

  return (
    <div>
      <EnquiryModal isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20 relative overflow-hidden"
      >
        <motion.div
          animate={{ x: [-100, 100, -100], y: [0, -50, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute top-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl mb-6">Our Working Process</h1>
            <p className="text-xl text-gray-300">
              A transparent, step-by-step approach to bringing your home or hostel project to life in Kota with excellence and efficiency.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4">Six Steps to Success</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              From initial consultation to final handover, we guide you through every stage of your construction project
            </p>
          </motion.div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1">
                  <motion.div
                    whileHover={{ y: -10, scale: 1.02, rotateY: 5 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white dark:bg-card dark:border-border p-8 rounded-2xl border border-gray-200 shadow-md hover:shadow-2xl transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="flex-shrink-0"
                      >
                        <div className="w-16 h-16 rounded-full bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center">
                          <step.icon className="h-8 w-8 text-orange-600" />
                        </div>
                      </motion.div>
                      <div className="flex-1">
                        <div className="text-sm text-orange-600 font-semibold mb-1">{step.timeline}</div>
                        <h3 className="text-2xl mb-3">{step.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
                <div className="flex-shrink-0 lg:w-32 flex lg:flex-col items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-6xl font-bold text-orange-200 dark:text-gray-800"
                  >
                    {step.number}
                  </motion.div>
                  {index < steps.length - 1 && (
                    <motion.div
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="hidden lg:block w-px h-12 bg-orange-300 dark:bg-gray-800 mt-4 origin-top"
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50 relative overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 30, repeat: Infinity }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4">What Sets Us Apart</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our commitment to excellence is reflected in every aspect of our work in Kota
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualities.map((quality, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0, rotateX: -15 }}
                whileInView={{ y: 0, opacity: 1, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white dark:bg-card dark:border-border p-6 rounded-xl border border-gray-200 shadow-md"
              >
                <h3 className="text-xl mb-3 text-orange-600 font-semibold">{quality.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{quality.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-600 via-orange-500 to-orange-600 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 border-t dark:border-border relative overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [360, 180, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl mb-4 text-white">Ready to Get Started?</h2>
            <p className="text-xl text-orange-100 mb-8">
              Let's schedule a consultation to discuss your project and timeline
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setEnquiryOpen(true)}
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-orange-600 dark:text-black dark:bg-white dark:hover:bg-gray-200 px-8 py-4 rounded-lg transition-all shadow-2xl text-lg font-semibold cursor-pointer"
            >
              Contact Us Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
