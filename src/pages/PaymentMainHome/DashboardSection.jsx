// sections/DashboardSection.js
import React, { useState, useEffect } from "react";
import Dashboard from "../../assets/Dashboard.svg";

export default function DashboardSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="lg:flex lg:gap-12 lg:items-stretch">
          {/* Left Content */}
          <div
            className={`lg:flex-1 flex flex-col justify-between transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-12 opacity-0"
            }`}
          >
            <div className="space-y-6">
              <h1
                className="text-orange-600 font-bold text-4xl md:text-5xl leading-tight"
                style={{ fontSize: "35px", lineHeight: 1.1 }}
              >
                Powerful Insights. Total Control <br /> All in One Dashboard.
              </h1>

              <p className="text-base md:text-lg font-medium text-gray-800 leading-relaxed">
                Simplify your financial operations — manage payments, refunds,
                payouts, subscriptions, invoices, customers, and APIs
                seamlessly with UdyogPay.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    Access Key Performance Data
                  </h3>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Access live insights that power smarter decisions. Track
                    key stats and create custom settlement and reconciliation
                    reports—all in one place.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    Simple. Fast. Intuitive.
                  </h3>
                  <p className="text-base text-gray-700 leading-relaxed">
                    At UdyogPay, we know that speed and simplicity are what
                    matter most in payment management. That's why we've worked
                    tirelessly to deliver a seamless and intuitive experience
                    for you.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <button className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transform hover:scale-105 transition shadow-lg hover:shadow-xl">
                Sign Up Now →
              </button>
            </div>
          </div>

          {/* Right Dashboard Preview */}
          <div className="lg:flex-1 flex justify-center items-center">
            <img
              src={Dashboard}
              alt="Dashboard Preview"
              className="w-full max-w-[375px] h-auto object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
}