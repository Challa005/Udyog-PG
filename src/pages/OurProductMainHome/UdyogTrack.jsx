import React, { useState } from "react";
import {
  TrendingUp,
  DollarSign,
  FileText,
  PieChart,
  ArrowRight,
  CheckCircle,
  BarChart3,
} from "lucide-react";
import UdyogTrack from "../../assets/UdyogTrack.svg";

export default function UdyogTrackLanding() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Real-time Expense Tracking",
      description:
        "Monitor every expense as it happens with automated tracking and categorization.",
    },
    {
      icon: <PieChart className="w-6 h-6" />,
      title: "Budget & Report Automation",
      description:
        "Generate comprehensive financial reports and manage budgets effortlessly.",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Invoice & Vendor Management",
      description:
        "Streamline invoice processing and maintain vendor relationships efficiently.",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Tax & GST Reports",
      description:
        "Seamless Udyog Pay integration with automated tax calculations and compliance.",
    },
  ];

  const benefits = [
    "Automated expense categorization",
    "Real-time financial dashboards",
    "Multi-currency support",
    "Cloud-based secure storage",
    
  ];

  return (
    <div className="">
      {/* Header */}
      <header className="">
        <div className="flex justify-center mb-6">
          <img src={UdyogTrack} alt="Udyog Track" className="w-80 h-40" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto text-center px-6 py-10 -mt-15">
        <h1
          className="text-5xl md:text-6xl font-bold mb-6"
          style={{
            fontSize: "45px",
            lineHeight: 1.1,
            color: "#5D5EAE",
          }}
        >
          Udyog Track Smart Finance & Expense Management Platform
        </h1>

        <p
          className="text-xl text-orange-600 mb-6 max-w-3xl mx-auto"
          style={{ fontSize: "25px", lineHeight: 1.3 }}
        >
          Simplify your company's finances with automated tracking, analytics,
          and reporting.
        </p>

        <p
          className="text-lg text-gray-700 font-semibold mb-12 max-w-2xl mx-auto"
          style={{ fontSize: "20px", lineHeight: 1.4 }}
        >
          Udyog Track helps you make better financial decisions with real-time
          visibility.
        </p>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 -mt-15">
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
  {features.map((feature, index) => (
    <div
      key={index}
      onMouseEnter={() => setActiveFeature(index)}
      className={`rounded-2xl p-6 shadow-lg border transition-all duration-300 cursor-pointer ${
        activeFeature === index
          ? "bg-orange-50 border-orange-400"
          : "bg-white border-gray-200 hover:shadow-xl"
      }`}
    >
      {/* Icon + Title side by side */}
      <div className="flex items-center space-x-4 mb-4">
        <div
          className={`text-3xl transition-colors duration-300 ${
            activeFeature === index ? "text-orange-600" : "text-blue-600"
          }`}
        >
          {feature.icon}
        </div>
        <h3
          className={`text-lg font-semibold transition-colors duration-300 ${
            activeFeature === index ? "text-orange-600" : "text-gray-800"
          }`}
        >
          {feature.title}
        </h3>
      </div>

      <p className="text-gray-600 text-sm text-left">{feature.description}</p>
    </div>
  ))}
</div>




        <div className="flex justify-center mt-16">
          <button className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition transform hover:scale-105 shadow-lg flex items-center space-x-2">
            <span>Explore Udyog Track</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Why Choose{" "}
              <span className="text-orange-500">Udyog Track?</span>
            </h2>
            <p className="text-gray-600 mb-8">
              Transform your financial management with our comprehensive
              platform designed for modern businesses.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 bg-gray-50 border border-gray-200 rounded-lg p-3 hover:bg-gray-100 transition"
                >
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Call to Action Card */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 text-center">
            <DollarSign className="w-12 h-12 mb-4 text-orange-500 mx-auto" />
            <h3 className="text-2xl font-bold mb-2 text-gray-800">
              Start Saving Today
            </h3>
            <p className="mb-6 text-gray-600">
              Join thousands of businesses that trust Udyog Track for their
              financial management needs.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                <div className="text-3xl font-bold text-blue-700">10K+</div>
                <div className="text-sm text-gray-600">Active Users</div>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                <div className="text-3xl font-bold text-blue-700">99.9%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
            </div>

            <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition w-full">
              Request Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
