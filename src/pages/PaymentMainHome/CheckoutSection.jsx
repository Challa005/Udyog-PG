// sections/InstantCheckoutSection.js
import React from "react";
import Mobileoverlap from "../../assets/Mobileoverlap.svg";

export default function InstantCheckoutSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 relative -mt-20">
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100">
        <div className="container mx-auto px-6 max-w-6xl py-20">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
            {/* Left Content */}
            <div className="flex-1 space-y-8">
              {/* Main Heading */}
              <h2
                className="text-orange-500 font-bold text-4xl md:text-5xl leading-tight"
                style={{ fontSize: "35px", lineHeight: 1.1 }}
              >
                Instant Checkout
              </h2>

              {/* Subheading */}
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                Boost Conversions Like Never Before
              </h3>

              {/* Feature List */}
              <ul className="list-disc space-y-3 ml-6 text-gray-700">
                <li>Showcase Your Brand with a fully customizable UI</li>
                <li>Easy Integration with minimal coding</li>
                <li>
                  4+ billion Saved Cards across businesses for faster payments
                </li>
                <li>Personalized Payment Experience for every user</li>
                <li>Native OTP for seamless authentication</li>
              </ul>

              {/* Buttons */}
              <div className="flex gap-4 pt-6">
                <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
                  Sign Up Now →
                </button>
                <button className="border-2 border-orange-500 text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-all duration-300">
                  Know More →
                </button>
              </div>
            </div>

            {/* Right Content - Smaller Payment Mockup */}
            <div className="flex-shrink-0 w-full lg:w-2/5">
              <img
                src={Mobileoverlap}
                alt="Payment Interface"
                className="w-full max-w-[320px] h-auto object-contain mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}