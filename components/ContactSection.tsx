import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactFormData {
    name: string;
    email: string;
    message: string;
    reason: string;
}

const ContactSection: React.FC = () => {
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        message: '',
        reason: 'Inquiry',
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [submitted, setSubmitted] = useState<boolean>(false);

    const validateForm = (): boolean => {
        const newErrors: { [key: string]: string } = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.message) newErrors.message = 'Message is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            setSubmitted(true);
            // Handle form submission, e.g., send to API
        }
    };

    return (
        <section className="bg-white p-8 rounded-lg shadow-lg">
            <motion.div 
                className="text-2xl font-bold text-center text-red-600 mb-4"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5 }}
            >
                Contact AI
            </motion.h2>
            <p className="text-center text-gray-700 mb-6">
                For inquiries about AI technology and video solutions, please fill out the form below.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-gray-700">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={w-full p-2 border rounded ${errors.name ? 'border-red-500' : 'border-gray-300'}}
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>
                <div>
                    <label htmlFor="email" className="block text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={w-full p-2 border rounded ${errors.email ? 'border-red-500' : 'border-gray-300'}}
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
                <div>
                    <label htmlFor="reason" className="block text-gray-700">Reason for Contact</label>
                    <select
                        id="reason"
                        value={formData.reason}
                        onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                        className="w-full p-2 border rounded border-gray-300"
                    >
                        <option value="Inquiry">General Inquiry</option>
                        <option value="Support">Technical Support</option>
                        <option value="Partnership">Partnership Opportunity</option>
                        <option value="Feedback">Feedback</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="message" className="block text-gray-700">Message</label>
                    <textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className={w-full p-2 border rounded ${errors.message ? 'border-red-500' : 'border-gray-300'}}
                        rows={4}
                    />
                    {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                </div>
                <motion.div
                    type="submit"
                    className="w-full bg-gradient-to-r from-red-600 to-orange-500 text-white py-2 rounded transition hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                >
                    Send Message
                </motion.button>
            </form>
            {submitted && <p className="mt-4 text-green-600 text-center">Thank you for contacting AI!</p>}
            <div className="mt-6 text-center">
                <h3 className="text-lg font-semibold text-red-600">Business Information</h3>
                <p className="text-gray-700">Location: 123 AI Street, Tech City, TC 12345</p>
                <p className="text-gray-700">Business Hours: Mon-Fri 9 AM - 5 PM</p>
                <p className="text-gray-700">Email: contact@ai.com</p>
                <p className="text-gray-700">Phone: (123) 456-7890</p>
            </div>
        </section>
    );
};

export default ContactSection;