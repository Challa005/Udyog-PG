import React, { useState } from "react";
import { CreditCard, Volume2, Globe, Zap, Truck, GraduationCap, TrendingUp, BarChart3 } from "lucide-react";

export default function Offerings() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const offerings = [
    {
      icon: CreditCard,
      title: "POS Machine",
      description:
        "UdyogPay POS comes with inbuilt dynamic or static QR support, enabling businesses to accept card, UPI, and wallet payments seamlessly.",
      gradient: "from-orange-400 to-red-500",
    },
    {
      icon: Volume2,
      title: "Soundbox",
      description:
        "A smart UdyogPay Soundbox that announces transactions instantly, available with both static and dynamic QR options for easy collections",
      gradient: "from-amber-400 to-orange-500",
    },
    {
      icon: Globe,
      title: "Payment Gateway",
      description:
        "UdyogPay Payment Gateway ensures secure online collections with multi-channel support for UPI, cards, net banking, and wallets.",
      gradient: "from-yellow-400 to-amber-500",
    },
    {
      icon: Zap,
      title: "Flash UPI",
      description:
        "UdyogPay Flash UPI provides ultra-fast payment acceptance with real-time settlement, designed for high-volume businesses.",
      gradient: "from-orange-300 to-yellow-500",
    },
  ];

  const products = [
    {
      icon: Truck,
      title: "Udyog Track",
      description:
        "Introducing an all-in-one financial management software designed to simplify your business operations. Track expenses, manage transactions, handle accounting, and generate invoices effortlessly. Empower your team with seamless expense requests and approvals, all in one platform.",
      color: "bg-indigo-600",
    },
    {
      icon: GraduationCap,
      title: "Uclass",
      description:
        "Uclass is a smart and easy-to-use school management solution. It helps schools manage students, staff, attendance, fees, and academic records seamlessly. With automation workflows for approvals, reports, and communication, running a school becomes simple and efficient.",
      color: "bg-purple-600",
    },
    {
      icon: TrendingUp,
      title: "Udyog Step",
      description:
        "Streamlines merchant onboarding by allowing your Onboarding, Risk, Compliance, and Final Approval teams to work simultaneously in one platform. It ensures every step from verification to approval is organized and systematic. With automated workflows and real-time tracking, merchant onboarding becomes smooth, fast, and error-free.",
      color: "bg-violet-600",
    },
    {
      icon: BarChart3,
      title: "Udyog Pay CMS",
      description:
        "Helps businesses manage, track, and optimize their cash flow efficiently. It provides real-time visibility into collections, payments, reconciliations, and enterprise-level payment collections or payouts with multi-branch support, ensuring accuracy and control. With streamlined processes and automated reporting, managing cash becomes simple, secure, and systematic.",
      color: "bg-indigo-700",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
      {/* Offerings Section */}
      <div className="bg-gradient-to-r from-indigo-400 via-indigo-300 to-indigo-200 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1
            className="text-white font-bold text-center mb-10 mt-8 flex justify-start"
            style={{ fontSize: "35px", lineHeight: 1.1 }}
          >
            Udyog Pay Offering
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offerings.map((item, index) => {
              const Icon = item.icon;
              const iconColors = [
                "bg-purple-500",
                "bg-purple-500",
                "bg-purple-500",
                "bg-purple-500",
              ];
              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredCard(`offering-${index}`)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 hover:bg-white/30 hover:scale-105 hover:shadow-2xl cursor-pointer h-70"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`p-3 rounded-xl ${
                        iconColors[index]
                      } shadow-lg transform ${
                        hoveredCard === `offering-${index}`
                          ? "rotate-12 scale-110"
                          : ""
                      } transition-all duration-300`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <h1
            className="font-bold text-center mb-10 flex justify-start"
            style={{
              fontSize: "35px",
              lineHeight: 1.1,
              color: "rgb(79, 70, 229)",
            }}
          >
            Udyogpay Products
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => {
              const Icon = product.icon;
              const iconColors = [
                "bg-indigo-400",
                "bg-indigo-500",
                "bg-indigo-600",
                "bg-indigo-700",
              ];
              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredCard(`product-${index}`)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="rounded-2xl p-6 text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer relative overflow-hidden"
                  style={{ backgroundColor: "rgb(79, 70, 229)" }}
                >
                  <div
                    className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 transform transition-transform duration-500"
                    style={{
                      transform:
                        hoveredCard === `product-${index}`
                          ? "scale(1.5)"
                          : "scale(1)",
                    }}
                  ></div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`p-3 rounded-xl ${
                          iconColors[index]
                        } shadow-lg transform ${
                          hoveredCard === `product-${index}`
                            ? "rotate-12 scale-110"
                            : ""
                        } transition-all duration-300`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-orange-300">
                        {product.title}
                      </h3>
                    </div>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}