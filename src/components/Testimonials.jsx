import React from 'react';
import sarahImg from '../assets/harshad.jpg'; // Example paths; adjust based on your project structure
import michaelImg from '../assets/harshad.jpg';
import emilyImg from '../assets/harshad.jpg';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Frequent Traveler',
    quote: 'SafeRoute has completely changed how I explore new cities. I feel so much more confident knowing I\'m taking the safest routes.',
    image: sarahImg,
  },
  {
    name: 'Michael Chen',
    role: 'Business Executive',
    quote: 'As someone who often travels for work, SafeRoute has become an essential tool in my travel kit. It\'s like having a local guide wherever I go.',
    image: michaelImg,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Student',
    quote: 'I use SafeRoute every day on my way to university. It gives me and my parents peace of mind, especially during late-night study sessions.',
    image: emilyImg,
  },
];

export default function Testimonials() {
  return (
    <div id="testimonials" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-blue-600">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-8 text-center transition-transform duration-300 hover:-translate-y-1 animate-fade-in">
              <div className="flex justify-center mb-4">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name}'s profile`}
                  className="w-12 h-12 rounded-full object-cover"
                />
              </div>
              <p className="text-gray-800 italic mb-4">"{testimonial.quote}"</p>
              <div>
                <h3 className="text-xl font-semibold text-blue-600">{testimonial.name}</h3>
                <p className="text-gray-600">{testimonial.role}</p>
              </div>
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
