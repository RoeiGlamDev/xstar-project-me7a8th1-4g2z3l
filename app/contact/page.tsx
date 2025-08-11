import React from 'react';
import { motion } from 'framer-motion';

interface ContactFormProps {
  name: string;
  email: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <motion.div 
        className="text-4xl font-bold text-red-600 mb-6" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        Contact AI
      </motion.h1>
      <motion.div 
        onSubmit={handleSubmit} 
        className="bg-orange-500 p-8 rounded-lg shadow-md w-full max-w-md"
        initial={{ scale: 0.8 }} 
        animate={{ scale: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name" 
            className="w-full p-2 rounded-lg border border-white focus:outline-none focus:ring-2 focus:ring-red-600"
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            className="w-full p-2 rounded-lg border border-white focus:outline-none focus:ring-2 focus:ring-red-600"
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="message">Message</label>
          <textarea 
            id="message" 
            className="w-full p-2 rounded-lg border border-white focus:outline-none focus:ring-2 focus:ring-red-600"
            required 
          />
        </div>
        <button 
          type="submit" 
          className="w-full bg-red-600 text-white p-2 rounded-lg hover:bg-red-500 transition duration-300 ease-in-out"
        >
          Send Message
        </button>
      </motion.form>
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-semibold text-red-600">Our Location</h2>
        <p className="text-gray-700">123 Tech Lane, Silicon Valley, CA 94043</p>
        <h3 className="text-xl font-semibold text-red-600 mt-4">Business Hours</h3>
        <p className="text-gray-700">Mon - Fri: 9 AM - 5 PM</p>
        <p className="text-gray-700">Sat - Sun: Closed</p>
      </div>
    </div>
  );
};

export default ContactPage;