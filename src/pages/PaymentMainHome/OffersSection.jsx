
import React from "react";

export default function OffersSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-purple-200 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full rounded-2xl shadow-xl p-10">
        {/* Header */}
        <h1
          className="text-3xl md:text-4xl font-bold text-orange-500 mb-6"
          style={{ fontSize: "35px", lineHeight: 1.1 }}
        >
          Manage Offers with a Single Click
        </h1>

        {/* Subheading */}
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-8">
          Run All Your Promotional Offers with UdyogPay
        </h2>

        {/* Features List */}
        <ul className="space-y-4 mb-8">
          <li className="flex items-start gap-2">
            <span className="text-orange-500 mt-1">•</span>
            <span className="text-gray-700">
              <strong>Create Offers Instantly:</strong> Launch promotions at
              the click of a button
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-500 mt-1">•</span>
            <span className="text-gray-700">
              <strong>Control Participation:</strong> Define how many users
              can avail the offer
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-500 mt-1">•</span>
            <span className="text-gray-700">
              <strong>Targeted Campaigns:</strong> Run offers for specific
              banks, card networks, or wallets
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-500 mt-1">•</span>
            <span className="text-gray-700">
              <strong>Boost Sales:</strong> UdyogPay merchants have seen
              significant growth through offers
            </span>
          </li>
        </ul>

        {/* Pro Tip Box */}
        <div className="bg-purple-100 border-l-4 border-purple-500 p-5 mb-8 rounded">
          <p className="text-sm font-semibold text-gray-800 mb-1">PRO TIP</p>
          <p className="text-sm text-gray-700">
            Use UdyogPay Offers to run 'No Cost EMI' schemes for your
            customers.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
            Sign Up Now
          </button>
          <button className="bg-transparent border-2 border-blue-400 text-blue-500 hover:bg-blue-50 font-semibold px-6 py-3 rounded-lg transition-colors duration-200">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
}