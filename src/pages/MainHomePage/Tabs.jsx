import React, { useState } from "react";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("UPI");

  const tabs = ["UPI", "Card", "BNPL Suite", "Global Collections"];

  const tabContent = {
    UPI: {
      title: "UPI",
      description:
        "Stay Ahead in the UPI Revolution 20% Higher Success Rates with Udyog pay's 8+ direct bank integrations.",
      features: [
        "Flash UPI: Offer 5× faster checkout — no UPI apps or redirection needed.",
        "UPI Intent: Deliver a 10-second purchase experience by opening UPI apps seamlessly on the customer's device.",
        "Credit Card on UPI: Enable easy credit access with just a UPI PIN (Rupay credit cards only).",
      ],
    },
    Card: {
      title: "Card",
      description:
        "Seamless card payment processing with industry-leading success rates and security.",
      features: [
        "Support for all major credit and debit cards",
        "Advanced fraud detection and prevention",
        "One-click payments with saved cards",
      ],
    },
    "BNPL Suite": {
      title: "BNPL Suite",
      description:
        "Flexible Buy Now, Pay Later options to boost conversion rates.",
      features: [
        "Multiple BNPL partners integration",
        "Instant credit decisions",
        "Flexible EMI options",
      ],
    },
    "Global Collections": {
      title: "Global Collections",
      description:
        "Accept payments from customers worldwide with multi-currency support.",
      features: [
        "Support for 100+ currencies",
        "International card processing",
        "Local payment methods",
      ],
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-100 py-16 px-4 -mt-16">
      <div className="max-w-6xl mx-auto">
        <h1
          className="text-[#5E5DAE] font-bold text-center mb-10"
          style={{ fontSize: "40px", lineHeight: 1.1 }}
        >
          Transform Your Sales with an Effortless Checkout Experience
        </h1>

        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white rounded-2xl shadow-lg w-full max-w-4xl">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 flex items-center justify-center h-16 px-4 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-orange-400 to-orange-500 text-white shadow-md"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {tabContent[activeTab].title}
          </h2>

          <p className="text-base text-gray-700 mb-6 leading-relaxed">
            {tabContent[activeTab].description}
          </p>

          <ul className="space-y-4 mb-10">
            {tabContent[activeTab].features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-orange-500 mr-3 mt-1 text-xl">•</span>
                <span className="text-gray-700 leading-relaxed">
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          <button className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-orange-500 hover:to-orange-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center gap-2">
            Learn More
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}