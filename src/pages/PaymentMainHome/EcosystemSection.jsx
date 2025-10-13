
import React from "react";
import { ArrowRight } from "lucide-react";

export default function EcosystemSection() {
  const cards = [
    {
      title: "Invoices",
      description:
        "Generate GST-Compliant Invoices with Itemized Details and Collect Payments Instantly via Cards, UPI, Net Banking, and Wallets.Generate GST-Compliant Invoices with Itemized Details and Collect Payments Instantly via Cards, UPI, Net Banking, and Wallets.Generate GST-Compliant Invoices with Itemized Details and Collect Payments Instantly via Cards, UPI, Net Banking, and Wallets.",
      bgColor: "bg-white",
      textColor: "text-black-700 font-bold text-sm",
    },
    {
      title: "Payment Pages",
      description:
        "Set Up Custom Payment Pages in Minutes and Start Accepting Payments Online Effortlessly.Set Up Custom Payment Pages in Minutes and Start Accepting Payments Online Effortlessly.Set Up Custom Payment Pages in Minutes and Start Accepting Payments Online Effortlessly.Set Up Custom Payment Pages in Minutes and Start Accepting Payments Online Effortlessly.",
      bgColor: "bg-white",
      textColor: "text-black-700 font-bold text-sm",
    },
    {
      title: "Smart Collect",
      description:
        "Seamlessly Receive NEFT, RTGS, and IMPS Payments via On-Demand Customer Identifiers with Automated Reconciliation.Set Up Custom Payment Pages in Minutes and Start Accepting Payments Online Effortlessly.Set Up Custom Payment Pages in Minutes and Start Accepting Payments Online Effortlessly.",
      bgColor: "bg-indigo-400",
      textColor: "text-black-700 font-bold text-sm",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 via-orange-50 to-yellow-100 flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-6xl">
        {/* Heading */}
        <h1
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
          style={{ fontSize: "45px", lineHeight: 1.1 }}
        >
          Use UdyogPay Payments Across Our Ecosystem
        </h1>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`flex flex-col justify-between ${card.bgColor} rounded-xl shadow-md p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
              style={{ minHeight: "380px" }} // set minimum height for all cards
            >
              <div>
                <h2
                  className={`text-2xl font-semibold mb-4 ${
                    card.textColor === "text-white"
                      ? "text-white"
                      : "text-indigo-600"
                  }`}
                >
                  {card.title}
                </h2>

                <p
                  className={`${card.textColor} text-sm leading-relaxed mb-6`}
                >
                  {card.description}
                </p>
              </div>

              <button
                className={`flex items-center gap-2 mt-auto font-medium transition-all duration-300 hover:gap-3 ${
                  card.textColor === "text-white"
                    ? "text-white"
                    : "text-indigo-600"
                }`}
              >
                Know More
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}