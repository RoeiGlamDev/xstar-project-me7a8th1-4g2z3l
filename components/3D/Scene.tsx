import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei';
import { motion } from 'framer-motion';

interface SceneProps {
  title: string;
}

const Scene: React.FC<SceneProps> = ({ title }) => {
  return (
    <div className="w-full h-screen bg-white flex items-center justify-center">
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="cursor-pointer"
        >
          <Box args={[1, 1, 1]} position={[0, 0, 0]}>
            <meshStandardMaterial color="orange" />
          </Box>
        </motion.mesh>
      </Canvas>
      <div className="absolute text-center text-red-600">
        <h1 className="text-5xl font-bold mb-4">{title}</h1>
        <p className="text-xl">
          Welcome to <span className="text-orange-500">AI</span> - The future of video creation with cutting-edge technology.
        </p>
        <p className="mt-4">
          Harness the power of AI to produce stunning videos seamlessly. 
        </p>
      </div>
    </div>
  );
};

export default Scene;