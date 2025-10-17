import React from "react";
import Girl from "../../assets/girl.svg";
import Smartphone from "../../assets/smartphone.svg";
import Onlineshopping from "../../assets/onlineshopping.svg";
import Sstapping from "../../assets/sstapping.svg";
import Sscard from "../../assets/sscard.svg";
import Creditcard from "../../assets/creditcard.svg";
import GooglePay from "../../assets/googlepay.svg";
import Phonepay from "../../assets/phonepay.svg";
import Paytmpayment from "../../assets/paytmpayment.svg";
import Credpay from "../../assets/credpay.svg";
import Card from "../../assets/card.svg";
import Wallet from "../../assets/wallet.svg";
import Netbanking from "../../assets/netbanking.svg";

export default function GirlArc() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1
          className="text-[#5E5DAE] font-bold text-center mb-10 flex justify-start"
          style={{ fontSize: "45px", lineHeight: 1.1 }}
        >
          India-Optimized Payment Gateway for Seamless Transactions
        </h1>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24 relative -mt-15">
          {/* Left Side Image */}
          <div className="relative flex justify-center items-center -mt-7">
            <div className="relative w-[450px] h-[320px]">
              <div className="absolute left-1/2 top-[90%] transform -translate-x-1/2 -translate-y-1/2 z-10">
                <img
                  src={Girl}
                  alt="Girl"
                  className="w-40 h-auto object-contain"
                />
              </div>
              <div className="absolute left-1/2 top-[10%] transform -translate-x-1/2">
                <img
                  src={Smartphone}
                  alt="Smartphone"
                  className="w-24 h-auto"
                />
              </div>
              <div className="absolute left-[25%] top-[25%] transform -translate-x-1/2 -rotate-4">
                <img
                  src={Onlineshopping}
                  alt="Online Shopping"
                  className="w-24 h-auto"
                />
              </div>
              <div className="absolute right-[25%] top-[25%] transform translate-x-1/2 rotate-4">
                <img
                  src={Sstapping}
                  alt="Sstapping"
                  className="w-24 h-auto"
                />
              </div>
              <div className="absolute left-[20%] top-[60%] transform -translate-x-1/2 -rotate-2">
                <img src={Sscard} alt="Sscard" className="w-24 h-auto" />
              </div>
              <div className="absolute right-[20%] top-[50%] transform translate-x-1/2 rotate-2">
                <img
                  src={Creditcard}
                  alt="Creditcard"
                  className="w-24 h-auto"
                />
              </div>
            </div>
          </div>

          {/* Right Side Content */}
          <div className="relative mt-20">
            <div>
              <h3 className="text-sm font-bold text-black-700 leading-relaxed">
                Customer-Friendly Checkout with the Widest Payment Choices:
                UPI, Cards, EMIs, Pay Later, Wallets, Net Banking & More
              </h3>

              <div className="grid grid-cols-5 gap-6 relative mt-10">
                {[
                  GooglePay, Phonepay, Paytmpayment, Credpay, Card,
                  Wallet, Netbanking
                ].map((icon, index) => (
                  <div
                    key={index}
                    className="flex justify-center items-center h-15 border border-gray-300 rounded-md p-2 
                                transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer"
                  >
                    <img
                      src={icon}
                      alt={icon}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            <p className="text-sm font-bold text-black-700 leading-relaxed mt-8">
              Boost Transaction Success with Cashfree's Direct Bank
              Partnerships and Smart AI/ML Dynamic Routing.
            </p>

            <p className="text-sm font-bold text-black-700 leading-relaxed mt-8">
              Create Exceptional Customer Experiences with Easy Website & App
              Integrations — SDKs, REST APIs, Plug-ins, and Multi-Language
              Support Included.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center relative mt-30">
  <div
    className="relative -mt-20 w-full py-12 flex justify-center"
    style={{
      background:
        "linear-gradient(180deg, rgba(249,228,198,0.8) 0%, rgba(245,240,255,0.5) 100%)",
    }}
  >
    <div className="w-full px-6 grid grid-cols-5 text-center max-w-[95rem]">
      {/* First item spans 2 columns */}
      <div className="col-span-2 flex items-center justify-center">
        <span className="text-xl font-bold text-[#5E5DAE]">
          Ready to get on board right away?
        </span>
      </div>
      <div className="flex items-center justify-center">
        <span className="text-xl font-bold text-[#5E5DAE]">
          Fast Activation
        </span>
      </div>
      <div className="flex items-center justify-center">
        <span className="text-xl font-bold text-[#5E5DAE]">
          Effortless Low-Code Integration
        </span>
      </div>
      <div className="flex items-center justify-center">
        <span className="text-xl font-bold text-[#5E5DAE]">
          24/7 Best-in-Class
        </span>
      </div>
    </div>
  </div>
</div>

      </div>
    </div>
  );
}