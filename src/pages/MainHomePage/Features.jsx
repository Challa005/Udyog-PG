import React from "react";
import { Link, Zap, CreditCard, Gift, ArrowRight } from "lucide-react";

export default function Screen6_Features() {
  const featureCard = [
    {
      title: "No-Code Payment Collection",
      description:
        "No website? No problem. Accept payments wherever your customers are WhatsApp, Instagram, or Facebook with simple no-code solutions.",
      icon: Link,
      color: "bg-orange-50",
      items: ["Payment Links", "Payment Forms", "Payment Buttons"],
    },
    {
      title: "Instant Settlements",
      description:
        "Keep your cash flow uninterrupted — receive payment gateway settlements within minutes, 24/7, even on weekends and bank holidays. Always have the funds you need to run your business smoothly.",
      icon: Zap,
      color: "bg-amber-50",
      items: ["Payment Links", "Payment Forms", "Payment Buttons"],
    },
    {
      title: "Flash UPI",
      description:
        "Boost conversions with the fastest in-app payments experience. Fully native checkout with 10% higher UPI success rates.Fully native checkout with 10% higher UPI success rates,in-app payments experience",
      icon: CreditCard,
      color: "bg-yellow-50",
      items: ["Payment Links", "Payment Forms", "Payment Buttons"],
    },
    {
      title: "Offer Engine",
      description:
        "Drive up to 30% higher conversions by showcasing attractive offers, discounts, and No-Cost EMI options across all payment methods — with zero technical effort.in-app payments experience",
      icon: Gift,
      color: "bg-orange-50",
      items: ["Payment Links", "Payment Forms", "Payment Buttons"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1
            className="text-[#5E5DAE] font-bold text-center mb-10"
            style={{ fontSize: "45px", lineHeight: 1.1 }}
          >
            Affordable, reliable payment solutions tailored for Startups and
            SMEs
          </h1>

          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center gap-2 mx-auto">
            Flat 1.6% to get started
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureCard.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`${feature.color} rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-white p-2 rounded-lg shadow-sm flex items-center justify-center">
                    <Icon className="w-6 h-6 text-orange-500" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800 leading-tight">
                    {feature.title}
                  </h2>
                </div>

                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                  {feature.description}
                </p>

                {feature.items.length > 0 && (
                  <div className="space-y-3 mb-6">
                    {feature.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                        <span className="text-gray-700 text-sm font-medium">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                <button className="text-orange-600 hover:text-orange-700 font-semibold text-sm flex items-center gap-1 group mt-auto">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}