
import React from "react";
import { Zap } from "lucide-react";
import Group from "../../assets/Group.svg";

export default function IntegrationSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        <div className="lg:flex lg:gap-12 lg:items-stretch">
          {/* Left Content */}
          <div className="lg:flex-1 flex flex-col justify-center space-y-10">
            {/* Heading and Description */}
            <div className="space-y-6">
              <h2 className="text-[#5E5DAE] font-bold text-left text-4xl md:text-5xl leading-tight">
                Integrate{" "}
                <span className="text-orange-500 mx-2">UdyogPay</span>
                on Your Website{" "}
                <span className="text-orange-500">Effortlessly</span>
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed font-semibold">
                UdyogPay makes payment integration simple with clear SDKs,
                REST APIs, and plugins for every major platform and language.
              </p>
            </div>

            {/* Feature Box */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-orange-100">
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Zap className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <p className="text-gray-800 font-medium text-lg mb-2">
                    UdyogPay integration took just 30 minutes.
                  </p>
                  <p className="text-gray-600">
                    The only Indian payment gateway designed for developers,
                    by developers.
                  </p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-6 mt-6">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-md hover:shadow-lg">
                Shop Now →
              </button>
              <button className="bg-white hover:bg-gray-50 text-orange-600 px-8 py-3 rounded-lg font-semibold border-2 border-orange-500 transition-colors">
                Know More →
              </button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="lg:flex-1 flex justify-center items-center">
            <img
              src={Group}
              alt="Integration Preview"
              className="w-full max-w-[500px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}