import React from 'react';
import {
  Facebook, Twitter, Linkedin, Instagram, Youtube, MapPin, Mail, Phone
} from "lucide-react";

import Logo from "../../assets/logo.png";
import AICPA from "../../assets/aicpa.svg";
import KVQA from "../../assets/kvqa.svg";
import ISIMain from "../../assets/isimain.svg";
import PCIDCS from "../../assets/pcidcs.svg";

export default function UdyogPayFooter() {
  return (
    <div className="bg-gradient-to-br from-orange-50 to-white p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Top Section: Left Info + Columns */}
        <div className="flex flex-col md:flex-row gap-12">
          
          {/* Left Side: Company Info */}
          <div className="md:w-1/3 space-y-6">
            <div className="flex items-center gap-2 ">
              <img src={Logo} alt="UdyogPay Logo" className="w-40 h-20 object-contain" />
            </div>

            <p className="text-gray-700">
              UdyogPay powers over 8,00,000 businesses in India and worldwide to collect payments, send payouts, handle international transactions, and much more. Backed by SBI, Y Combinator, Krafton, and Apis Partners, UdyogPay was also incubated by PayPal.
            </p>

            {/* PCI DSS Certifications */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">
                PCI DSS Certification (mandatory for payment gateway)
              </h3>
              <ul className="space-y-2 text-sm text-gray-600 list-disc list-inside">
                <li>ISO 27001 (Information Security Management)</li>
                <li>ISO 50025 / ISO 27001 (Business continuity / managing services)</li>
                <li>SBI / TLS Secure badge (HTTPS encryption)</li>
                <li>RBI Guidelines Compliant (if applicable, for India)</li>
                <li>PPC (Payment / Contract license for US, EU, Asia, Rwanda)</li>
                <li>ROB / SIR registration (insurance/investment units)</li>
                <li>Authorized Bank Partnership Certificate (with your tie-up bank)</li>
              </ul>
            </div>
          </div>

          {/* Right Side: Multi-column Grid */}
          <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            <Column title="Collect Payments" items={["Payment Gateway","Payment Pages","QR Payments","Subscriptions","Instant Settlements","Global Collections"]} />
            <Column title="Make Payments" items={["Vendor Payments","Payroll Processing","Invoice Management","Bulk Payouts","GST & Tax Payments","Payable Analytics"]} />
            <Column title="Industries" items={["E-commerce","SaaS","Finance","Education","Logistics","Retail & Franchise"]} />
            <Column title="Legal & Policies" items={["Terms & Conditions","Privacy Policy","Policies & Compliance","Grievance Redressal"]} />
            <Column title="Company" items={["About Us","Careers","Media Coverage","Contact Us","Partnership Programs"]} />
            <Column title="Resources" items={["Blog","Case Studies","Videos & Tutorials","Events","FAQs"]} />
            <Column title="Rewards & Cards" items={["Employee Rewards","Channel Incentives","Prepaid Cards","Meal & Fuel Cards","Digital Marketing Cards","Gift & Purchase Cards"]} />
            <Column title="Management" items={["Executive Team","Board of Directors","Investor Relations","Advisory Board"]} />
          </div>
        </div>

        {/* Certification Logos */}
        <div className="flex flex-wrap items-center justify-start gap-8">
          {[AICPA, ISIMain, KVQA, PCIDCS].map((logo, i) => (
            <img key={i} src={logo} alt="Certification" className="w-14 h-auto opacity-80 hover:opacity-100 transition" />
          ))}
        </div>

        {/* Bottom Section: Contact / Copyright / Social */}
        <div className="border-t border-gray-200 pt-6 flex flex-col lg:flex-row justify-between items-center gap-6">
          
          {/* Left: Contact Info */}
          <div className="flex flex-col gap-3 text-sm text-gray-600">
            <p>Technology Partner: <span className="font-semibold">LaitusNeo Technologies</span></p>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">Registered Office:</p>
                <p>NH2, Shanthi Colony, Etawah, UP</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 flex-shrink-0" />
              <a href="mailto:support@Laitusneo.com" className="hover:text-blue-600">support@Laitusneo.com</a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 flex-shrink-0" />
              <a href="tel:+919999999999" className="hover:text-blue-600">+91 99999 99999</a>
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
              <Icon key={i} className="w-5 h-5 text-gray-500 hover:text-blue-600 transition" />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

// Helper Component for Footer Column
function Column({ title, items }) {
  return (
    <div>
      <h3 className="font-bold text-gray-800 mb-4">{title}</h3>
      <ul className="space-y-2 text-sm text-gray-600">
        {items.map((item, idx) => (
          <li key={idx} className="hover:text-orange-500 cursor-pointer">{item}</li>
        ))}
      </ul>
    </div>
  );
}
