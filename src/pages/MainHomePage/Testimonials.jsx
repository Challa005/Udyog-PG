import React, { useState } from "react";
import { Play } from "lucide-react";

export default function Testimonials() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  const cards = [
    {
      id: 1,
      title: "zepto",
      bgColor: "bg-pink-500",
      description:
        "Zepto delivers 10 min groceries with a seamless payment collection solution by Cashfree Payments.",
      type: "read",
    },
    {
      id: 2,
      title: "dukaan",
      bgColor: "bg-blue-600",
      description:
        "Dukaan achieves 165% higher success rate by switching to Cashfree Payments.",
      type: "video",
    },
    {
      id: 3,
      title: "ixigo",
      bgColor: "bg-orange-600",
      description:
        "Ixigo provides a hassle-free booking and instant refunds to travelers with Pre-authorization by Cashfree Payments.",
      type: "read",
    },
    {
      id: 4,
      title: "reasons",
      bgColor: "bg-gray-700",
      description:
        "Akudo achieves 98%+ success rate with Cashfree Payment Gateway.",
      type: "video",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-500 p-8">
      <div className="max-w-7xl mx-auto">
        <h1
          className="text-white font-bold text-center mb-10 relative mt-8"
          style={{ fontSize: "45px", lineHeight: 1.1 }}
        >
          The Reasons Indian Businesses Rely on UdyogPay
          <br />
          Payment Gateway
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 relative mt-20">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`${card.bgColor} h-50 flex items-center justify-center relative`}>
                <h2 className="text-3xl font-bold text-white">
                  {card.title}
                </h2>
              </div>

              <div className={`${card.bgColor} px-6 py-3 flex items-center justify-between`}>
                <span className="text-white font-semibold">
                  {card.type === "read" ? "Read More" : "Watch Video"}
                </span>
                {card.type === "video" && (
                  <div className="bg-white rounded-full p-1">
                    <Play
                      className="w-4 h-4 text-gray-800"
                      fill="currentColor"
                    />
                  </div>
                )}
              </div>

              <div className="p-6 bg-gray-50">
                <p className="text-gray-700 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-3">
          {[0, 1, 2].map((dot) => (
            <button
              key={dot}
              onClick={() => setActiveSlide(dot)}
              className={`h-1 rounded-full transition-all duration-300 ${
                activeSlide === dot
                  ? "w-16 bg-orange-500"
                  : "w-8 bg-white bg-opacity-50"
              }`}
              aria-label={`Go to slide ${dot + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}