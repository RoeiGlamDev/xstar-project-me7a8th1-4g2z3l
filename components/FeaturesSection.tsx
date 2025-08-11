import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    title: 'AI-Powered Video Creation',
    description: 'Leverage advanced AI algorithms to create stunning videos with minimal effort.',
    icon: <i className="fas fa-video text-orange-500"></i>,
  },
  {
    title: 'Intelligent Editing Tools',
    description: 'Utilize smart editing features that enhance your video quality effortlessly.',
    icon: <i className="fas fa-edit text-orange-500"></i>,
  },
  {
    title: 'Real-Time Collaboration',
    description: 'Work seamlessly with teams in real-time to produce content efficiently.',
    icon: <i className="fas fa-users text-orange-500"></i>,
  },
  {
    title: 'Data-Driven Insights',
    description: 'Gain insights from AI analytics to improve your video strategies.',
    icon: <i className="fas fa-chart-line text-orange-500"></i>,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-red-600 mb-6">Transform Your Content with AI</h2>
        <p className="text-lg text-gray-700 mb-12">Explore the innovative features of AI that make video creation a breeze.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-red-600">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;