import React, { useState } from "react";
import {
  GraduationCap,
  Users,
  Calendar,
  FileText,
  CreditCard,
  MessageSquare,
  Check,
} from "lucide-react";
import UdyogClass from "../../assets/UdyogClass.svg";

export default function UClassLanding() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Admission & Fee Management",
      description:
        "Streamline student admissions and automate fee collection with integrated payment gateways.",
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Attendance & Timetable Automation",
      description:
        "Digital attendance tracking and smart timetable generation for efficient schedule management.",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Parent-Teacher Communication",
      description:
        "Real-time messaging and updates to keep parents informed about their child's progress.",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Online Exams & Report Cards",
      description:
        "Conduct secure online assessments and generate digital report cards instantly.",
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Udyog Pay Integration for Fees",
      description:
        "Seamless payment processing with Udyog Pay for hassle-free fee transactions.",
    },
  ];

  

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="flex justify-center mb-10 mt-10">
        <img src={UdyogClass} alt="Udyog Class" className="w-80 h-25" />
      </div>

      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto px-6 py-10">
        <h1
          className="text-5xl md:text-6xl font-bold mb-6 text-[#5D5EAE] -mt-10"
          style={{ fontSize: "35px", lineHeight: 1.1 }}
        >
          U Class Smart School Management System
        </h1>
        <p className="text-xl text-gray-600 mb-4">
          A complete digital platform for schools to manage academics, finance, and communication
        </p>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setActiveFeature(idx)}
                className={`p-6 rounded-xl shadow-md border transition-all duration-300 cursor-pointer bg-white/90 ${
                  activeFeature === idx
                    ? "border-indigo-500 shadow-lg transform scale-105"
                    : "border-gray-200 hover:border-indigo-300 hover:shadow-lg"
                }`}
              >
                {/* Icon + Title side by side */}
                <div className="flex items-center space-x-3 mb-4">
                  <div
                    className={`text-2xl transition-all duration-300 ${
                      activeFeature === idx ? "text-indigo-700" : "text-indigo-600"
                    }`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-left">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    
    </div>
  );
}
