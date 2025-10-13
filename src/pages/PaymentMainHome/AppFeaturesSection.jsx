// sections/AppFeaturesSection.js
import React, { useState } from "react";
import { ArrowRight, Zap, TrendingUp, CheckCircle, BarChart3 } from "lucide-react";
import App from "../../assets/app.svg";

export default function AppFeaturesSection() {
  const [isHovered, setIsHovered] = useState(false);

  const featuresq = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Fast & Easy Onboarding",
      description: "Get started with minimal documentation",
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Stay in Control",
      description: "Track payments anytime, anywhere",
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "Instant Action",
      description: "Accept payments and process refunds with a single click",
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: "Data-Driven Insights",
      description: "Generate detailed payment and settlement reports",
    },
  ];

  return (
    <div className="flex items-center justify-center p-6 bg-gradient-to-b from-[rgb(250,211,158)] to-white">
      <div className="max-w-7xl w-full">
        <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12 items-stretch">
          {/* Left Content Section */}
          <div className="flex flex-col justify-center space-y-6">
            <h1
              className="text-[#5E5DAE] font-bold text-left"
              style={{ fontSize: "35px", lineHeight: 1.1 }}
            >
              Instant Checkout
            </h1>

            <h2 className="text-lg font-semibold text-gray-800">
              Start Accepting Payments in Minutes with UdyogPay
            </h2>

            <div className="space-y-4">
              {featuresq.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 transition-all duration-300 transform hover:scale-105 hover:shadow-md"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="mt-6 w-fit px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2 group"
            >
              Learn More
              <ArrowRight
                className={`w-5 h-5 transition-transform duration-300 ${
                  isHovered ? "translate-x-1" : ""
                }`}
              />
            </button>
          </div>

          {/* Right Illustration Section */}
          <div className="flex justify-center items-center">
            <img
              src={App}
              alt="App Preview"
              className="w-full max-w-[484px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}