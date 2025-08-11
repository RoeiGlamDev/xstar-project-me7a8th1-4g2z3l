import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
}

const buttonVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, onClick }) => {
  const baseStyles = "focus:outline-none rounded-lg transition duration-300 ease-in-out";
  const primaryStyles = "bg-red-600 text-white hover:bg-red-500";
  const secondaryStyles = "bg-orange-500 text-white hover:bg-orange-400";

  const variantStyles = variant === 'primary' ? primaryStyles : secondaryStyles;

  return (
    <motion.div
      className={`${baseStyles`} ${variantStyles} px-6 py-2}
      onClick={onClick}
      variants={buttonVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
    >
      {children}
    </motion.button>
  );
};

export default Button;