import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface InputProps {
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({ label, type = 'text', value, onChange, required = false }) => {const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState('');

  const handleBlur = () => {
    if (required && !value) {
      setError(${label} is required);
    } else {
      setError('');
    }
  };

  return (
    <div className="flex flex-col mb-4">
      <label className="text-white font-bold mb-2">{label}</label>
      <motion.div
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          setIsFocused(false);
          handleBlur();
        }}
        className={transition duration-300 ease-in-out p-3 rounded bg-white text-black ${
          isFocused ? 'border-2 border-orange-500' : 'border border-gray-300'
        } ${error ? 'border-red-500' : ''} focus:outline-none}
        placeholder={Enter ${label}}
      />
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
};

export default Input;