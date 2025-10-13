// sections/HeroSection.js
import React from "react";
import { useState, useEffect } from "react";
import Paymentlogo from "../../assets/Paymentlogo.svg";
import Logo from "../../assets/logo.png";

// Import all logos using correct relative paths
import Axisbank from "../../assets/axisbank.svg";
import Yesbank from "../../assets/yesbank.svg";
import Hdfc from "../../assets/hdfc.svg";
import Rbl from "../../assets/rbl.svg";
import Rupay from "../../assets/Rupay.svg";
import Visa from "../../assets/visa.svg";
import Bharat from "../../assets/bharat.svg";
import Discover from "../../assets/discover.svg";
import Wix from "../../assets/wix.svg";
import Upi from "../../assets/upi.svg";
import Phonepay from "../../assets/phonepay.svg";
import American from "../../assets/american.svg";
import Shopify from "../../assets/shopify.svg";
import Mastercard from "../../assets/mastercard.svg";
import Diners from "../../assets/diners.svg";
import Digilocker from "../../assets/digilocker.svg";
import Cred from "../../assets/cred.svg";
import Aws from "../../assets/aws.svg";
import Nsdl from "../../assets/nsdl.svg";
import Gpay from "../../assets/gpay.svg";
import Paytm from "../../assets/paytm.svg";


export default function HeroSection() {
  const logos = [
    { name: "Axis Bank", url: Axisbank },
    { name: "Yes Bank", url: Yesbank },
    { name: "HDFC Bank", url: Hdfc },
    { name: "RBL Bank", url: Rbl },
    { name: "RuPay", url: Rupay },
    { name: "Visa", url: Visa },
    { name: "Bharat BillPay", url: Bharat },
    { name: "Discover", url: Discover },
    { name: "Wix", url: Wix },
    { name: "UPI", url: Upi },
    { name: "PhonePe", url: Phonepay },
    { name: "American Express", url: American },
    { name: "Shopify", url: Shopify },
    { name: "Mastercard", url: Mastercard },
    { name: "Diners Club", url: Diners },
    { name: "DigiLocker", url: Digilocker },
    { name: "CRED", url: Cred },
    { name: "AWS", url: Aws },
    { name: "NSDL", url: Nsdl },
    { name: "Google Pay", url: Gpay },
    { name: "Paytm", url: Paytm },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
      <div className="container mx-auto px-6 max-w-[1200px] py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div className="flex flex-col justify-center space-y-6">
            <h1
              className="text-[#5E5DAE] font-bold text-4xl md:text-5xl leading-tight"
              style={{ fontSize: "45px", lineHeight: 1.1 }}
            >
              Accept Online Payments <br />
              Effortlessly in <br />
              <span className="text-orange-500">India</span> with{" "}
              <span className="text-orange-500">Udyog Pay</span>
            </h1>
            <p className="text-white font-bold text-base">
              Udyog Pay combines fast setup, effortless integration, and
              advanced checkout features to simplify payments for every
              business.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Sign Up Now →
              </button>
              <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-50 hover:text-orange-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                View Documentation →
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={Paymentlogo}
              alt="Udyog Pay"
              className="w-[480px] max-w-full h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Partner Logos */}
      <div className="relative w-full overflow-hidden py-8 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-950 border-t border-gray-700 shadow-inner">
        <style>{`
          @keyframes slideRightToLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-slide {
            display: flex;
            animation: slideRightToLeft 30s linear infinite;
          }
          .animate-slide:hover {
            animation-play-state: paused;
          }
        `}</style>
        <div className="flex h-full items-center justify-center">
          <div className="flex animate-slide space-x-10">
            {logos.concat(logos).map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[140px] h-[60px] flex items-center justify-center 
                  bg-white rounded-xl border border-gray-200 shadow-sm 
                  hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <img
                  src={logo.url}
                  alt={logo.name}
                  className="w-[100px] h-[40px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}