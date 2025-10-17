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

export default function UdyogPayFooter() {
  return (
    <footer className="bg-gray-50 py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left Side - Logo, Description & Certifications */}
        <div className="lg:w-1/3 flex flex-col gap-6 -mt-10">
          <img
            src={Logo}
            alt="UdyogPay Logo"
            className="w-40 h-20 object-contain"
          />

          <p className="text-gray-700">
            UdyogPay powers over 8,00,000 businesses in India and worldwide to
            collect payments, send payouts, handle international transactions,
            and much more. Backed by SBI, V Gumbasree, Koithon, and Agla
            Partners, UdyogPay was also Incubated by Paytm.
          </p>

          <div className="space-y-2 text-sm text-gray-600">
            <p className="font-semibold">
              PCI DSS Certification (mandatory for payment gateway)
            </p>
            <ul className="space-y-1 ml-4 list-disc">
              <li>ISO 27001 (Information Security Management)</li>
              <li>ISO 20222 / ISO 22301 (Business Continuity Planning)</li>
              <li>SSL/TLS Secure Badge (HTTPS encrypted)</li>
              <li>BIS Guidelines Compliant</li>
              <li>NPCI Approved / Certified Partner</li>
              <li>
                IRDAI / SBM approved / IT Related Insurance/Investment card etc
              </li>
              <li>Authorized bank Partnership Certificate</li>
            </ul>
          </div>
        </div>

        {/* Right Side - 4 Column Grid */}
        <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-15">
          {/* Column 1 - Payments & Management */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Make Payments</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Vendor Payments</li>
              <li>Payout Processing</li>
              <li>Invoice</li>
            </ul>

            <h3 className="font-bold text-gray-900 mt-6 mb-4">Management</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Bulk Payouts</li>
              <li>GST & Tax Payments</li>
              <li>Payable Analytics</li>
            </ul>
          </div>

          {/* Column 2 - Expense & Receipts */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Expense Management</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Budget & Advances</li>
              <li>Reimbursements</li>
              <li>Petty Cash</li>
              <li>Scan & Drop</li>
            </ul>

            <h3 className="font-bold text-gray-900 mt-6 mb-4">Receipts</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Policy & Approval Flows</li>
              <li>Hierarchy & Controls</li>
            </ul>
          </div>

          {/* Column 3 - Company & Legal */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>About Us</li>
              <li>Careers</li>
              <li>Media Coverage</li>
              <li>Contact Us</li>
              <li>Partnerships</li>
              <li>Affiliate & Bank Programs</li>
            </ul>

            <h3 className="font-bold text-gray-900 mt-6 mb-4">
              Legal & Policies
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Merchant Onboarding</li>
              <li>Customer Onboarding</li>
              <li>Policies & Compliance</li>
              <li>Grievance Redressal</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>About Us</li>
              <li>Careers</li>
              <li>Media Coverage</li>
              <li>Contact Us</li>
              <li>Partnerships</li>
              <li>Affiliate & Bank Programs</li>
            </ul>

            <h3 className="font-bold text-gray-900 mt-6 mb-4">
              Legal & Policies
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Merchant Onboarding</li>
              <li>Customer Onboarding</li>
              <li>Policies & Compliance</li>
              <li>Grievance Redressal</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Certification Logos */}
      <div className="flex flex-wrap items-center justify-start gap-8">
        {[AICPA, ISIMain, KVQA, PCIDCS].map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt="Certification"
            className="w-14 h-auto opacity-80 hover:opacity-100 transition"
          />
        ))}
      </div>

      {/* Bottom Section: Contact / Copyright / Social */}
      <div className="border-t border-gray-200 pt-6 flex flex-col lg:flex-row justify-between items-center gap-6 mt-10">
        {/* Left: Contact Info */}
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

        {/* Center: Copyright */}
        <div className="text-sm text-gray-500 text-center">
          <p>© 2025 Laitusneo Technologies Pvt. Ltd.</p>
          <p>All Rights Reserved. Built in India.</p>
        </div>

        {/* Right: Social Icons */}
        <div className="flex items-center justify-center gap-4">
          {[Facebook, Twitter, Linkedin, Instagram, Youtube].map((Icon, i) => (
            <Icon
              key={i}
              className="w-5 h-5 text-gray-500 hover:text-blue-600 transition"
            />
          ))}
        </div>
      </div>
    </footer>
  );
}
