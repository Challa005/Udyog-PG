import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is a Payment Gateway?",
      answer: "A payment gateway is a technology platform that allows online businesses to securely collect digital payments from their customers. When a customer completes a checkout on a website or app, the payment gateway captures their payment information and processes it for authorization and completion."
    },
    {
      question: "What types of platforms and integrations are supported by Udyogpay Payment Gateway?",
      answer: "Udyogpay Payment Gateway supports a wide range of platforms including e-commerce websites, mobile applications, and various CMS platforms. We offer easy integrations with popular platforms like WooCommerce, Shopify, Magento, and custom solutions through our comprehensive API documentation."
    },
    {
      question: "What payment modes are supported by Udyogpay",
      answer: "Udyogpay supports multiple payment modes including credit cards, debit cards, net banking, UPI, digital wallets, and EMI options. We continuously add new payment methods to ensure maximum convenience for your customers."
    },
    {
      question: "What types of businesses can use Udyogpay Payment Gateway?",
      answer: "Udyogpay Payment Gateway caters to businesses of all sizes and industries including e-commerce stores, SaaS companies, educational institutions, healthcare providers, travel agencies, and more. Whether you're a startup or an enterprise, our scalable solution adapts to your needs."
    },
    {
      question: "How long does it take to set up a Udyogpay merchant account?",
      answer: "Setting up a Udyogpay merchant account is quick and straightforward. Once you submit your business documentation, the verification process typically takes 24-48 hours. After approval, you can integrate our payment gateway and start accepting payments immediately."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-12"
        style={{ fontSize: "35px", lineHeight: 1.1 }}>
          Frequently Asked Questions
        </h1>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-md"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-8 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <span className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-gray-600" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-600" />
                  )}
                </span>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="px-8 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition-colors duration-200">
            Sign up Now &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
