import React from "react";

export default function CTA() {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-6"
      style={{ backgroundColor: "rgb(93, 93, 174)" }}
    >
      <div className="max-w-5xl w-full">
        <div className="space-y-8">
          <h1
            className="font-bold text-white text-center mb-10 flex justify-start"
            style={{ fontSize: "45px", lineHeight: 1.1 }}
          >
            Ready to get started?
          </h1>

          <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-4xl">
            Accept payments, disburse funds, handle global transactions, and
            beyond. Sign up today or reach out to our experts for personalized
            solutions.
          </p>

          <ul className="space-y-4 mt-12">
            <li className="flex items-start text-white">
              <span className="text-2xl mr-3">•</span>
              <div className="text-lg md:text-xl">
                <span className="font-semibold">Easy Onboarding</span>
                <span className="text-white/90">
                  {" "}
                  – Get started quickly with minimal effort.
                </span>
              </div>
            </li>
            <li className="flex items-start text-white">
              <span className="text-2xl mr-3">•</span>
              <div className="text-lg md:text-xl">
                <span className="font-semibold">
                  Dedicated Account Manager
                </span>
                <span className="text-white/90">
                  {" "}
                  – Personal support at every step.
                </span>
              </div>
            </li>
            <li className="flex items-start text-white">
              <span className="text-2xl mr-3">•</span>
              <div className="text-lg md:text-xl">
                <span className="font-semibold">API Access</span>
                <span className="text-white/90">
                  {" "}
                  – Integrate and scale with ease
                </span>
              </div>
            </li>
          </ul>

          <div className="flex flex-wrap gap-4 pt-8 justify-end">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Create Account
            </button>
            <button className="bg-transparent hover:bg-white/10 text-white font-semibold text-lg px-8 py-4 rounded-lg border-2 border-orange-400 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}