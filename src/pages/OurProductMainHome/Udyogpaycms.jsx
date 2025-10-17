import React from 'react';
import Udyogcms from "../../assets/udyogcms.svg";

export default function UdyogPayCMS() {
 const features = [
  { title: 'Centralized Corporate Netbanking' },
  { title: 'Bulk Payouts & Salary Processing' },
  { title: 'Treasury & Liquidity Management' },
  { title: 'Approval Hierarchies & Role Control' },
  { title: 'Real-time Financial Insights' },
  { title: 'Customizable Workflow Automation' }, 
];


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex justify-center mb-12">
          <img src={Udyogcms} alt="Udyog CMS" className="w-96 h-28 object-contain" />
        </div>

        {/* Heading */}
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl font-bold text-[#5D5EAE] mb-4"
            style={{ fontSize: "35px", lineHeight: 1.1 }}
          >
            UdyogPay CMS Corporate Netbanking & Cash Management Service
          </h2>
          <p className="text-lg text-black-700 font-bold max-w-3xl mx-auto mt-10">
            Built for enterprises to simplify multi-account management, liquidity control, and cash flow automation.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex items-center space-x-4"
            >
              {/* Optional Icon Placeholder */}
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600 text-2xl font-bold">
                {index + 1}
              </div>
              <h3 className="text-gray-900 font-semibold text-lg">{feature.title}</h3>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2 text-lg">
  Discover CMS
  <span className="text-xl">→</span>
</button>

        </div>
      </div>
    </div>
  );
}
