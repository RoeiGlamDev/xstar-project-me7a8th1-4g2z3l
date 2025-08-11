import React from 'react';
import { motion } from 'framer-motion';

interface PricingTier {
  name: string;
  price: string;
  features: string[];
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Basic AI Video Creation',
    price: '$29/month',
    features: [
      'Up to 5 AI-generated videos',
      'Standard resolution',
      'Basic editing tools',
      'Email support'
    ]
  },
  {
    name: 'Pro AI Video Creation',
    price: '$59/month',
    features: [
      'Up to 15 AI-generated videos',
      'HD resolution',
      'Advanced editing tools',
      'Priority email support',
      'Access to premium templates'
    ]
  },
  {
    name: 'Enterprise AI Video Solutions',
    price: '$199/month',
    features: [
      'Unlimited AI-generated videos',
      '4K resolution',
      'Custom editing tools',
      '24/7 premium support',
      'Dedicated account manager'
    ]
  }
];

const PricingSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <motion.div
          className="text-4xl font-bold text-red-600 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          AI Pricing Plans
        </motion.h2>
        <p className="text-lg mb-12 text-gray-700">
          Choose the right plan for your AI video creation needs.
        </p>
        <div className="flex flex-wrap justify-center">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              className="bg-orange-500 text-white rounded-lg shadow-lg p-6 m-4 transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold mb-4">{tier.name}</h3>
              <p className="text-xl font-bold mb-4">{tier.price}</p>
              <ul className="list-disc list-inside mb-4">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded transition-colors"
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;