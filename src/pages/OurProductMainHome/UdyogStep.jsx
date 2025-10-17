import React, { useState } from 'react';
import { CheckCircle, Shield, Users, Code, Bell } from 'lucide-react';
import UdyogStep from "../../assets/UdyogStep.svg"

export default function UdyogPayStep() {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const features = [
  {
    id: 1,
    icon: <CheckCircle className="w-8 h-8" />,
    title: "Digital KYC & Document Verification",
    description: "Streamline identity verification with automated document scanning and validation"
  },
  {
    id: 2,
    icon: <Users className="w-8 h-8" />,
    title: "Partner/Merchant Onboarding",
    description: "Seamless onboarding experience for partners and merchants with intelligent workflows"
  },
  {
    id: 3,
    icon: <Shield className="w-8 h-8" />,
    title: "Risk & Compliance Automation",
    description: "Automated risk assessment and compliance checks to ensure regulatory adherence"
  },
  {
    id: 4,
    icon: <Code className="w-8 h-8" />,
    title: "Fintech-Ready APIs",
    description: "Robust API infrastructure for easy integration with your existing systems"
  },
  {
    id: 5,
    icon: <Bell className="w-8 h-8" />,
    title: "Real-time Alerts & Status Updates",
    description: "Instant notifications and status tracking throughout the onboarding process"
  },
  {
    id: 6,  // New feature added
    icon: <CheckCircle className="w-8 h-8" />,
    title: "Analytics & Reporting",
    description: "Gain deep insights into onboarding metrics with advanced analytics dashboards"
  }
];


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Logo */}
      <div className="flex justify-center mb-12 mt-10">
        <img src={UdyogStep} alt="Udyog CMS" className="w-96 h-28 object-contain" />
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 text-center -mt-25">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-orange-600 mb-6"
        style={{ fontSize: "35px", lineHeight: 1.1 }}>
          Udyog Pay Step Smart Onboarding Suite for Fintechs & Banks
        </h1>
        <p className="text-xl text-black-700 font-bold max-w-3xl mx-auto"
        style={{ fontSize: "20px", lineHeight: 1.1 }}>
          Automate onboarding and compliance for partners, merchants, or customers—all through one intelligent dashboard.
        </p>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 -mt-15">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 cursor-pointer"
              onMouseEnter={() => setHoveredFeature(feature.id)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              {/* Icon + Title Side by Side */}
              <div className="flex items-center space-x-3 mb-4">
                <div className={`text-orange-500 ${hoveredFeature === feature.id ? 'scale-110' : 'scale-100'} transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
              </div>

              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className=" flex justify-center max-w-7xl mx-auto px-6 py-16 -mt-10">
        
          
          <button className="bg-orange-600 text-white font-bold py-4 px-10 rounded-lg text-lg shadow-md hover:bg-orange-700 transition transform hover:scale-105">
            Get Started Today
          </button>
        
      </section>

     
    </div>
  );
}
