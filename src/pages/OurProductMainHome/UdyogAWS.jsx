import React from 'react';

export default function SocietyManagement() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-purple-200 to-blue-200 p-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-2"
           style={{ fontSize: "45px", lineHeight: 1.1 }}>
            Udyog Awas Smart Society Management Software
          </h1>
          <p className="text-1xl text-indigo-800">
            (Powered by Udyog Pay)
          </p>
        </div>

        {/* Subtitle */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-black-900 leading-relaxed"
         >
            Empowering residential and commercial societies with 
            transparent billing, communication, and operations.
          </h2>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Row 1 - 3 cards */}
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-md">
            <h3 className="text-lg font-bold text-black">
              Maintenance & Utility Billing
            </h3>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-md">
            <h3 className="text-lg font-bold text-black">
              Complaint & Visitor Management
            </h3>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-md">
            <h3 className="text-lg font-bold text-black">
              Society Announcements & Voting
            </h3>
          </div>

          {/* Row 2 - 3 cards */}
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-md">
            <h3 className="text-lg font-bold text-black">
              Built-in Udyog Pay Payment Gateway
            </h3>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-md">
            <h3 className="text-lg font-bold text-black">
              Asset & Staff Management
            </h3>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-md">
            <h3 className="text-lg font-bold text-black">
              Real-time Notifications & Alerts
            </h3>
          </div>
        </div>

        {/* View Details Button */}
        <div className="flex justify-center mt-8">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-colors duration-300 flex items-center gap-2">
            View Details
            <span className="text-lg">&gt;</span>
          </button>
        </div>
      </div>
    </div>
  );
}
