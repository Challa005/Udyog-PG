import React from "react";
import Blueplastic from "../../assets/blueplastic.svg";

export default function PartnerLogos() {
  return (
    <section className="bg-white py-20 relative -mt-32">
      <div className="container mx-auto max-w-6xl px-6">
        {/* Heading and illustration */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-12">
          <div className="flex-1">
            <h2
              className="text-orange-600 font-bold text-4xl md:text-5xl leading-tight"
              style={{ fontSize: "45px", lineHeight: 1.1 }}
            >
              Powering Seamless End-to-End Payments for Every Business
            </h2>
          </div>
          <div className="flex-shrink-0">
            <img
              src={Blueplastic}
              alt="Payment illustration"
              className="w-100 h-auto object-contain"
            />
          </div>
        </div>

        {/* Feature List */}
        <div className="space-y-6">
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-semibold text-gray-900">
              Accept Every Payment Method
            </h3>
            <p className="text-gray-700 mt-2">
              From Cards and EMIs to UPI, Pay Later, Net Banking, and Wallets
              — Udyog Pay empowers your business with India's most complete
              payment suite. Accept payments your customers prefer, all in one
              place.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-semibold text-gray-900">
              One-Click Checkout & Secure Card Storage
            </h3>
            <p className="text-gray-700 mt-2">
              Integrate easily, let customers save their cards, and enable
              frictionless payments across all your businesses.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-semibold text-gray-900">
              Intuitive, Powerful Dashboard
            </h3>
            <p className="text-gray-700 mt-2">
              Get comprehensive reports on payments, settlements, and refunds,
              so you can make informed decisions and grow your business.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-semibold text-gray-900">
              Made for Developers, Loved by Businesses
            </h3>
            <p className="text-gray-700 mt-2">
              Developer-friendly APIs, plugins, and libraries across all major
              languages and platforms — empowering you to build great
              products, faster.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-semibold text-gray-900">
              Trusted Security for Your Business
            </h3>
            <p className="text-gray-700 mt-2">
              Fully PCI DSS Level 1 compliant, regularly audited by third
              parties, and backed by a dedicated security team to keep your
              data protected at all times.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <button
            style={{
              background:
                "linear-gradient(90deg, rgb(94, 93, 174), rgb(144, 101, 255))",
            }}
            className="text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition"
          >
            Sign Up Now →
          </button>
        </div>

        {/* Case Study Section with light background */}
        <div className="w-full mt-20 bg-[rgb(255,245,230)]">
          <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col gap-4">
            {/* Subtitle */}
            <p className="text-m font-bold text-gray-700">
              Marketplace for Fresh Livestock Products
            </p>

            {/* Main Heading */}
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Fresh To Home <br />
              Enhances Payment Experience, <br />
              Drives Higher Revenues with{" "}
              <span className="text-orange-600">Udyog Pay</span>
            </h3>

            {/* Link */}
            <p className="text-sm font-medium hover:underline cursor-pointer mt-2 text-purple-700">
              Read case study →
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}