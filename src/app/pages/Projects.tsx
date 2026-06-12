import { useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { motion } from 'motion/react';
import { EnquiryModal } from '../components/EnquiryModal';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { projects } from '../config/projects';

export function Projects() {
  const [filter, setFilter] = useState('all');
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<string | undefined>();
  const navigate = useNavigate();

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'home', label: 'Homes' },
    { value: 'hostel', label: 'Hostels' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const handleEnquiry = (projectTitle: string) => {
    setSelectedProject(projectTitle);
    setEnquiryOpen(true);
  };

  return (
    <div>
      <EnquiryModal 
        isOpen={enquiryOpen} 
        onClose={() => {
          setEnquiryOpen(false);
          setSelectedProject(undefined);
        }}
        projectTitle={selectedProject}
      />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 relative overflow-hidden"
      >
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 30, repeat: Infinity }}
          className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl mb-6">Our Projects</h1>
            <p className="text-xl text-gray-300">
              Explore our portfolio of quality homes and hostels across Kota, Rajasthan.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Filter Section */}
      <section className="py-8 border-b border-gray-200 bg-white sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category.value}
                onClick={() => setFilter(category.value)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full transition-all cursor-pointer ${
                  filter === category.value
                    ? 'bg-orange-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid (Pinterest-style Masonry) */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
            <Masonry gutter="24px">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ y: 50, opacity: 0, scale: 0.95 }}
                  whileInView={{ y: 0, opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  onClick={() => navigate(`/projects/${project.id}`)}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group cursor-pointer border border-gray-100 relative"
                >
                  <div className="relative overflow-hidden bg-gray-100 w-full h-full">
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-full"
                    >
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto object-cover block"
                      />
                    </motion.div>
                    
                    {/* Category Badge - Always visible */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-orange-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold uppercase shadow-md">
                        {categories.find(c => c.value === project.category)?.label}
                      </span>
                    </div>

                    {/* Pinterest-style hover overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white z-10">
                      <h3 className="text-lg font-bold mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        {project.title}
                      </h3>
                      <div className="flex justify-between items-center text-xs text-gray-300 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                        <span>📍 {project.location}</span>
                        <span className="text-orange-400 font-semibold flex items-center gap-1">
                          View details <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </section>
    </div>
  );
}
