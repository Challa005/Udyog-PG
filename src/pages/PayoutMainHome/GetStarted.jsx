import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function GetStarted() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-purple-100 flex items-center justify-center px-6 sm:px-12 lg:px-20 py-16 -mt-50">
      <div className="w-full max-w-7xl">
        <div className="rounded-3xl p-12">
          <h1 className="text-5xl md:text-6xl font-bold text-indigo-900 mb-6"
          style={{ fontSize: "40px", lineHeight: 1.1 }}>
            Get Started
          </h1>
          
          <p className="text-lg text-black-800 font-bold mb-10 leading-relaxed">
            From payment collection to global payouts — manage it all in one place.
            
            Get started or connect with our experts for custom solutions.
          </p>
          
          <div className="space-y-5 mb-10">
            <div className="flex items-center gap-4">
              <CheckCircle className="text-orange-500 w-7 h-7 flex-shrink-0" />
              <span className="text-xl text-black-900 font-bold font-medium">Easy onboarding</span>
            </div>
            
            <div className="flex items-center gap-4">
              <CheckCircle className="text-orange-500 w-7 h-7 flex-shrink-0" />
              <span className="text-xl text-black-900 font-bold font-medium">Dedicated account manager</span>
            </div>
            
            <div className="flex items-center gap-4">
              <CheckCircle className="text-orange-500 w-7 h-7 flex-shrink-0" />
              <span className="text-xl text-black-900 font-bold font-medium">API access</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Create Account →
            </button>
            
            <button className="bg-white hover:bg-gray-50 text-orange-500 font-semibold px-8 py-3.5 rounded-lg border-2 border-orange-500 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Contact Sales →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
