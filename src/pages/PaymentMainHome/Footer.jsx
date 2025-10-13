// sections/Footer.js
import React from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

import Logo from "../../assets/logo.png";
import AICPA from "../../assets/aicpa.svg";
import KVQA from "../../assets/kvqa.svg";
import ISIMain from "../../assets/isimain.svg";
import PCIDCS from "../../assets/pcidcs.svg";

export default function Footer() {
  return (
    <footer className="bg-white py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left Side - Logo & Description */}
        <div className="lg:flex-1 space-y-6">
          <img
            src={Logo}
            alt="UdyogPay Logo"
            className="w-40 h-20 object-contain"
          />
          <p className="text-gray-700">
            UdyogPay powers over 8,00,000 businesses in India and worldwide to
            collect payments, send payouts, handle international transactions,
            and much more. Backed by SBI, Y Combinator, Kuehne, and Apis
            Partners, UdyogPay was also incubated by PayPal.
          </p>
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">
              PCI DSS Certification (mandatory for payment gateway)
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 list-disc list-inside">
              <li>ISO 27001 (Information Security Management)</li>
              <li>
                ISO 50025 / ISO 27001 (Business continuity / managing services)
              </li>
              <li>SBI / TLS Secure badge (HTTPS encryption)</li>
              <li>RBI Guidelines Compliant (if applicable, for India)</li>
              <li>
                PPC (payment / Contract license for US, EU, Asia, Rwanda)
              </li>
              <li>
                ROB / SIR registration (if selling insurance/investment unit
                etc.)
              </li>
              <li>
                Authorised Bank Partnership Certificate (with your tie-up bank)
              </li>
            </ul>
          </div>
        </div>

        {/* Right Side - Footer Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12 relative">
          {/* Column 1 */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Collect Payments</h3>
            <ul className="space-y-2 text-sm text-gray-600 list-disc pl-5">
              <li className="hover:underline cursor-pointer">Payment Gateway</li>
              <li className="hover:underline cursor-pointer">Payment Links</li>
              <li className="hover:underline cursor-pointer">QR Payments</li>
              <li className="hover:underline cursor-pointer">Subscriptions</li>
              <li className="hover:underline cursor-pointer">Instant Settlements</li>
              <li className="hover:underline cursor-pointer">Global Payments</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Make Payments</h3>
            <ul className="space-y-2 text-sm text-gray-600 list-disc pl-5">
              <li>Vendor Payments</li>
              <li>Payroll Processing</li>
              <li>Invoice Management</li>
              <li>Bulk Payouts</li>
              <li>GST & Tax Payments</li>
              <li>Payable Analytics</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Expense Management</h3>
            <ul className="space-y-2 text-sm text-gray-600 list-disc pl-5">
              <li>Budget & Allowances</li>
              <li>Reimbursements</li>
              <li>Petty Cash</li>
              <li>Scan & Drop Receipts</li>
              <li>Policy & Approval Flows</li>
              <li>Hierarchy & Controls</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Rewards & Cards</h3>
            <ul className="space-y-2 text-sm text-gray-600 list-disc pl-5">
              <li>Employee Rewards</li>
              <li>Channel Incentives</li>
              <li>Prepaid Cards</li>
              <li>Meal & Fuel Cards</li>
              <li>Digital Marketing Cards</li>
              <li>Gift & Purchase Cards</li>
            </ul>
          </div>

          {/* Column 5 */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">For Developers</h3>
            <ul className="space-y-2 text-sm text-gray-600 list-disc pl-5">
              <li>API Reference</li>
              <li>Webhooks</li>
              <li>SDKs & Plugins</li>
              <li>Documentation</li>
              <li>Checkout Demo</li>
              <li>Integration Guide</li>
            </ul>
          </div>

          {/* Column 6 */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Support & Resources</h3>
            <ul className="space-y-2 text-sm text-gray-600 list-disc pl-5">
              <li>Help Center</li>
              <li>FAQs</li>
              <li>Community Forums</li>
              <li>Contact Support</li>
              <li>Blog</li>
              <li>Case Studies</li>
            </ul>
          </div>

          {/* Column 7 */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Security & Compliance</h3>
            <ul className="space-y-2 text-sm text-gray-600 list-disc pl-5">
              <li>Data Security</li>
              <li>PCI Compliance</li>
              <li>Fraud Prevention</li>
              <li>Audit Logs</li>
              <li>Regulatory Compliance</li>
              <li>Two-Factor Auth</li>
            </ul>
          </div>

          {/* Column 8 */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Insights & Analytics</h3>
            <ul className="space-y-2 text-sm text-gray-600 list-disc pl-5">
              <li>Revenue Reports</li>
              <li>Customer Insights</li>
              <li>Transaction Trends</li>
              <li>Performance Dashboards</li>
              <li>Forecasting</li>
              <li>Export Data</li>
            </ul>
          </div>

          {/* Column 9 */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-600 list-disc pl-5">
              <li>About Us</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Partners</li>
              <li>Investor Relations</li>
              <li>Legal</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Certification Logos Row */}
      <div className="flex flex-wrap items-center justify-start gap-8 -mt-25">
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
            <a
              href="mailto:support@Laitusneo.com"
              className="hover:text-blue-600"
            >
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

        {/* Center - Copyright */}
        <div className="text-sm text-gray-500 flex flex-col items-center justify-center text-center">
          <p>© 2025 Laitusneo Technologies Pvt. Ltd.</p>
          <p>All Rights Reserved. Built in India.</p>
        </div>

        {/* Right - Social Icons */}
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
          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            <Youtube className="w-5 h-5 text-gray-500 hover:text-red-600 transition" />
          </a>
        </div>
      </div>
    </footer>
  );
}
