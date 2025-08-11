import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  expertise: string;
}

const teamMembers: TeamMember[] = [
  { name: 'Alice Johnson', role: 'Co-Founder & CEO', expertise: 'AI Strategy and Development' },
  { name: 'Bob Smith', role: 'CTO', expertise: 'Machine Learning and Data Science' },
  { name: 'Carol Lee', role: 'Lead Designer', expertise: 'User Experience and Interface Design' },
];

const AboutSection: React.FC = () => {
  return (
    <section className="bg-white text-gray-800 py-16 px-4">
      <div className="container mx-auto">
        <motion.div
          className="text-4xl font-bold text-red-600 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About AI
        </motion.h2>
        <motion.div
          className="text-lg mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          At AI, we are revolutionizing the way videos are created with artificial intelligence. Our mission is to empower creators by providing cutting-edge tools that harness the power of AI to streamline video production.
        </motion.p>
        <motion.div
          className="text-2xl font-semibold text-red-600 mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Our Mission
        </motion.h3>
        <motion.div
          className="text-lg mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Our mission at AI is to make video creation accessible to everyone, utilizing advanced AI algorithms to simplify complex processes and enhance creativity. We believe in the potential of technology to transform storytelling and connect people through engaging content.
        </motion.p>
        <motion.div
          className="text-2xl font-semibold text-red-600 mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Meet the Team
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-orange-500 text-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.2 }}
            >
              <h4 className="text-xl font-bold">{member.name}</h4>
              <p className="text-md">{member.role}</p>
              <p className="text-sm mt-2 italic">{member.expertise}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <p className="text-lg">
            At AI, we value innovation, collaboration, and excellence in technology. Join us on our journey to redefine video creation!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;