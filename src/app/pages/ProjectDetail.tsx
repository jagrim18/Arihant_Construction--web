import { useParams, useNavigate } from 'react-router';
import { projects } from '../config/projects';
import { CONTACT_CONFIG } from '../config/contact';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { motion } from 'motion/react';
import { ArrowLeft, MessageSquare, MapPin, Calendar, CheckCircle, ShieldCheck, Award } from 'lucide-react';

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Project Not Found</h2>
        <button
          onClick={() => navigate('/projects')}
          className="px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
        >
          Back to Projects
        </button>
      </div>
    );
  }

  // Pre-filled WhatsApp message format
  const whatsappMsg = `Hello Arihant Builders, I am interested in your project: "${project.title}" (${project.category === 'home' ? 'Home' : 'Hostel'}) located in ${project.location}. Can you please share more details?`;
  const whatsappUrl = `https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=${encodeURIComponent(whatsappMsg)}`;

  // Category specific highlights
  const highlights = project.category === 'hostel' 
    ? [
        'Close to prime coaching hubs in Kota',
        '24/7 student-focused security & CCTV monitoring',
        'Excellent ventilation and spacious study environment',
        'Quality construction with premium electrical and plumbing fittings'
      ]
    : [
        'Modern architectural design with space optimization',
        'Premium quality construction materials and finishes',
        'Gated community feeling with dedicated parking space',
        'Robust structure built to last for generations'
      ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <motion.button
          onClick={() => navigate('/projects')}
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="inline-flex items-center gap-2 text-gray-600 hover:text-orange-600 font-semibold mb-8 group transition-colors cursor-pointer"
        >
          <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
          Back to Projects
        </motion.button>

        {/* Detail Container */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Left side: Premium Image Display (Pinterest Style Stretched / Full Aspect Ratio) */}
            <div className="p-6 sm:p-8 flex flex-col justify-center bg-gray-100/50">
              <motion.div 
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl overflow-hidden shadow-lg bg-white relative group border border-gray-200"
              >
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto max-h-[70vh] object-contain mx-auto block"
                />
                
                {/* Floating Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-orange-600 text-white font-medium px-4 py-1.5 rounded-full text-sm shadow-md uppercase tracking-wider">
                    {project.category === 'home' ? 'Residential Home' : 'Student Hostel'}
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Right side: Detailed Property Info */}
            <div className="p-8 sm:p-12 flex flex-col justify-between">
              <div>
                {/* Title and Meta info */}
                <h1 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">
                  {project.title}
                </h1>
                
                <div className="flex flex-wrap gap-6 text-gray-600 mb-8 border-y border-gray-150 py-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-orange-600" />
                    <span className="font-medium">{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-orange-600" />
                    <span>Completion Year: <strong className="font-semibold text-gray-800">{project.year}</strong></span>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">Project Description</h3>
                  <p className="text-gray-600 leading-relaxed text-base">
                    {project.description}
                  </p>
                </div>

                {/* Construction Highlights */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Key Specifications & Highlights</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-600 text-sm">
                        <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Call to Action & Trust Badges */}
              <div className="border-t border-gray-100 pt-8 mt-6">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#20ba56] text-white py-4 px-6 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 cursor-pointer text-center"
                >
                  <MessageSquare className="h-6 w-6" />
                  Enquire on WhatsApp
                </a>

                {/* Trust Badges */}
                <div className="grid grid-cols-3 gap-2 mt-8 text-center">
                  <div className="flex flex-col items-center">
                    <ShieldCheck className="h-6 w-6 text-orange-600 mb-1" />
                    <span className="text-[11px] text-gray-500 font-medium">100% Secure Deal</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Award className="h-6 w-6 text-orange-600 mb-1" />
                    <span className="text-[11px] text-gray-500 font-medium">Quality Certified</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <CheckCircle className="h-6 w-6 text-orange-600 mb-1" />
                    <span className="text-[11px] text-gray-500 font-medium">Direct Builder Support</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
