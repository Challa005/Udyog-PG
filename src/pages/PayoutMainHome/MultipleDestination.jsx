import React, { useState } from 'react';
import { Building2, Smartphone, CreditCard } from 'lucide-react';

export default function PaymentOptions() {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    {
      id: 'bank',
      title: 'Bank Account',
      description: 'Instant bank transfers via IMPS, NEFT, or RTGS with zero cooldown time for new beneficiaries',
      icon: Building2,
    },
    {
      id: 'upi',
      title: 'UPI or Wallets',
      description: 'Make instant transfers to UPI IDs or digital wallets like Paytm and Amazon Pay.',
      icon: Smartphone,
    },
    {
      id: 'cards',
      title: 'Tokenised Cards',
      description: 'Fast, secure transfers to tokenised cards — anytime, anywhere.',
      icon: CreditCard,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-6">
      <div className="w-full max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-orange-500">
          Select from Multiple Destination Payment Options
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {options.map((option) => {
            const Icon = option.icon;
            const isSelected = selectedOption === option.id;

            return (
              <div
                key={option.id}
                onClick={() => setSelectedOption(option.id)}
                className={`bg-white shadow-lg rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 border-2 ${
                  isSelected ? 'ring-4 ring-indigo-400 border-indigo-400' : 'border-gray-200'
                }`}
              >
                <div className="flex flex-col items-start h-full">
                  <div className="mb-6">
                    <Icon className="w-12 h-12 text-indigo-600" />
                  </div>
                  
                  <h2 className="text-2xl font-bold text-orange-500 mb-4">
                    {option.title}
                  </h2>
                  
                  <p className="text-gray-700 text-base leading-relaxed">
                    {option.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {selectedOption && (
          <div className="mt-12 text-center">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-indigo-900 font-bold py-4 px-12 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg">
              Continue with {options.find(o => o.id === selectedOption)?.title}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}