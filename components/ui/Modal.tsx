import React from 'react';
import { motion } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 backdrop-blur-lg z-50">
      <motion.div
        className="bg-white rounded-lg shadow-lg overflow-hidden w-11/12 md:w-1/3"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold text-red-600">{title}</h2>
          <p className="mt-4 text-gray-700">{content}</p>
          <button
            className="mt-6 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition duration-200"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Modal;