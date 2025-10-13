import React from "react";

export default function EndToEnd() {
  const featuresq = [
    {
      title: "Payment Links",
      description:
        "Create no-code payment links to collect payments easily via WhatsApp, SMS, Facebook, Twitter, and more.",
      color: "bg-orange-50",
    },
    {
      title: "Subscriptions",
      description:
        "Enable recurring payments by automatically debiting customer accounts through standing instructions on cards, e-mandates via net banking, or UPI AutoPay.",
      color: "bg-orange-50",
    },
    {
      title: "Easy Split",
      description:
        "Seamlessly split vendor payouts and streamline marketplace settlements.",
      color: "bg-orange-50",
    },
    {
      title: "Auto Collect",
      description:
        "Simplify collections and reconciliation with unique virtual accounts and UPI IDs for IMPS, NEFT, and UPI payments.",
      color: "bg-orange-50",
    },
  ];

  return (
    <div className="min-h-screen bg-white p-8 md:p-12 -mt-30">
      <div className="max-w-6xl mx-auto">
        <h1
          className="font-bold text-black text-center mb-10 flex justify-center"
          style={{ fontSize: "35px", lineHeight: 1.1 }}
        >
          An end-to-end payments suite by Udyog Pay
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          {featuresq.map((feature, index) => (
            <div
              key={index}
              className={`${feature.color} rounded-lg p-8 flex flex-col justify-between min-h-[240px] transition-transform hover:scale-105`}
            >
              <div>
                <h2 className="text-2xl font-semibold text-orange-500 mb-4">
                  {feature.title}
                </h2>
                <p className="text-gray-800 text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
              <div className="mt-6">
                <a
                  href="#"
                  className="text-orange-500 font-medium hover:text-orange-600 inline-flex items-center"
                >
                  Learn More {">"}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}