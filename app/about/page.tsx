import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Alice Johnson',
    role: 'CEO & Co-Founder',
    image: '/images/team/alice.jpg'
  },
  {
    name: 'Bob Smith',
    role: 'CTO & Co-Founder',
    image: '/images/team/bob.jpg'
  },
  {
    name: 'Charlie Brown',
    role: 'Lead Engineer',
    image: '/images/team/charlie.jpg'
  }
];

const About: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      <section className="py-10 px-5 text-center">
        <motion.div
          className="text-4xl font-bold text-red-600"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          About AI
        </motion.h1>
        <motion.div
          className="mt-4 text-lg text-gray-700"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          At AI, we are revolutionizing the way videos are created using cutting-edge artificial intelligence technology. Our mission is to empower creators and businesses to produce stunning video content effortlessly.
        </motion.p>
      </section>

      <section className="py-10 bg-red-500 text-white text-center">
        <motion.div
          className="text-3xl font-semibold"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Our History
        </motion.h2>
        <motion.div
          className="mt-4 max-w-2xl mx-auto"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Founded in 2023, AI emerged from a vision to leverage AI technology in video production. Our journey began with a passionate team of engineers and creatives dedicated to simplifying video creation for everyone.
        </motion.p>
      </section>

      <section className="py-10 px-5">
        <motion.div
          className="text-3xl font-semibold text-red-600 text-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Our Team
        </motion.h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              className="bg-white shadow-lg rounded-lg p-5 hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <img src={member.image} alt={member.name} className="w-full h-40 object-cover rounded-t-lg" />
              <h3 className="text-xl font-bold text-red-600 mt-3">{member.name}</h3>
              <p className="text-gray-700">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-10 bg-orange-500 text-white text-center">
        <motion.div
          className="text-3xl font-semibold"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Our Values
        </motion.h2>
        <motion.div
          className="mt-4 max-w-2xl mx-auto"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          At AI, we value innovation, collaboration, and commitment to excellence. We believe in creating an inclusive environment where every idea matters, and we strive to lead the industry with integrity and cutting-edge technology.
        </motion.p>
      </section>
    </div>
  );
};

export default About;