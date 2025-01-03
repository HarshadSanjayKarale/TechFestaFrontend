import React, { useState, useEffect } from 'react';
import { Search, MapPin, Calendar, Clock, Users } from 'lucide-react';
import landscapeImage from '../assets/images.jpg';

export function Hero() {
  const [typedText, setTypedText] = useState('');
  const fullText = "  SafeRoute recommends the safest travel routes using historical crime data, user preferences, and geospatial analysis. It empowers users to make informed travel decisions in high-risk areas.";

  useEffect(() => {
    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < fullText.length) {
        setTypedText((prev) => prev + fullText.charAt(i));
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, 20);

    return () => clearInterval(typingEffect);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover blur-md"
          src={landscapeImage}
          alt="Beautiful landscape"
        />
        <div className="absolute inset-0 bg-gray-500 mix-blend-multiply" aria-hidden="true" />
      </div>
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="max-w-2xl">
          <h1 className="font-extrabold tracking-tight text-4xl sm:text-5xl lg:text-6xl mb-2 font-serif">
            <span className="bg-gradient-to-r from-pink-400 to-pink-600 text-transparent bg-clip-text">
              SafeRoute
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 text-transparent bg-clip-text font-serif text-3xl sm:text-4xl lg:text-5xl">
              Guiding You Safely, Every Step of the Way
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-xl text-gray-300 font-sans">
            {typedText}
          </p>
        </div>
        {/* Rest of the form component remains unchanged */}
        <div className="bg-white shadow-xl rounded-lg p-6 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">Find Safe Routes</h2>
          <div className="space-y-4">
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Start Location"
              />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Destination"
              />
            </div>
            <div className="flex space-x-4">
              <div className="relative flex-1">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Date"
                />
              </div>
              <div className="relative flex-1">
                <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Time"
                />
              </div>
            </div>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Number of People"
              />
            </div>
            <button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out flex items-center justify-center"
            >
              <Search className="mr-2 h-4 w-4" /> Find Safe Route
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;