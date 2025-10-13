import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

// Import logos
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

export default function HeroWithTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      name: "Escrow Accounts",
      color: "bg-purple-50 border-purple-200",
      content: {
        title: "Escrow Accounts",
        description: "Simplify your escrow setup with guided assistance",
        features: [
          "Say goodbye to manual recharges",
          "Enable instant transfers",
          "Automate direct fund transfers between accounts",
          "Monitor transfer status, identify failures and assist in reconciliation"
        ],
        cta: "Learn More"
      }
    },
    {
      name: "Corporate Credit Cards",
      color: "bg-green-50 border-green-200",
      content: {
        title: "Corporate Credit Cards, Simplified",
        description: "Launch instantly with our self-serve guided flow",
        features: [
          "Launch instantly with our self-serve guided flow",
          "Manage multiple cards with ease",
          "Approve direct bank account recharges automatically",
          "Ensure funds are available as you prefer"
        ]
      }
    },
    {
      name: "Paytm Wallet",
      color: "bg-orange-50 border-orange-200",
      content: {
        title: "Paytm Wallet",
        description: "Seamless integration with your Paytm accounts",
        features: [
          "Link your Paytm accounts instantly without any additional integration needed",
          "Make instant payouts to your beneficiary's Paytm wallets",
          "Boost success rates by defining transfer splits for other fund sources",
          "Real-time transaction tracking and reporting"
        ]
      }
    },
    {
      name: "Multi-Bank Accounts",
      color: "bg-blue-50 border-blue-200",
      content: {
        title: "Manage Multiple Current Accounts Effortlessly",
        description: "Maximize success with multi-bank accounts",
        features: [
          "Say goodbye to manual recharges",
          "Enable instant transfers across multiple banks",
          "Automatic fallback mechanisms for failed transactions",
          "Maximize success with multi-bank accounts"
        ]
      }
    }
  ];

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

  const currentTab = tabs[activeTab];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-20 text-center md:text-left">
        <p className="text-black text-lg font-bold mb-4">Payouts Made Simple</p>
        <h1
          className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          style={{ fontSize: "45px", lineHeight: 1.1 }}
        >
          India's Leading Platform for <span className="text-orange-600">Instant Payments</span>
        </h1>
        <p className="text-lg md:text-xl text-black-700 font-bold mb-10 max-w-3xl">
          India's largest disbursal platform lets you pay vendors, refund customers, and disburse loans instantly — 24×7, even on holidays — with a 99.98% success rate.
        </p>
        <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-8">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg text-base transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Create Account &gt;
          </button>
          <button className="bg-white hover:bg-orange-50 text-orange-500 font-semibold px-6 py-3 rounded-lg text-base border-2 border-orange-500 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
            Contact Sales &gt;
          </button>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="max-w-6xl mx-auto px-6 py-6 -mt-10">
        {/* Section Heading */}
        <div className="mb-6 text-center md:text-left">
          <h3 className="text-2xl font-bold text-black mb-2">
            The Future of Payouts
          </h3>
          <p className="text-lg text-black font-medium max-w-3xl">
            Add multiple Payout Fund Sources and pay your vendors, partners, employees, or customers into the destination payment mode of their choice.
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="mb-8 bg-white rounded-xl shadow-md p-3 border border-gray-200 flex">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex-1 py-4 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === index
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-transparent text-gray-700 hover:bg-gray-50'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="overflow-hidden">
          <div
            key={activeTab}
            className={`${currentTab.color} border-2 rounded-2xl p-8 shadow-lg transition-opacity duration-500 ease-in-out opacity-100`}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              {currentTab.content.title}
            </h2>
            <p className="text-lg text-gray-700 mb-6">{currentTab.content.description}</p>

            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              {currentTab.content.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>

            {currentTab.content.cta && (
              <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all hover:gap-3 shadow-md">
                {currentTab.content.cta}
                <ArrowRight className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Logos Section */}
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
