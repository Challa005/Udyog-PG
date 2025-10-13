import React from "react";
import American from "../../assets/american.svg";
import Aws from "../../assets/aws.svg";
import Axisbank from "../../assets/axisbank.svg";
import Bharat from "../../assets/bharat.svg";
import Cred from "../../assets/cred.svg";
import Diners from "../../assets/diners.svg";
import Discover from "../../assets/discover.svg";
import Gpay from "../../assets/gpay.svg";
import Hdfc from "../../assets/hdfc.svg";
import Mastercard from "../../assets/mastercard.svg";
import Nsdl from "../../assets/nsdl.svg";
import Rbl from "../../assets/rbl.svg";
import Rupay from "../../assets/Rupay.svg";
import Shopify from "../../assets/shopify.svg";
import Upi from "../../assets/upi.svg";
import Visa from "../../assets/visa.svg";
import Wix from "../../assets/wix.svg";
import Yesbank from "../../assets/yesbank.svg";
import Digilocker from "../../assets/digilocker.svg";

export default function PaymentSlider() {
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
    { name: "American Express", url: American },
    { name: "Shopify", url: Shopify },
    { name: "Mastercard", url: Mastercard },
    { name: "Diners Club", url: Diners },
    { name: "DigiLocker", url: Digilocker },
    { name: "CRED", url: Cred },
    { name: "AWS", url: Aws },
    { name: "NSDL", url: Nsdl },
    { name: "Google Pay", url: Gpay },
  ];

  return (
    <div
      className="w-full py-6 overflow-hidden relative -mt-20"
      style={{ height: "110px", backgroundColor: "#FFFAF4" }}
    >
      <style>{`
        @keyframes slideRightToLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-slide {
          display: flex;
          animation: slideRightToLeft 25s linear infinite;
        }
        .animate-slide:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="flex h-full items-center justify-center">
        <div className="flex animate-slide space-x-6">
          {logos.concat(logos).map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[150px] h-[60px] flex items-center justify-center overflow-hidden bg-white rounded-lg hover:shadow-md transition-shadow"
            >
              <img
                src={logo.url}
                alt={logo.name}
                className="w-full h-full object-contain p-2"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}