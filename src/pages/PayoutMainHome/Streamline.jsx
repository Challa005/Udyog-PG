import React from "react";
import { Zap } from "lucide-react";

export default function PayoutsTallyLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20">
      {/* Hero Section */}
      <main className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-left space-y-8">

          {/* Hero Badge */}
          <div
            className="inline-block px-4 py-2 text-indigo-700 rounded-full text-lg md:text-xl font-semibold"
            style={{ fontSize: "20px", lineHeight: 1.2 }}
          >
            <strong>The all-new Payouts Tally plugin is here</strong>
          </div>

          {/* Heading */}
          <h1
            className="text-3xl md:text-5xl font-bold text-indigo-900 leading-tight"
            style={{fontSize: "48px", lineHeight: 1.2 }}
          >
            <strong>Streamline your payouts like never before</strong>
          </h1>

          {/* Subheading */}
          <p className="text-base md:text-xl text-gray-700 leading-relaxed">
            <strong>Simplify invoice management</strong> and achieve{" "}
            <strong>instant reconciliation</strong> within Tally ERP
          </p>

          {/* Bullet Points */}
          <ul className="list-disc list-inside text-gray-800 text-base md:text-lg space-y-3">
            <li>
              <strong>Enable custom ERP approvals</strong> tailored to your workflow
            </li>
            <li>
              <strong>Track payments in real-time</strong> within Tally and stay updated
            </li>
            <li>
              <strong>Transfer funds instantly</strong> — even to 1,000+ beneficiaries in one go
            </li>
            <li>
              <strong>Instant reconciliation</strong> of invoices and payouts within Tally
            </li>
            <li>
              <strong>Full audit trail</strong> and transparency for all transactions
            </li>
          </ul>

          {/* CTA Button */}
          <div>
            <button className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full text-base md:text-lg font-bold hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Add Payouts plugin to your Tally ERP Now!
              <Zap className="w-4 h-4 animate-pulse" />
            </button>
          </div>

        </div>
      </main>
    </div>
  );
}
