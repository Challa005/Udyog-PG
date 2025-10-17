import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ExploreProducts() {
  const products = [
    {
      title: "Flexible Fund Source",
      description: "Link multiple fund sources to make seamless, direct payouts",
      gradient: "from-orange-100 via-orange-50 to-amber-100"
    },
    {
      title: "Global Payouts",
      description: "Verify beneficiary bank accounts, UPI IDs, and more with our full e-KYC suite. Enjoy free access to the IFSC Verification API",
      gradient: "from-orange-100 via-orange-50 to-amber-100"
    },
    {
      title: "Seamless Bank Account Validation",
      description: "Verify before you pay — with our full e-KYC suite. Instantly validate bank accounts or UPI IDs, and access our IFSC Verification API completely free",
      gradient: "from-orange-100 via-orange-50 to-amber-100"
    },
    {
      title: "Flexible Fund Source",
      description: "Expand your reach — accept payments from India and beyond.",
      gradient: "from-orange-100 via-orange-50 to-amber-100"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-indigo-900 mb-12 flex justify-center"
        style={{ fontSize: "45px", lineHeight: 1.1 }}>
          Explore other products
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${product.gradient} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-orange-200`}
            >
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                {product.title}
              </h2>
              <p className="text-sm text-gray-800 mb-6 leading-relaxed">
                {product.description}
              </p>
              <button className="flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all duration-200 group">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}