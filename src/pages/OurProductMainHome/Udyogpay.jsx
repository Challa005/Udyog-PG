import React from "react";
import UdyogPayLogo from "../../assets/UdyogPay.svg"; 

export default function UdyogPayLanding() {
  return (
    <div className="min-h-screen bg-white -mt-40">
      {/* Header Section */}
      <div className="text-center py-16 px-6">
        {/* Logo */}
        <div className="flex justify-center mb-6 -mt-15">
          <img
            src={UdyogPayLogo}
            alt="Udyog Pay"
            className="w-80 h-40"
          />
        </div>

        {/* Title */}
       <h1
          className="font-semibold"
          style={{
            fontSize: "45px",
            lineHeight: 1.1,
            color: "rgb(94,93,174)",
          }}
        >
          Udyog Pay End-to-End Payment Infrastructure<br /> for Modern Businesses
        </h1>

        {/* Description */}
        <p className="text-black-600 font-bold mt-4 max-w-2xl mx-auto"
        style={{
            fontSize: "20px",
            lineHeight: 1.1,
            
          }}>
          Accept, manage, and disburse payments securely with our
          enterprise-grade payment gateway and payout suite.
        </p>
      </div>

      {/* Features Section */}
      <div className="bg-indigo-700 text-white py-16 px-6 text-center">
        <p className="text-m text-indigo-200 mb-2">
          From APIs to payment links —
        </p>
        <h2 className="text-2xl font-semibold mb-10"
        style={{
            fontSize: "45px",
            lineHeight: 1.1,
            
          }}>
          Udyog Pay makes every transaction effortless
        </h2>

        {/* Feature Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            "Payment Gateway & Payout APIs",
            "Payment Links, Pages & QR Codes",
            "Real-time Settlement & Reconciliation",
            "AutoPay & Subscription Billing",
            "Fraud Prevention & Compliance Tools",
            "Developer-Friendly API Documentation", // ✅ New Card
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-[rgb(168,167,211)] text-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 text-lg font-medium"
            >
              {feature}
            </div>
          ))}
        </div>

        {/* Learn More Button */}
        <div className="mt-12">
          <button className="bg-orange-400 hover:bg-orange-500 text-white font-medium px-6 py-2 rounded-md shadow-md">
            Learn More &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
