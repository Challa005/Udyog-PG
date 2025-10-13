import React from "react";
import { Mail, Phone, Facebook, Twitter, Linkedin, Instagram, MapPin } from "lucide-react";
import Logo from "../../assets/logo.png";
import AICPA from "../../assets/aicpa.svg";
import KVQA from "../../assets/kvqa.svg";
import ISIMain from "../../assets/isimain.svg";
import PCIDCS from "../../assets/pcidcs.svg";

export default function Footer() {
  const collectPayments = [
    "Payment Gateway",
    "Payment Links",
    "QR Payments",
    "Payment Pages",
    "Instant Settlements",
    "Global Collections",
  ];

  const makePayments = [
    "Vendor Payments",
    "Payroll Processing",
    "Invoice Management",
    "Bulk Payouts",
    "GST & Tax Payments",
    "Payable Analytics",
  ];

  const expenseManagement = [
    "Budget & Advances",
    "Reimbursements",
    "Petty Cash",
    "Scan & Drop Receipts",
    "Policy & Approval Flows",
    "Hierarchy & Controls",
  ];

  const rewardsCards = [
    "Employee Rewards",
    "Channel Incentives",
    "Prepaid Cards",
    "Meal & Fuel Cards",
    "Digital Marketing Cards",
    "Gift & Purchase Cards",
  ];

  const forDevelopers = [
    "API Reference",
    "Webhooks",
    "SDKs & Plugins",
    "Documentation",
    "Checkout Demo",
    "Integration Guides",
  ];

  return (
    <footer className="bg-white border-t border-gray-200 w-full">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Columns */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-x-24">
          {/* Left Section */}
          <div className="lg:w-1/3">
            <div className="flex items-center gap-3 mb-6">
              <img
                src={Logo}
                alt="UdyogPay Logo"
                className="w-40 h-20 object-contain -mt-7"
              />
            </div>
            <p className="text-sm font-bold text-gray-600 leading-relaxed mb-6">
              UdyogPay powers over 8,00,000 businesses in India and worldwide
              to collect payments, payout, handle international transactions,
              and much more. Backed by 38% Y Combinator, Indian, and Asia
              Partners. UdyogPay was also founded by PayU.
            </p>

            <div className="space-y-2 text-sm font-bold text-gray-600">
              <p>• ISO 9001 Certification (mandatory for payment gateway)</p>
              <p>• ISO 27001 (Information Security Management)</p>
              <p>• ISO 20022 / ISO 31911 (Business continuity, managing standards)</p>
              <p>• BH/I'16 House Badge (SFPH encryption)</p>
              <p>• BII Guidelines Compliant (Responsible for India)</p>
              <p>• NPCI Approved / Certified Partner (for UPI, RuPay, BharatQR)</p>
              <p>• IRDA / SEBI registration (if offering insurance/investment add-ons)</p>
              <p>• Authorised Bank Partnership Certificate (with your tie-up bank)</p>
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-12">
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">
                Collect Payments
              </h3>
              <ul className="space-y-3 text-sm text-gray-600">
                {collectPayments.map((item, idx) => (
                  <li key={idx}>
                    <a href="#" className="hover:text-blue-600">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-4">
                Make Payments
              </h3>
              <ul className="space-y-3 text-sm text-gray-600 mb-6">
                {makePayments.map((item, idx) => (
                  <li key={idx}>
                    <a href="#" className="hover:text-blue-600">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>

              <h3 className="font-semibold text-gray-800 mb-4">
                Expense Management
              </h3>
              <ul className="space-y-3 text-sm text-gray-600">
                {expenseManagement.map((item, idx) => (
                  <li key={idx}>
                    <a href="#" className="hover:text-blue-600">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-4">
                Rewards & Cards
              </h3>
              <ul className="space-y-3 text-sm text-gray-600 mb-6">
                {rewardsCards.map((item, idx) => (
                  <li key={idx}>
                    <a href="#" className="hover:text-blue-600">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>

              <h3 className="font-semibold text-gray-800 mb-4">
                For Developers
              </h3>
              <ul className="space-y-3 text-sm text-gray-600">
                {forDevelopers.map((item, idx) => (
                  <li key={idx}>
                    <a href="#" className="hover:text-blue-600">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Certification Logos Row */}
        <div className="flex flex-wrap items-center justify-start gap-8 mt-10">
          <img src={AICPA} alt="AICPA" className="w-14 h-auto opacity-80 hover:opacity-100 transition" />
          <img src={ISIMain} alt="ISO" className="w-14 h-auto opacity-80 hover:opacity-100 transition" />
          <img src={KVQA} alt="KVQA" className="w-14 h-auto opacity-80 hover:opacity-100 transition" />
          <img src={PCIDCS} alt="PCI-DSS" className="w-14 h-auto opacity-80 hover:opacity-100 transition" />
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col lg:flex-row justify-between gap-6">
          {/* Left */}
          <div className="flex flex-col gap-3 text-sm text-gray-600">
             <p>
              Technology Partner:{" "}
              <span className="font-semibold">LaitusNeo Technologies</span>
            </p>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">Registered Office:</p>
                <p>NH2, Shanthi Colony, Etawah, UP</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 flex-shrink-0" />
              <a href="mailto:support@Laitusneo.com" className="hover:text-blue-600">
                support@Laitusneo.com
              </a>
            </div>

            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 flex-shrink-0" />
              <a href="tel:+919999999999" className="hover:text-blue-600">
                +91 99999 99999
              </a>
            </div>

           
          </div>

          {/* Center */}
          <div className="text-sm text-gray-500 flex flex-col items-center justify-center text-center">
            <p>© 2025 Laitusneo Technologies Pvt. Ltd.</p>
            <p>All Rights Reserved. Built in India.</p>
          </div>

          {/* Right */}
          <div className="flex items-center justify-center gap-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <Facebook className="w-5 h-5 text-gray-500 hover:text-blue-600 transition" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <Twitter className="w-5 h-5 text-gray-500 hover:text-sky-500 transition" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <Linkedin className="w-5 h-5 text-gray-500 hover:text-blue-700 transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <Instagram className="w-5 h-5 text-gray-500 hover:text-pink-500 transition" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
