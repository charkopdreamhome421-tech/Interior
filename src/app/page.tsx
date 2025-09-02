"use client";

import { motion } from "framer-motion";
import { TrophyIcon, ShieldCheckIcon, TruckIcon, UserGroupIcon } from "@heroicons/react/24/outline";

export default function HomePage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const features = [
    { name: '20+ Years of Experience', description: 'Our team has a wealth of experience in creating stunning and functional interiors.', icon: TrophyIcon },
    { name: '10-Year Warranty', description: 'We stand by our work with a comprehensive 10-year warranty on all our projects.', icon: ShieldCheckIcon },
    { name: '45-Day Delivery', description: 'Get your dream home interiors delivered on time, every time. That\'s our guarantee.', icon: TruckIcon },
    { name: '6000+ Happy Customers', description: 'Our commitment to quality and service has earned us the trust of thousands of clients.', icon: UserGroupIcon },
  ];

  const workProcess = [
    { number: '01', name: 'Consultation', description: 'Understand your space, needs, and vision.' },
    { number: '02', name: 'Design & Planning', description: 'Create 3D designs and finalize materials.' },
    { number: '03', name: 'Execution', description: 'Professional implementation with quality checks.' },
    { number: '04', name: 'Handover', description: 'Ready-to-move-in interiors, delivered on time.' },
  ];

  const testimonials = [
    { quote: 'One of the best and professional interior designers in Bangalore. Excellent work done by the Shree Karni team and in a reasonable price with no hidden charges along with high quality work. I am highly satisfied with their work.', author: 'Ankit kumar' },
    { quote: 'Ganesh did an amazing job with the woodwork of our home. He literally created what we imagined and shared with him. The efficiency, the quality of material used, the rates, was a perfect blend of comfort for us.', author: 'Rohan gogia' },
  ];

  const projects = [
    { name: 'Elegant Kitchen', description: 'Functionality meets sophisticated design.', imageUrl: 'https://www.shreekarniinteriors.com/images/services/1.jpg' },
    { name: 'Cozy Bedroom Retreat', description: 'Warm, inviting, and full of character.', imageUrl: 'https://www.shreekarniinteriors.com/images/services/4.jpg' },
    { name: 'Modern Living Room', description: 'A sleek and contemporary design.', imageUrl: 'https://www.shreekarniinteriors.com/images/services/7.jpg' },
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <motion.section className="relative text-center py-24 md:py-40 px-6 text-white overflow-hidden" initial="hidden" animate="visible" variants={staggerContainer}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://www.shreekarniinteriors.com/images/sl1.jpg')" }} />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10">
          <motion.h1 className="text-5xl md:text-6xl font-extrabold tracking-tight" variants={fadeIn}>
            Transforming Spaces, Creating Dreams
          </motion.h1>
          <motion.p className="text-lg md:text-xl mt-6 max-w-2xl mx-auto text-gray-200" variants={fadeIn}>
            Your vision, our expertise. Let's create something beautiful together.
          </motion.p>
          <motion.button className="mt-10 px-8 py-4 bg-brand-primary text-white font-semibold rounded-lg shadow-md hover:bg-opacity-90 transition-all duration-300" variants={fadeIn} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Explore Our Work
          </motion.button>
        </div>
      </motion.section>

      {/* Featured Projects Section */}
      <motion.section className="py-20" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}>
        <div className="container mx-auto px-6">
          <motion.h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-brand-dark" variants={fadeIn}>
            Featured Projects
          </motion.h2>
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-10" variants={staggerContainer}>
            {projects.map((project) => (
              <motion.div key={project.name} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300" variants={fadeIn}>
                <img src={project.imageUrl} alt={project.name} className="w-full h-56 object-cover" />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-brand-dark">{project.name}</h3>
                  <p className="mt-4 text-gray-700">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section className="bg-gray-50 py-20" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}>
        <div className="container mx-auto px-6">
          <motion.h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-brand-dark" variants={fadeIn}>
            Why Choose Us?
          </motion.h2>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12" variants={staggerContainer}>
            {features.map((feature) => (
              <motion.div key={feature.name} className="text-center" variants={fadeIn}>
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-brand-primary text-white mx-auto">
                  <feature.icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-brand-dark">{feature.name}</h3>
                <p className="mt-2 text-base text-gray-700">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* How We Work Section */}
      <motion.section className="py-20" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}>
        <div className="container mx-auto px-6">
          <motion.h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-brand-dark" variants={fadeIn}>
            Our Simple 4-Step Process
          </motion.h2>
          <motion.div className="grid grid-cols-1 md:grid-cols-4 gap-8" variants={staggerContainer}>
            {workProcess.map((step) => (
              <motion.div key={step.name} className="text-center p-6 border-l-4 border-brand-primary" variants={fadeIn}>
                <div className="text-5xl font-extrabold text-brand-primary mb-4">{step.number}</div>
                <h3 className="text-xl font-bold text-brand-dark mb-2">{step.name}</h3>
                <p className="text-gray-700">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section className="bg-gray-50 py-20" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}>
        <div className="container mx-auto px-6">
          <motion.h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-brand-dark" variants={fadeIn}>
            What Our Clients Say
          </motion.h2>
          <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-10" variants={staggerContainer}>
            {testimonials.map((testimonial) => (
              <motion.blockquote key={testimonial.author} className="p-8 bg-white rounded-xl shadow-lg" variants={fadeIn}>
                <p className="text-lg text-gray-700 leading-relaxed">"{testimonial.quote}"</p>
                <footer className="mt-6 text-right text-base font-bold text-brand-primary">- {testimonial.author}</footer>
              </motion.blockquote>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section className="bg-brand-dark text-white" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeIn}>
        <div className="container mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to start your project?</h2>
          <p className="mt-4 text-lg text-gray-300">Let's talk about how we can bring your vision to life.</p>
          <motion.button className="mt-10 px-8 py-4 bg-brand-primary text-white font-semibold rounded-lg shadow-md hover:bg-opacity-90 transition-all duration-300" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Get in Touch
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
}
