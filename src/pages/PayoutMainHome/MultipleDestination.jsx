import React, { useState } from "react";
import { Building2, Smartphone, CreditCard } from "lucide-react";

export default function PaymentOptions() {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    {
      id: "bank",
      title: "Bank Account",
      description: `Instant bank transfers via IMPS, NEFT, or RTGS with zero cooldown time for new beneficiaries.Supports all major banks with real-time reconciliation.or RTGS with zero cooldown time for new beneficiaries`,
      icon: Building2,
    },
    {
      id: "upi",
      title: "UPI or Wallets",
      description: `Make instant transfers to UPI IDs or digital wallets like Paytm and Amazon Pay.Enjoy seamless payments with no waiting period or manual approvals.or RTGS with zero cooldown time for new beneficiaries`,
      icon: Smartphone,
    },
    {
      id: "cards",
      title: "Tokenised Cards",
      description: `Fast, secure transfers to tokenised cards — anytime, anywhere.Protect sensitive data with advanced tokenisation and encryption.or RTGS with zero cooldown time for new beneficiaries`,
      icon: CreditCard,
    },
  ];

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6"
      style={{ backgroundColor: "rgb(94,93,171)" }}
    >
      <div className="w-full max-w-6xl">
        <h1
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
          style={{ fontSize: "45px", lineHeight: 1.1 }}
        >
          Select from Multiple Destination Payment Options
        </h1>

        {/* Cards Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {options.map((option) => {
            const Icon = option.icon;
            const isSelected = selectedOption === option.id;

            return (
              <div
                key={option.id}
                onClick={() => setSelectedOption(option.id)}
                className={`bg-white shadow-lg rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 border-2 flex flex-col justify-between h-[300px] w-full md:w-[320px] ${
                  isSelected
                    ? "ring-4 ring-indigo-400 border-indigo-400"
                    : "border-gray-200"
                }`}
              >
                {/* Icon + Title */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-5 h-5 text-indigo-600" />
                    <h2 className="text-medium font-semibold text-orange-500">
                      {option.title}
                    </h2>
                  </div>

                  {/* Description */}
                  <p className="text-black-700 text-base font-bold leading-relaxed whitespace-pre-line">
                    {option.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Continue Button */}
        {selectedOption && (
          <div className="mt-12 text-center">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-indigo-900 font-bold py-4 px-12 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg">
              Continue with{" "}
              {options.find((o) => o.id === selectedOption)?.title}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
