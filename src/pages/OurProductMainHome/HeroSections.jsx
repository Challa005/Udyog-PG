import React from "react";
import { ArrowRight } from "lucide-react";

export default function HeroSections() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-20 py-24">
        <div className="text-center space-y-10">
          <h1
            className="text-5xl md:text-7xl font-bold text-[#5E5DAE] leading-tight"
            style={{ fontSize: "55px", lineHeight: 1.1 }}
          >
            Empowering Businesses, Institutions &{" "}
            <span className="block text-[#5E5DAE]">
              Communities with Smart Financial and Digital Solutions
            </span>
          </h1>

          <p
            className="text-xl md:text-2xl text-orange-500 max-w-5xl mx-auto font-bold"
            style={{ fontSize: "25px", lineHeight: 1.1 }}
          >
            At Udyog Group, we build next-generation fintech and management
            tools that help organizations grow faster, operate smarter, and
            manage money seamlessly.
          </p>

          <p
            className="text-lg text-black-600 max-w-4xl mx-auto font-bold "
            style={{ fontSize: "15px", lineHeight: 1.1 }}
          >
            Explore our powerful suite of products below
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <button className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3">
              Sign Up Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group border-2 border-orange-500 text-orange-600 px-10 py-4 rounded-xl font-semibold text-lg hover:bg-orange-50 transition-all duration-300 flex items-center gap-3">
              Contact Sales
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
