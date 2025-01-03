import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-15">
      <div className="container mx-auto px-4 pt-6">
        <div className="flex flex-wrap justify-between mb-8">
          <div className="flex-1 min-w-[200px] mb-8 ">
            <h3 className="bg-gradient-to-r from-pink-400 to-pink-600 text-transparent bg-clip-text">
              SafeRoute
            </h3>
            <p className="text-gray-400">Empowering safer travel through technology.</p>
          </div>
          <div className="flex-1 min-w-[200px] mb-8">
            <h4 className="text-lg font-semibold mb-4 text-gray-300">Quick Links</h4>
            <ul className="list-none p-0">
              <li className="mb-2">
                <a href="#features" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Features
                </a>
              </li>
              <li className="mb-2">
                <a href="#how-it-works" className="text-gray-400 hover:text-blue-400 transition-colors">
                  How It Works
                </a>
              </li>
              <li className="mb-2">
                <a href="#testimonials" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1 min-w-[200px] mb-8">
            <h4 className="text-lg font-semibold mb-4 text-gray-300">Contact Us</h4>
            <p className="text-gray-400 mb-2">Email: info@saferoute.com</p>
            <p className="text-gray-400 mb-2">Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-2 pb-2 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} SafeRoute. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
