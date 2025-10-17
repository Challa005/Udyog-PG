import React from "react";

export default function FeaturesSection() {
  const features = [
    {
      title: "Achieve an industry-leading 99.98% success rate",
      description:
        "Experience exceptional reliability with a near-perfect transaction success rate. Our platform ensures uninterrupted operations even during peak loads. Advanced routing and smart retry mechanisms guarantee that your payments are processed swiftly and securely, minimizing failures and maximizing customer satisfaction.",
    },
    {
      title: "Advanced Risk Defense",
      description:
        "Safeguard every transaction with our intelligent risk management framework. Leverage daily transaction limits, dynamic fraud detection, and advanced user verification to prevent misuse. Multi-layer security is enforced both at the API and dashboard levels, protecting sensitive data and maintaining compliance with global standards.",
    },
    {
      title: "The industry's first bank downtime detector",
      description:
        "Stay ahead with our unique real-time bank downtime detection system. Automatically identify and reroute payments around unscheduled outages to ensure your business never halts. This feature continuously monitors partner banks and updates routing instantly to guarantee seamless payout performance.",
    },
    {
      title: "Almost 100% reconciliation in just 5 minutes",
      description:
        "Simplify your post-payment processes with our automated reconciliation engine. Instantly match transactions across multiple banks and payment modes, identifying reversals or failures within minutes. Generate consolidated reports for your entire payout lifecycle — saving time, reducing errors, and improving transparency.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2
          className="font-bold text-center text-indigo-900 mb-16"
          style={{ fontSize: "45px", lineHeight: 1.1 }}
        >
          Reliable, no matter how big you grow
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-indigo-50 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 w-[300px] min-h-[360px] flex flex-col justify-start p-8 space-y-4 text-left"
            >
              {/* Feature Title */}
              <h3 className="text-xl font-bold text-indigo-900 leading-snug">
                {feature.title}
              </h3>

              {/* Feature Description */}
              <p className="text-black text-sm font-semibold leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
