import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { motion } from 'framer-motion';

interface FloatingElementProps {
    position: [number, number, number];
    rotationSpeed: number;
}

const FloatingElement: React.FC<FloatingElementProps> = ({ position, rotationSpeed }) => {
    return (
        <Float speed={rotationSpeed} floatingRange={1}>
            <motion.div
                position={position}
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.5 }}
                transition={{ duration: 0.5 }}
            >
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial color="orange" />
            </motion.mesh>
        </Float>
    );
};

const FloatingElements: React.FC = () => {
    return (
        <Canvas>
            <ambientLight intensity={0.5} />
            <directionalLight position={[0, 10, 5]} intensity={1} />
            <FloatingElement position={[0, 0, 0]} rotationSpeed={2} />
            <FloatingElement position={[2, 1, -1]} rotationSpeed={1.5} />
            <FloatingElement position={[-2, -1, 1]} rotationSpeed={1} />
        </Canvas>
    );
};

const FloatingElementsComponent: React.FC = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-white">
            <div className="text-center">
                <h1 className="text-5xl font-bold text-red-600">Welcome to AI</h1>
                <p className="mt-4 text-lg text-orange-500">
                    At AI, we revolutionize the way you create videos with cutting-edge technology.
                </p>
                <p className="mt-2 text-md text-gray-700">
                    Our platform, VidNexus, harnesses the power of artificial intelligence to automate video creation,
                    making it easier than ever to produce professional-grade content.
                </p>
                <div className="mt-8">
                    <a
                        href="#"
                        className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-orange-500 transition duration-300"
                    >
                        Start Creating Now
                    </a>
                </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full">
                <FloatingElements />
            </div>
        </div>
    );
};

export default FloatingElementsComponent;