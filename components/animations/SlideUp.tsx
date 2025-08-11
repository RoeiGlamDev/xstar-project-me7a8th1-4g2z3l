import React from 'react';
import { motion } from 'framer-motion';

interface SlideUpProps {
  children: React.ReactNode;
}

const SlideUp: React.FC<SlideUpProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-6"
    >
      <h2 className="text-2xl font-bold text-red-600 mb-4">AI - VidNexus</h2>
      <p className="text-gray-700 text-center mb-4">
        Welcome to VidNexus, where AI meets creativity. We empower users to create stunning AI-generated videos effortlessly.
      </p>
      <p className="text-gray-600 text-center">
        Harness the power of advanced technology to transform ideas into engaging visual content with AI.
      </p>
      <div className="mt-4">
        <button className="bg-red-600 text-white font-semibold py-2 px-4 rounded hover:bg-orange-500 transition duration-300">
          Get Started
        </button>
      </div>
      {children}
    </motion.div>
  );
};

export default SlideUp;