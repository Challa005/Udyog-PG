import React from "react";

const UdyogGroupHero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex justify-center px-4 py-12">
      {/* Full Background Card */}
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl p-10 md:p-16 relative overflow-hidden">
        <div className="text-left flex flex-col gap-10 relative z-10">
          {/* Main Heading */}
          <h1
            className="text-4xl md:text-6xl font-bold text-[#5D5EAE] mb-4 leading-tight"
            style={{ fontSize: "35px", lineHeight: 1.2 }}
          >
            Why Choose Udyog Group?
          </h1>

          {/* Subheading */}
          <div className="text-gray-800 flex flex-col gap-4">
            <p style={{ fontSize: "22px", lineHeight: 1.2 }}>
              Because we're not just creating software —
            </p>
            <p
              className="font-semibold text-gray-900"
              style={{ fontSize: "28px", lineHeight: 1.3 }}
            >
              We're building the digital infrastructure for the next generation
              of businesses.
            </p>
          </div>

          {/* Features as Pill-style highlights */}
          <div className="w-1/5 flex flex-col gap-4 -mt-2">
            {["Innovative", "Secure", "Scalable", "Future-Ready"].map(
              (feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-blue-50 px-4 py-2 rounded-xl font-medium text-gray-800 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                  {feature}
                </div>
              )
            )}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1 hover:scale-105">
              Book a Demo &gt;
            </button>
            <button className="bg-white hover:bg-gray-50 text-blue-600 font-semibold py-4 px-8 rounded-lg border-2 border-blue-600 transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1 hover:scale-105">
              Contact Us &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UdyogGroupHero;
