
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is a Payment Gateway?",
      answer:
        "A payment gateway is a technology platform that allows online businesses to securely collect digital payments from their customers. When a customer completes a checkout on a website or app, the payment gateway captures their payment information and processes it for authorization and completion.",
    },
    {
      question:
        "What types of platforms and integrations are supported by Udyogpay Payment Gateway?",
      answer:
        "Udyogpay Payment Gateway supports various e-commerce platforms including WooCommerce, Shopify, Magento, and custom websites. We provide easy-to-integrate APIs, plugins, and SDKs for seamless integration with your existing infrastructure.",
    },
    {
      question: "What payment modes are supported by Udyogpay",
      answer:
        "Udyogpay supports multiple payment modes including credit cards, debit cards, net banking, UPI, digital wallets, and buy now pay later options. We ensure comprehensive payment coverage for your customers' convenience.",
    },
    {
      question: "What types of businesses can use Udyogpay Payment Gateway?",
      answer:
        "Udyogpay Payment Gateway is suitable for all types of businesses including e-commerce stores, subscription services, marketplaces, educational institutions, healthcare providers, and professional services. From startups to enterprises, we cater to businesses of all sizes.",
    },
    {
      question: "How long does it take to set up a Udyogpay merchant account?",
      answer:
        "Setting up a Udyogpay merchant account typically takes 24-48 hours after document verification. Once approved, you can integrate our payment gateway and start accepting payments immediately. Our support team is available to assist you throughout the setup process.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Section Heading */}
        <h1
          className="text-4xl md:text-5xl font-bold text-gray-900 text-center"
          style={{ fontSize: "35px", lineHeight: 1.1 }}
        >
          Frequently Asked Questions
        </h1>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg md:text-xl font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-gray-600 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-600 flex-shrink-0" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition-all duration-200">
            Sign Up Now →
          </button>
        </div>
      </div>
    </div>
  );
}