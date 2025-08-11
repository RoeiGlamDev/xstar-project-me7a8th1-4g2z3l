import React from 'react';
import { motion } from 'framer-motion';

interface FooterProps {
  companyName: string;
  links: { name: string; url: string }[];
  socialMedia: { platform: string; url: string }[];
}

const Footer: React.FC<FooterProps> = ({ companyName, links, socialMedia }) => {
  return (
    <footer className="bg-white text-red-600 py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">AI</h2>
          <p className="text-sm text-gray-600">Leading technology in AI video production.</p>
        </div>
        <nav className="mb-4 md:mb-0">
          <ul className="flex flex-col md:flex-row space-x-0 md:space-x-6">
            {links.map((link) => (
              <li key={link.name}>
                <motion.div
                  href={link.url}
                  className="text-red-600 hover:text-orange-500 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {link.name}
                </motion.a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex space-x-4">
          {socialMedia.map((media) => (
            <motion.div
              key={media.platform}
              href={media.url}
              className="text-red-600 hover:text-orange-500 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <i className={`fab fa-${media.platform`}}></i>
            </motion.a>
          ))}
        </div>
      </div>
      <div className="text-center mt-4">
        <p className="text-gray-600 text-xs">© {new Date().getFullYear()} {companyName}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;