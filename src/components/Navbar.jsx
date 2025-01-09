import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import logo from '../assets/logo.png';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-12">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex-shrink-0 flex items-center"
            >
              <img src={logo} alt="Logo" className="h-10 w-auto" />
            </Link>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            {["Deals", "Support", "Partnership", "Bookings"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="relative border-transparent text-gray-600 hover:text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium transition-all duration-200 group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100" />
              </Link>
            ))}
          </div>

          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
            <div className="relative">
              <button
                type="button"
                className="flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              >
                <Globe className="h-4 w-4 text-gray-500" />
                <span>EN</span>
                <ChevronDown className="h-4 w-4 text-gray-400" />
              </button>
              
              {isLanguageOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-lg shadow-lg py-1 bg-white/90 backdrop-blur-md border border-gray-100 transition-all duration-200">
                  {["English", "Español"].map((lang) => (
                    <a
                      key={lang}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      {lang}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/login"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              Log in
            </Link>

            <Link
              to="/register"
              className="px-6 py-2 text-sm font-medium rounded-full text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 hover:shadow-md"
            >
              Register
            </Link>
          </div>

          <div className="flex items-center sm:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden bg-white/90 backdrop-blur-md border-t border-gray-100">
          <div className="pt-2 pb-3 space-y-1">
            {["Deals", "Support", "Partnership", "Bookings"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              >
                {item}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4">
              <button
                className="flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50"
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              >
                <Globe className="h-4 w-4 text-gray-500" />
                <span>EN</span>
                <ChevronDown className="h-4 w-4 text-gray-400" />
              </button>
            </div>
            <div className="mt-3 space-y-1">
              <Link
                to="/login"
                className="block px-4 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              >
                Log in
              </Link>
              <Link
                to="/register"
                className="block mx-4 my-2 px-6 py-2 text-base font-medium text-center rounded-full text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}