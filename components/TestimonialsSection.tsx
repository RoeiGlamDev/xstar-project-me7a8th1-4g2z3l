import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
    id: number;
    name: string;
    role: string;
    company: string;
    content: string;
    rating: number;
    image: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: 'Alice Johnson',
        role: 'Product Manager',
        company: 'Tech Innovations',
        content: 'AI transformed our video content creation process, making it faster and more engaging. Our audience loves the personalized touch!',
        rating: 5,
        image: '/images/alice.jpg',
    },
    {
        id: 2,
        name: 'Mark Thompson',
        role: 'Marketing Director',
        company: 'Digital Solutions',
        content: 'Thanks to AI, our video marketing campaigns have seen a 40% increase in engagement. The quality is exceptional!',
        rating: 4,
        image: '/images/mark.jpg',
    },
    {
        id: 3,
        name: 'Sarah Lee',
        role: 'Content Creator',
        company: 'Creative Hub',
        content: 'The AI video generation tool is a game changer! It saves me hours of editing while maintaining high quality.',
        rating: 5,
        image: '/images/sarah.jpg',
    },
];

const TestimonialsSection: React.FC = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold text-red-600 mb-8">What Our Clients Say About AI</h2>
                <div className="flex flex-wrap justify-center">
                    {testimonials.map((testimonial) => (
                        <motion.div
                            key={testimonial.id}
                            className="max-w-xs mx-4 mb-8 p-6 bg-orange-400 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-red-600">{testimonial.name}</h3>
                            <p className="text-sm text-gray-700">{testimonial.role}, {testimonial.company}</p>
                            <p className="mt-4 text-gray-800">{testimonial.content}</p>
                            <div className="mt-2 flex justify-center">
                                {[...Array(5)].map((_, index) => (
                                    <span key={index} className={text-yellow-500 ${index < testimonial.rating ? 'text-yellow-500' : 'text-gray-300'}}>★</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;