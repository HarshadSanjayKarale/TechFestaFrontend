import React from 'react';

const steps = [
  {
    icon: '📱',
    title: 'Download the App',
    description: 'Get SafeRoute on your smartphone from the App Store or Google Play.',
  },
  {
    icon: '📍',
    title: 'Set Your Destination',
    description: 'Enter your destination and let SafeRoute calculate the safest route for you.',
  },
  {
    icon: '👍',
    title: 'Travel with Confidence',
    description: 'Follow the recommended route and receive real-time safety alerts.',
  },
];

export default function HowItWorks() {
  return (
    <div id="how-it-works" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8 text-center transition-transform duration-300 hover:-translate-y-1 animate-fade-in">
              <div className="text-5xl mb-4">{step.icon}</div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
}