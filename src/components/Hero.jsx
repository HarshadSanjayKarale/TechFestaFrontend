import React, { useState, useEffect } from "react";
import {
  Search,
  MapPin,
  Calendar,
  Clock,
  Users,
  Shield,
  Navigation,
  AlertTriangle,
  Lock,
} from "lucide-react";
import "./Hero.css";

function Hero() {
  const [typedText, setTypedText] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const fullText =
    "Navigate with confidence through any urban environment with real-time safety insights and intelligent route recommendations.";

  useEffect(() => {
    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < fullText.length) {
        setTypedText((prev) => prev + fullText.charAt(i));
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, 30);

    return () => clearInterval(typingEffect);
  }, []);

  return (
    <div className="relative min-h-screen mt-8 overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      <div className="relative container mx-auto px-8 md:px-12 lg:px-16 py-12 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Column - Enhanced Hero Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full text-blue-600 font-medium text-sm backdrop-blur-sm border border-blue-100">
              <Shield className="w-4 h-4 mr-2" />
              Your Safety Is Our Priority
              <Lock className="w-4 h-4 ml-2" />
            </div>

            <h1 className="text-4xl lg:text-7xl font-bold text-gray-900 leading-tight">
              SafeRoutes for
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-gradient leading-none">
                Safer Journeys
              </span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              {typedText}
            </p>

            <div className="flex flex-wrap gap-4">
              {[
                { icon: Navigation, text: "Real-time Navigation" },
                { icon: AlertTriangle, text: "Risk Assessment" },
                { icon: Shield, text: "24/7 Safety Alerts" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <item.icon className="w-5 h-5 mr-2 text-blue-600" />
                  <span className="text-gray-700 font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Enhanced Search Form */}
          <div
            className={`bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-8 transition-all duration-300 max-w-sm mx-auto lg:ml-auto ${
              isSearchFocused ? "scale-105 shadow-blue-200" : ""
            }`}
          >
            <h2 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Plan Your Safe Route
            </h2>

            <div className="space-y-4">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500 w-4 h-4" />
                <input
                  type="text"
                  className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-sm"
                  placeholder="Starting Point"
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                />
              </div>

              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500 w-4 h-4" />
                <input
                  type="text"
                  className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-sm"
                  placeholder="Destination"
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500 w-4 h-4" />
                  <input
                    type="date"
                    className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-sm"
                  />
                </div>

                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500 w-4 h-4" />
                  <input
                    type="time"
                    className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-sm"
                  />
                </div>
              </div>

              <div className="relative">
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500 w-4 h-4" />
                <select className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all appearance-none bg-white text-sm">
                  <option value="">Number of People</option>
                  <option value="1">1 Person</option>
                  <option value="2">2 People</option>
                  <option value="3">3 People</option>
                  <option value="4">4+ People</option>
                </select>
              </div>

              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-200/50 flex items-center justify-center text-sm">
                <Search className="mr-2 h-4 w-4" />
                Find Safest Route
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Add animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/20 rounded-full filter blur-3xl animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-400/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animate-gradient {
          background-size: 200%;
          animation: gradient 8s ease infinite;
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              #e5e7eb 1px,
              transparent 1px
            ),
            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
          background-size: 24px 24px;
        }
      `}</style>
    </div>
  );
}

export default Hero;
