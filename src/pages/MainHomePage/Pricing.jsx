import React from "react";
import { CheckCircle, TrendingUp } from "lucide-react";

export default function Pricing() {
  const features1 = [
    {
      title: "Pay Only for What You Use",
      description: "No setup or hidden charges",
    },
    {
      title: "Instant Fee Visibility",
      description: "Real-time reporting at your fingertips",
    },
    {
      title: "Get Started Today",
      description: "Paperless, same-day onboarding",
    },
    {
      title: "Stress-Free Payments",
      description: "No maintenance, no hassle",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1
            className="text-[#5E5DAE] font-bold text-center mb-10 relative mt-8"
            style={{ fontSize: "45px", lineHeight: 1.1 }}
          >
            Simple, Clear Payment Gateway Fees Across India
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-indigo-100 w-[800px] mx-auto">
              <p className="text-lg text-gray-800 font-medium mb-6">
                Seamless Multi-Currency Payments — INR + 100+ Currencies, Quick Integration
              </p>

              <div className="space-y-5 w-full">
                {features1.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="w-6 h-6 text-green-500 group-hover:text-green-600 transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2">
              Check Pricing
              <span className="text-xl">→</span>
            </button>
          </div>

          <div className="lg:mt-0 flex justify-end">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300 w-[400px]">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-orange-600" />
                </div>
                <h2 className="text-lg font-bold text-orange-600">
                  Faster Settlements
                </h2>
              </div>

              <p className="text-gray-700 text-sm leading-relaxed">
                Once your account is activated, monitor all transactions and
                settlements with ease. Enjoy payment gateway settlements in as
                fast as
                <span className="font-bold text-orange-700">
                  {" "}
                  15 minutes
                </span>{" "}
                upon request.
              </p>

              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600 mb-1">
                      15
                    </div>
                    <div className="text-xs text-gray-600">
                      Minutes Settlement
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600 mb-1">
                      100+
                    </div>
                    <div className="text-xs text-gray-600">
                      Currencies Supported
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}