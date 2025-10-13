
import React from "react";

export default function PricingSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1
            className="text-4xl md:text-5xl font-bold text-gray-900"
            style={{ fontSize: "35px", lineHeight: 1.1 }}
          >
            Pay Only for What You Use
          </h1>
          <p className="text-sm font-bold  md:text-xl text-black-600 max-w-xl mx-auto">
            Get started with no setup or maintenance costs, enjoy industry-low
            transaction fees, and pay only when you get paid.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Standard Plan */}
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-8 flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Standard Plan
            </h2>

            <div className="mb-6 text-center">
              <div className="flex items-baseline justify-center mb-2">
                <span className="text-5xl font-bold text-indigo-600">2%</span>
                <span className="text-xl text-gray-600 ml-2">
                  + UdyogPay platform fee
                </span>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Get access to Flash Checkouts, Dashboards, Reports & much more
              </p>
            </div>

            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 leading-relaxed">
                Fast applicants Automate tax drives and other rules.
                Instrument Funds like (Export Fund, Cash Fund, Cash &
                Contract) & Corporate (Business) Credit Cards will be charged
                at 3%
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6 text-center">
              <div>
                <p className="text-sm text-gray-600 mb-1">
                  One-Time setup fee
                </p>
                <p className="text-lg font-semibold text-gray-900">₹0.00</p>
                <p className="text-xs text-gray-500">No setup fee</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">
                  Annual Maintenance Fee
                </p>
                <p className="text-lg font-semibold text-gray-900">₹0.00</p>
                <p className="text-xs text-gray-500">No maintenance fee</p>
              </div>
            </div>

            <button className="mt-auto w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center hover:scale-105 shadow-md hover:shadow-xl">
              Get Started
              <svg
                className="w-5 h-5 ml-2"
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

          {/* Enterprise Plan */}
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-8 flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Enterprise Plan
            </h2>

            <div className="mb-6 text-center min-h-[80px] flex flex-col justify-center">
              <p className="text-gray-700 mb-2">
                Large number of monthly payments on your platform?
              </p>
              <p className="text-sm text-gray-600">
                Sign up now to get started
              </p>
            </div>

            <div className="mt-auto pt-6 border-t border-gray-200 text-center">
              <p className="text-sm text-gray-600">
                Explore how you can drive more value for your business with
                Payment Gateway and its smart features
              </p>
            </div>

            <div className="mt-6 text-center">
              <a
                href="#"
                className="text-indigo-600 hover:text-indigo-700 font-semibold flex items-center justify-center mx-auto"
              >
                Sign Up
                <svg
                  className="w-4 h-4 ml-1"
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
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}