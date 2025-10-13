import React from "react";

export default function Enterprise() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        <h1
          className="text-[#5E5DAE] font-bold text-center mb-10"
          style={{ fontSize: "45px", lineHeight: 1.1 }}
        >
          Designed for Scale, Built for Enterprises
        </h1>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <span className="px-6 py-3 bg-amber-500 text-white rounded-full font-medium shadow-md">
            Enterprise-Grade
          </span>
          <span className="px-6 py-3 border-2 border-amber-500 text-amber-600 rounded-full font-medium bg-white hover:bg-amber-50 transition-colors">
            Highly secure
          </span>
          <span className="px-6 py-3 border-2 border-amber-500 text-amber-600 rounded-full font-medium bg-white hover:bg-amber-50 transition-colors">
            Smart router
          </span>
          <span className="px-6 py-3 border-2 border-amber-500 text-amber-600 rounded-full font-medium bg-white hover:bg-amber-50 transition-colors">
            Robust integrations
          </span>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="text-xl md:text-xl font-bold text-[#5F5EAE] mb-4">
            Enterprise-Grade Reliability at Scale
          </h2>

          <p className="text-lg text-gray-700 mb-8">
            Engineered for businesses that demand uninterrupted performance.
          </p>

          <ul className="space-y-2 mb-6">
            <li className="flex items-start">
              <span className="text-amber-500 text-base mr-2">•</span>
              <span className="text-gray-700 text-sm">
                99.9% uptime backed by robust infrastructure.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-500 text-base mr-2">•</span>
              <span className="text-gray-700 text-sm">
                Scales to 1,00,000+ transactions per minute.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-500 text-base mr-2">•</span>
              <span className="text-gray-700 text-sm">
                20M+ API requests processed daily.
              </span>
            </li>
          </ul>

          <div className="flex justify-end">
            <button className="px-8 py-3 bg-amber-500 text-white rounded-lg font-semibold shadow-lg hover:bg-amber-600 transition-all hover:shadow-xl hover:scale-105">
              Contact Sales →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}