import React from 'react';

const featureCategories = [
  {
    title: "Core Safety Features",
    icon: "🛡️",
    features: [
      {
        icon: "🗺️",
        title: "Smart Route Planning",
        description: "Choose between Safest Route, Balanced Route, or Fastest Route with dynamic routing that avoids crime-prone areas."
      },
      {
        icon: "🎯",
        title: "Safety Heatmaps",
        description: "Visualize crime-prone areas with color-coded zones showing risk levels and crime density in real-time."
      },
      {
        icon: "⚡",
        title: "Real-Time Alerts",
        description: "Receive instant notifications about incidents near your route and get smart re-routing suggestions."
      },
      {
        icon: "🚗",
        title: "Multi-Modal Transport",
        description: "Tailored safety recommendations for walking, driving, and public transport modes."
      }
    ]
  },
  {
    title: "Smart Features",
    icon: "🧠",
    features: [
      {
        icon: "🌙",
        title: "Time-Aware Safety",
        description: "Dynamic safety scores that adapt based on time of day and current conditions."
      },
      {
        icon: "👥",
        title: "Crowdsourced Reports",
        description: "Community-driven incident reporting system to complement official crime data."
      },
      {
        icon: "🌦️",
        title: "Weather Integration",
        description: "Smart routing considering weather conditions and potential hazards."
      },
      {
        icon: "♿",
        title: "Accessibility Focus",
        description: "Routes optimized for differently-abled users with attention to lighting and safety."
      }
    ]
  },
  {
    title: "Emergency & Community",
    icon: "🆘",
    features: [
      {
        icon: "🚨",
        title: "SOS System",
        description: "One-touch emergency system with location sharing and nearest safe spot guidance."
      },
      {
        icon: "👮",
        title: "Law Enforcement Integration",
        description: "Direct collaboration with local authorities for real-time crime data and alerts."
      },
      {
        icon: "🏥",
        title: "Safe Zones",
        description: "Community-marked safe locations including police stations, hospitals, and fire stations."
      },
      {
        icon: "⌚",
        title: "Wearable Integration",
        description: "Smart alerts through wearable devices when approaching unsafe areas."
      }
    ]
  },
  {
    title: "Advanced Analytics",
    icon: "📈",
    features: [
      {
        icon: "📱",
        title: "Safety Dashboard",
        description: "Personal safety trends and insights about your frequently traveled areas."
      },
      {
        icon: "🔄",
        title: "Offline Support",
        description: "Download maps and safety data for reliable offline navigation."
      },
      {
        icon: "🌍",
        title: "Global Coverage",
        description: "Multi-city support with location-based customization for travelers."
      },
      {
        icon: "🔋",
        title: "Battery Optimization",
        description: "Smart power management with pre-downloaded routes for low battery situations."
      }
    ]
  },
  {
    title: "Future Innovation",
    icon: "🚀",
    features: [
      {
        icon: "🤖",
        title: "AI Companion",
        description: "Smart virtual assistant providing real-time safety recommendations during travel."
      },
      {
        icon: "🔒",
        title: "Blockchain Security",
        description: "Enhanced data security and transparency using blockchain technology."
      },
      {
        icon: "📷",
        title: "Drone Monitoring",
        description: "Integration with city surveillance systems for enhanced safety monitoring."
      },
      {
        icon: "🧮",
        title: "Smart Learning",
        description: "Route optimization using reinforcement learning based on driver behavior and road conditions."
      }
    ]
  }
];

export default function Features() {
  return (
    <div id="features" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
  Comprehensive Safety Features
</h2>

        {featureCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <div className="flex items-center mb-8 p-4 bg-white rounded-lg shadow-lg">
              <span className="text-3xl mr-4">{category.icon}</span>
              <h3 className="text-2xl font-semibold text-gray-800 m-0">
                {category.title}
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.features.map((feature, featureIndex) => (
                <div 
                  key={featureIndex} 
                  className="bg-white rounded-lg p-6 text-left transition-all duration-300 ease-in-out shadow-md hover:shadow-blue-400 hover:-translate-y-1 animate-fade-in"
                >
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
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