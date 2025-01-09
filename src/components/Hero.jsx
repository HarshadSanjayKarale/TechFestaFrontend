import React, { useState, useEffect } from "react";
import { Search, MapPin, Calendar, Clock, Users, Shield, Navigation, AlertTriangle } from "lucide-react";

function Hero() {
  const [typedText, setTypedText] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const fullText = "  Navigate with confidence through any urban environment with real-time safety insights and intelligent route recommendations.";

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-8 md:px-12 lg:px-16 py-12 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Column - Hero Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-600 font-medium text-sm">
              <Shield className="w-4 h-4 mr-2" />
              Your Safety Is Our Priority
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              SafeRoutes for
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {" "}Safer Journeys
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              {typedText}
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center text-gray-600">
                <Navigation className="w-5 h-5 mr-2 text-blue-600" />
                Real-time Navigation
              </div>
              <div className="flex items-center text-gray-600">
                <AlertTriangle className="w-5 h-5 mr-2 text-blue-600" />
                Risk Assessment
              </div>
              <div className="flex items-center text-gray-600">
                <Shield className="w-5 h-5 mr-2 text-blue-600" />
                24/7 Safety Alerts
              </div>
            </div>
          </div>

          {/* Right Column - Search Form */}
          <div className={`bg-white rounded-2xl shadow-xl p-8 transition-all duration-300 max-w-sm mx-auto lg:ml-auto ${isSearchFocused ? 'scale-105' : ''}`}>
            <h2 className="text-xl font-bold mb-4 text-gray-800">Plan Your Safe Route</h2>
            
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
                <select
                  className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all appearance-none bg-white text-sm"
                >
                  <option value="">Number of People</option>
                  <option value="1">1 Person</option>
                  <option value="2">2 People</option>
                  <option value="3">3 People</option>
                  <option value="4">4+ People</option>
                </select>
              </div>

              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center text-sm">
                <Search className="mr-2 h-4 w-4" />
                Find Safest Route
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;