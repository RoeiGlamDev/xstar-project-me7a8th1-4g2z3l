import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  subtitle: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle }) => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-red-500 to-orange-400 text-white">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl font-bold mb-4">
          {title}
        </h1>
        <p className="text-lg mb-8">
          {subtitle}
        </p>
        <div className="flex space-x-4">
          <motion.div
            className="bg-white text-red-500 py-2 px-4 rounded shadow hover:bg-red-500 hover:text-white transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Explore AI Solutions
          </motion.button>
          <motion.div
            className="bg-white text-red-500 py-2 px-4 rounded shadow hover:bg-red-500 hover:text-white transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Get Started
          </motion.button>
        </div>
        <div className="mt-8">
          <p className="text-sm">Trusted by leading companies in AI technology.</p>
        </div>
      </motion.div>
    </section>
  );
};

HeroSection.defaultProps = {
  title: 'AI - Revolutionizing Video Creation',
  subtitle: 'Transforming your ideas into stunning AI-generated videos with cutting-edge technology.',
};

export default HeroSection;