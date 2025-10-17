import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import DashboardImage from "../../assets/dashboard.svg"; 

export default function Dashboard() {
  const [expandedSections, setExpandedSections] = useState({
    reports: true,
    settlement: false,
    disputes: false,
    track: false,
    analytics: false,
    users: false,
    security: false,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1
            className="flex justify-center text-5xl font-bold text-orange-600 mb-6 leading-tight mt-10"
            style={{ fontSize: "45px", lineHeight: 1.1 }}
          >
            All-in-one dashboard
          </h1>

          <div className="flex gap-4 justify-center mt-15">
            <button className="bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors shadow-md">
              View Developer Document →
            </button>
            <button className="bg-white text-orange-500 border-2 border-orange-500 px-6 py-2 rounded-lg font-semibold hover:bg-orange-50 transition-colors shadow-md">
              View Developer Document →
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-20">
          <div className="space-y-4">
            {[
              "reports",
              "settlement",
              "disputes",
              "track",
              "analytics",
              "users",
              "security",
            ].map((section) => (
              <div key={section} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => toggleSection(section)}
                  className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors"
                >
                  <h2 className="text-xl font-bold text-gray-800 capitalize">
                    {section.replace(/([A-Z])/g, " $1").trim()}
                  </h2>
                  {expandedSections[section] ? <ChevronUp /> : <ChevronDown />}
                </button>
                {expandedSections[section] && (
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {section === "reports" &&
                      "Cashfree's dashboard gives you complete visibility into every transaction — from order creation and payment status to refunds. Create and automate custom reports to streamline accounting and simplify your financial operations."}
                    {section === "settlement" &&
                      "Automatically reconcile all your settlements with detailed transaction breakdowns. Track settlements, refunds, and fees in real-time with comprehensive reports."}
                    {section === "disputes" &&
                      "Handle chargebacks and disputes efficiently with automated workflows. Track dispute status, submit evidence, and manage resolutions all in one place."}
                    {section === "track" &&
                      "Access your dashboard on any device, anywhere. Monitor your business metrics, transactions, and settlements on the go with our mobile-responsive interface."}
                    {section === "analytics" &&
                      "Analyze your payment trends and get insights on top-performing channels, payment success rates, and revenue trends."}
                    {section === "users" &&
                      "Manage your users, roles, and permissions. Track user activity and control access to sensitive financial data."}
                    {section === "security" &&
                      "Monitor security alerts, detect unusual activities, and ensure compliance with data protection standards to safeguard your business."}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="w-full flex">
            <img
              src={DashboardImage} // ✅ updated here too
              alt="Dashboard Preview"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
