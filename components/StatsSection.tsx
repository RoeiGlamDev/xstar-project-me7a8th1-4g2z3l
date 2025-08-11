import React from 'react';
import { motion } from 'framer-motion';

interface Stats {
  title: string;
  value: number;
  description: string;
}

const statsData: Stats[] = [
  { title: 'AI Videos Created', value: 12000, description: 'Innovative AI-generated videos' },
  { title: 'Users Engaged', value: 5000, description: 'Active users leveraging AI technology' },
  { title: 'Awards Won', value: 15, description: 'Recognized for excellence in AI solutions' },
];

const StatsSection: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-red-600 mb-8">AI Achievements</h2>
        <div className="flex flex-wrap justify-center gap-10">
          {statsData.map((stat) => (
            <motion.div
              key={stat.title}
              className="bg-orange-500 rounded-lg shadow-lg p-6 w-full md:w-1/3 transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-semibold text-white">{stat.title}</h3>
              <motion.span
                className="block text-4xl font-bold text-white my-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {stat.value}
              </motion.span>
              <p className="text-white">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;