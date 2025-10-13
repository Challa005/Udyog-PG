import React, { useState, useEffect } from "react";
import { Check } from "lucide-react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const features = [
    "Fast Activation",
    "Wide Payment Coverage",
    "Higher Success Guaranteed (20-40%)",
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-orange-50 relative overflow-hidden flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mb-6 text-center">
            <span className="text-black font-bold text-2xl">
              Payment Gateway
            </span>
          </div>

          <h1
            className="text-[#5E5DAE] font-bold text-center mb-10 transition-all duration-300 cursor-pointer hover:scale-105 hover:text-[#403EA7] active:scale-95"
            style={{ fontSize: "55px", lineHeight: 1.1 }}
          >
            India's Leading Payment Gateway Now at{" "}
            <span className="text-[#F19515] hover:text-[#ffb347] transition-colors duration-300">
              Unbeatable Prices
            </span>
          </h1>

          <p className="text-center text-xl text-gray-600 max-w-4xl mx-auto font-semibold mb-10 mt-10">
            Drive Growth with India's Most Reliable Payment Gateway — from
            Startups to Enterprises
          </p>

          <div className="flex flex-wrap justify-center gap-10 mb-12">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-2 px-6 py-3 rounded-full shadow-md hover:shadow-lg bg-white transition-shadow"
              >
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-gray-800 font-semibold">{feature}</span>
              </div>
            ))}
          </div>

          <div className="text-center mb-12 mt-20">
            <button className="px-10 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-lg font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Circles */}
      <div className="fixed top-20 right-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div
        className="fixed bottom-20 left-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
    </div>
  );
}