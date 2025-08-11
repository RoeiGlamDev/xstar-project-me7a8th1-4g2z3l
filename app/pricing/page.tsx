import React from 'react';
import { motion } from 'framer-motion';

interface PricingPlan {
  title: string;
  price: string;
  features: string[];
}

const plans: PricingPlan[] = [
  {
    title: 'Basic',
    price: '$19/month',
    features: [
      'Access to AI Video Generator',
      '720p Resolution',
      'Basic Editing Tools',
      'Community Support',
    ],
  },
  {
    title: 'Pro',
    price: '$49/month',
    features: [
      'Access to AI Video Generator',
      '1080p Resolution',
      'Advanced Editing Tools',
      'Priority Support',
    ],
  },
  {
    title: 'Enterprise',
    price: 'Contact Us',
    features: [
      'Custom AI Solutions',
      '4K Resolution',
      'Full Editing Suite',
      'Dedicated Account Manager',
    ],
  },
];

const PricingPage: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      <header className="py-10 text-center">
        <h1 className="text-4xl font-bold text-red-600">AI Pricing Plans</h1>
        <p className="mt-4 text-lg text-gray-600">
          Choose the best plan for your video creation needs with AI.
        </p>
      </header>

      <section className="py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {plans.map((plan) => (
            <motion.div
              key={plan.title}
              className="bg-orange-400 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <h2 className="text-2xl font-semibold text-white">{plan.title}</h2>
              <p className="text-xl font-bold text-white mt-2">{plan.price}</p>
              <ul className="mt-4 space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="text-white">
                    - {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-6 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition">
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-10 bg-red-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-red-600">Frequently Asked Questions</h2>
          <div className="mt-6 space-y-4">
            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-semibold text-lg">What is AI?</h3>
              <p>
                AI is a powerful technology that allows you to create stunning videos using advanced algorithms.
              </p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-semibold text-lg">How does the AI Video Generator work?</h3>
              <p>
                Our AI Video Generator uses machine learning to analyze your input and create videos tailored to your specifications.
              </p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-semibold text-lg">Can I cancel my subscription anytime?</h3>
              <p>
                Yes, you can cancel your subscription at any time without any penalties.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;