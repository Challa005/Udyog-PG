import React from "react";
import CredLogo from "../../assets/credlogo.svg";
import NykaaLogo from "../../assets/nykalogo.svg";
import PorterLogo from "../../assets/porterlogo.svg";

export default function SmartPayoutsImages() {
  const images = [CredLogo, NykaaLogo, PorterLogo];

  return (
    <div className="min-h-screen bg-white py-20 px-6">
      {/* Text Section */}
      <div className="max-w-6xl mx-auto mb-16 text-left">
        <p
          className="text-orange-500 font-semibold mb-2 mt-10"
          style={{ fontSize: "20px", lineHeight: 1.1 }}
        >
          Industry-Specific Use Cases -
        </p>
        <h2
          className="font-bold mb-4"
          style={{ fontSize: "45px", lineHeight: 1.1, color: "#F54A00" }}
        >
          Smart Payouts for Modern Businesses
        </h2>
        <p className="text-black font-bold text-lg mt-10">
          Simplify every payout — from vendor payments to refunds and loan disbursals — 
          with our seamless Payouts APIs.
        </p>
      </div>

      {/* Images Grid with wider cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-start">
        {images.map((logo, index) => (
          <div
            key={index}
            className="p-6 bg-gray-50 rounded-xl shadow-sm w-full flex justify-center items-center"
          >
            <img
              src={logo}
              alt="Company Logo"
              className="w-full max-w-[600px] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
