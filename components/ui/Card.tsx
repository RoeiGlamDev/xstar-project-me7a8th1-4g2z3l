import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <motion.div
      className="bg-white bg-opacity-30 backdrop-blur-lg border border-red-500 rounded-lg shadow-lg p-6 transition-transform transform hover:-translate-y-1 hover:shadow-xl"
      whileHover={{ scale: 1.05 }}
    >
      <h3 className="text-2xl font-bold text-red-600 mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
      <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-orange-500 transition-colors">
        Learn More
      </button>
    </motion.div>
  );
};

const VidNexusCard: React.FC = () => {
  return (
    <Card
      title="AI Video Creation"
      description="Harness the power of AI to create stunning videos effortlessly with VidNexus. Our advanced algorithms analyze and generate high-quality video content tailored to your needs."
    />
  );
};

export default VidNexusCard;