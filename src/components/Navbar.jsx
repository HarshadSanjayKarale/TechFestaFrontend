import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../assets/logo.png';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/70 backdrop-blur-md shadow-sm">
      <div className="max-w-9xl mx-auto sm:px-6 lg:px-8">
        <div className="flex justify-between h-14">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img src={logo} alt="Logo" className="h-10 w-auto" />
            </Link>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            {["Deals", "Support", "Partnership", "Bookings"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="border-transparent text-gray-600 hover:border-gray-300 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-base font-bold"
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <div className="relative">
              <button
                type="button"
                className="bg-transparent rounded-full flex text-base font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              >
                <span className="flex items-center">
                  EN
                  <ChevronDown className="ml-1 h-4 w-4" />
                </span>
              </button>
              {isLanguageOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white/80 backdrop-blur-md">
                  {["English", "Español"].map((lang) => (
                    <a key={lang} href="#" className="block px-4 py-2 text-base font-bold text-gray-700 hover:bg-gray-100">
                      {lang}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <Link to="/login" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-base font-bold">
              Log in
            </Link>
            <Link to="/register" className="ml-3 px-6 py-2 border border-transparent text-base font-bold rounded-full shadow-sm text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Register
            </Link>
          </div>

          <div className="flex items-center sm:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
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
        <div className="sm:hidden bg-white/80 backdrop-blur-md">
          <div className="pt-2 pb-3 space-y-1">
            {["Deals", "Support", "Partnership", "Bookings"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-900 block pl-3 pr-4 py-2 border-l-4 text-base font-bold"
              >
                {item}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4">
              <button
                className="bg-transparent rounded-full flex text-base font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              >
                <span className="flex items-center">
                  EN
                  <ChevronDown className="ml-1 h-4 w-4" />
                </span>
              </button>
            </div>
            <div className="mt-3 space-y-1">
              <Link to="/login" className="block px-4 py-2 text-base font-bold text-gray-600 hover:text-gray-900 hover:bg-gray-100">
                Log in
              </Link>
              <Link to="/register" className="block px-4 py-2 text-base font-bold text-gray-600 hover:text-gray-900 hover:bg-gray-100">
                Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}