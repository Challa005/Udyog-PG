import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";

// Payment Images
import Pic1 from "../../assets/pic1.svg";
import Pic2 from "../../assets/pic2.svg";
import Pic3 from "../../assets/pic3.svg";
import Pic4 from "../../assets/pic4.svg";
import Pic5 from "../../assets/pic5.svg";
import Pic6 from "../../assets/pic6.svg";
import Pic7 from "../../assets/pic7.svg";
import Pic8 from "../../assets/pic8.svg";
import Pic9 from "../../assets/pic9.svg";
import Pic10 from "../../assets/pic10.svg";

// Payout Images
import Payout1 from "../../assets/Payout1.svg";
import Payout2 from "../../assets/Payout2.svg";
// import Payout3 from "../../assets/Payout3.svg";
import Payout4 from "../../assets/Payout4.svg";
import Payout5 from "../../assets/Payout5.svg";
import Payout6 from "../../assets/Payout6.svg";

// Product Images
import Product1 from "../../assets/product1.svg";
import Product2 from "../../assets/product2.svg";
import Product3 from "../../assets/product3.svg";
import Product4 from "../../assets/product4.svg";
import Product5 from "../../assets/product5.svg";
import Product6 from "../../assets/product6.svg";

export default function Header() {
  const navLinks = ["Payments", "Payouts", "Our Product", "Partners", "Support"];
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();

  // Payment options
  const paymentOptions = [
    { url: Pic1, title: "Payment Gateway", description: "Payment on your Website & APP", link: "/paymentmainhome" },
    { url: Pic2, title: "Payment Links", description: "Create & send links to collect money" },
    { url: Pic3, title: "Payment Pages", description: "Get paid with personalized page" },
    { url: Pic4, title: "QR Codes", description: "Multi-feature QR for your business" },
    { url: Pic5, title: "UPI Payments", description: "Discover the complete UPI stack" },
    { url: Pic6, title: "COD Checkout", description: "Improve order conversions & reduce RTOs" },
    { url: Pic7, title: "Subscriptions", description: "Collect recurring subscription payments" },
    { url: Pic8, title: "Instant Settlement", description: "Customer payments settled faster" },
    { url: Pic9, title: "Soundbox", description: "Accept payments Offline", badge: "New" },
    { url: Pic10, title: "Udyogpay POS", description: "Accept Payments In-Store" },
  ];

  // Payout options
  const payoutOptions = [
    { url: Payout1, title: "Smart Payouts", description: "Automate bulk payouts to vendors & suppliers", link: "/payoutmainhome" },
    { url: Payout2, title: "Salary Payouts", description: "Send employee salaries instantly & securely" },
    // { url: Payout3, title: "Refunds", description: "Process customer refunds with one click" },
    { url: Payout4, title: "Loan Disbursals", description: "Disburse funds instantly to customers' accounts" },
    { url: Payout5, title: "Rewards & Incentives", description: "Distribute bonuses, cashback & incentives easily" },
    { url: Payout6, title: "Vendor Settlements", description: "Settle dues with vendors automatically" },
  ];

  // Product options
  const productOptions = [
    { url: Product1, title: "Udyog Pay", description: "Complete payment solutions for your business", link: "/ourproductmainhome" },
    { url: Product2, title: "Udyog Track", description: "Track and manage your business operations" },
    { url: Product3, title: "U Class", description: "Educational platform for business learning" },
    { url: Product4, title: "Udyogpay CMS", description: "Content management system for businesses" },
    { url: Product5, title: "Udyog Pay Step", description: "Step-by-step payment processing" },
    { url: Product6, title: "Udyog Awas", description: "Housing solutions for business communities", badge: "New" },
  ];

  const handleDropdownToggle = (link) => setActiveDropdown(prev => prev === link ? null : link);
  const handleOptionClick = (option) => { if(option.link) navigate(option.link); setActiveDropdown(null); }

  const renderDropdown = (options, widthClass = "w-[700px]") => (
    <div className={`absolute top-12 left-0 ${widthClass} bg-white shadow-2xl rounded-2xl border border-gray-100 grid grid-cols-2 gap-6 p-6 animate-fadeIn z-50`}>
      {options.map((option, index) => (
        <div key={index} onClick={() => handleOptionClick(option)} className="flex items-start gap-4 p-4 hover:bg-orange-50 rounded-xl cursor-pointer transition-all duration-300">
          <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center bg-orange-100 rounded-lg">
            <img src={option.url} alt={option.title} className="w-8 h-8 object-contain" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 flex items-center gap-2 text-lg">
              {option.title}
              {option.badge && <span className="text-xs bg-orange-500 text-white px-2 py-0.5 rounded-full">{option.badge}</span>}
            </h3>
            <p className="text-sm text-gray-600 mt-1">{option.description}</p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 relative">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={Logo} alt="UdyogPay Logo" className="w-40 h-20 object-contain" />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8 relative">
            {navLinks.map((item) => (
              <div key={item} className="relative">
                <button onClick={() => handleDropdownToggle(item)} className="relative text-gray-600 font-medium transition-colors hover:text-orange-500
                  after:content-[''] after:absolute after:left-0 after:bottom-0 
                  after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all hover:after:w-full">
                  {item}
                </button>

                {/* Render dropdowns */}
                {activeDropdown === "Payments" && item === "Payments" && renderDropdown(paymentOptions, "w-[900px]")}
                {activeDropdown === "Payouts" && item === "Payouts" && renderDropdown(payoutOptions, "w-[700px]")}
                {activeDropdown === "Our Product" && item === "Our Product" && renderDropdown(productOptions, "w-[700px]")}
              </div>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-6 py-2 text-gray-700 font-medium border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">Login</button>
            <button className="px-6 py-2 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors">Signup</button>
          </div>

          {/* Mobile Menu */}
          <button className="md:hidden p-2 text-gray-600 hover:text-gray-900">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Animation */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn { animation: fadeIn 0.25s ease-in-out; }
        `}
      </style>
    </header>
  );
}
