import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    title: 'AI-Powered Video Creation',
    description: 'Utilize advanced AI algorithms to create stunning videos in minutes, tailored to your needs.',
  },
  {
    title: 'Seamless Integration',
    description: 'Integrate AI with your existing workflows effortlessly, enhancing productivity without disruption.',
  },
  {
    title: 'User-Friendly Interface',
    description: 'Experience a sleek, modern interface designed for ease of use, allowing you to focus on creativity.',
  },
];

const HomePage: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <header className="bg-red-600 p-6">
        <h1 className="text-4xl font-bold text-white">Welcome to AI - VidNexus</h1>
        <p className="text-lg text-orange-300">Your go-to platform for AI-generated videos.</p>
      </header>
      
      <main className="p-8">
        <section className="text-center my-12">
          <motion.div 
            className="text-3xl font-semibold mb-4 text-red-600"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }}
          >
            Revolutionize Your Video Creation
          </motion.h2>
          <motion.div 
            className="text-lg text-gray-700"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.7 }}
          >
            With AI, creating engaging videos has never been easier. Explore our features below.
          </motion.p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="bg-orange-100 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ scale: 0.95 }} 
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-bold text-red-600">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </section>
      </main>

      <footer className="bg-red-600 p-4 text-center">
        <p className="text-white">© 2023 AI. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;