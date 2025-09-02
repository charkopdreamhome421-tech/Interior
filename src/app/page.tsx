"use client";

import { motion } from "framer-motion";

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

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <motion.section
        className="text-center py-24 md:py-32 px-6 bg-gray-50"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900"
          variants={fadeIn}
        >
          Transforming Spaces, Creating Dreams
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mt-6 max-w-2xl mx-auto text-gray-600"
          variants={fadeIn}
        >
          Your vision, our expertise. Let's create something beautiful together.
        </motion.p>
        <motion.button
          className="mt-10 px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
          variants={fadeIn}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Our Work
        </motion.button>
      </motion.section>

      {/* Featured Projects Section */}
      <motion.section
        className="py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900"
            variants={fadeIn}
          >
            Featured Projects
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
            variants={staggerContainer}
          >
            {/* Project Card 1 */}
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300"
              variants={fadeIn}
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900">Modern Living Room</h3>
                <p className="mt-4 text-gray-600">A sleek and contemporary design that maximizes space and light.</p>
              </div>
            </motion.div>
            {/* Project Card 2 */}
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300"
              variants={fadeIn}
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900">Cozy Bedroom Retreat</h3>
                <p className="mt-4 text-gray-600">Warm, inviting, and full of character for ultimate relaxation.</p>
              </div>
            </motion.div>
            {/* Project Card 3 */}
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300"
              variants={fadeIn}
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900">Elegant Kitchen</h3>
                <p className="mt-4 text-gray-600">Where functionality meets sophisticated design for a perfect cooking experience.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="bg-blue-600 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to start your project?</h2>
          <p className="mt-4 text-lg text-blue-100">Let's talk about how we can bring your vision to life.</p>
          <motion.button
            className="mt-10 px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
}
