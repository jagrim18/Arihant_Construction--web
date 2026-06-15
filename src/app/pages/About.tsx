import { Award, Target, Eye, Users } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { motion } from 'motion/react';

export function About() {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in every home and hostel we build in Kota.',
    },
    {
      icon: Target,
      title: 'Integrity',
      description: 'Honest communication and transparent practices are at the core of our business.',
    },
    {
      icon: Eye,
      title: 'Innovation',
      description: 'We embrace new technologies and methods to deliver superior results.',
    },
    {
      icon: Users,
      title: 'Teamwork',
      description: 'Collaboration with clients and partners ensures successful project outcomes.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20 relative overflow-hidden"
      >
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl mb-6">About Arihant Builders & Construction</h1>
            <p className="text-xl text-gray-300">
              With over 20 years of experience in Kota, Rajasthan, we've built a reputation for delivering exceptional homes and hostels on time and within budget.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 text-lg">
                <p>
                  Arihant Builders & Construction was founded in 2005 in Kota, Rajasthan with a simple mission: to deliver high-quality residential homes and hostel facilities with integrity and professionalism. What started as a small team has grown into the region's most trusted construction company.
                </p>
                <p>
                  Over the years, we've completed over 250 projects including beautiful homes and student hostels across Kota. Our success is built on strong relationships with our clients, attention to detail, and an unwavering commitment to quality.
                </p>
                <p>
                  Today, we continue to serve Kota's growing community, incorporating sustainable practices and innovative techniques to create buildings that stand the test of time.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0, rotateY: -15 }}
              whileInView={{ x: 0, opacity: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1636414722386-a73bd3fc368c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB0ZWFtJTIwd29ya2luZ3xlbnwxfHx8fDE3NzQxNjc3MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Construction team"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Owner Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50 relative overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0, rotateY: 15 }}
              whileInView={{ x: 0, opacity: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.05, rotateY: -5 }}
              className="order-2 lg:order-1 relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1678803262971-329b90abaa51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjb25zdHJ1Y3Rpb24lMjB3b3JrZXJ8ZW58MXx8fHwxNzc0MTExMzUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Kushal Chand Jain, Founder & CEO"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-4xl mb-6">Meet Our Founder</h2>
              <h3 className="text-2xl text-orange-600 mb-4">Kushal Chand Jain</h3>
              <p className="text-lg text-gray-500 dark:text-gray-400 mb-6">Founder & CEO</p>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  Kushal Chand Jain founded Arihant Builders & Construction with a vision to provide quality housing solutions in Kota. With over 25 years of experience in construction, Rajesh has overseen hundreds of successful projects across the city.
                </p>
                <p>
                  A licensed civil engineer and contractor, Rajesh's expertise spans residential homes and hostel construction. His deep understanding of Kota's education sector needs has made Arihant Builders & Construction the preferred choice for student hostel construction.
                </p>
                <p>
                  Under Rajesh's leadership, Arihant Builders & Construction has become synonymous with quality, reliability, and trust in Kota. When he's not on-site, Rajesh enjoys mentoring young engineers and contributing to the community's development.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              These principles guide every decision we make and every project we undertake
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0, rotateX: -15 }}
                whileInView={{ y: 0, opacity: 1, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05, rotateX: 5 }}
                className="bg-white dark:bg-card dark:border-border p-8 rounded-lg border border-gray-200 shadow-md hover:shadow-2xl transition-shadow"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/20 text-orange-600 mb-4"
                >
                  <value.icon className="h-6 w-6" />
                </motion.div>
                <h3 className="text-xl mb-3">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
