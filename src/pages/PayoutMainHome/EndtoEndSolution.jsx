import React from "react";
import { ArrowRight, Clock, Zap, CheckCircle } from "lucide-react";
import Poster1 from "../../assets/poster1.svg";
import Poster2 from "../../assets/poster2.svg";
import Poster3 from "../../assets/poster3.svg";

export default function PaymentLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex flex-col items-center">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center flex flex-col items-center">
        <h1
          className="text-5xl md:text-6xl font-bold text-[#5E5DAE] mb-6"
          style={{ fontSize: "45px", lineHeight: 1.1 }}
        >
          An end-to-end solution for seamless payments and disbursals
        </h1>

        <div className="flex flex-wrap justify-center gap-3 mb-10 mt-6">
          <div className="bg-white rounded-full shadow-md px-5 py-3 flex items-center gap-2 text-black-700 font-bold min-w-[200px]">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span>Unified Payout Account</span>
          </div>

          <div className="bg-white rounded-full shadow-md px-5 py-3 flex items-center gap-2 text-black-700 font-bold min-w-[200px]">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span>Effortless Vendor Payments</span>
          </div>

          <div className="bg-white rounded-full shadow-md px-5 py-3 flex items-center gap-2 text-black-700 font-bold min-w-[200px]">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span>Instant Vendor Verification</span>
          </div>

          <div className="bg-white rounded-full shadow-md px-5 py-3 flex items-center gap-2 text-black-700 font-bold min-w-[200px]">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span>Seamless Customer Refunds</span>
          </div>
        </div>

        <button className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2 mx-auto mt-6">
          Create Account
          <ArrowRight className="w-5 h-5" />
        </button>
      </section>

      {/* Features Section */}
{/* Features Section */}
<section className="container mx-auto px-4 py-12">
  <div className="flex flex-wrap justify-center gap-10">
    {/* Feature 1 */}
    <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition text-left w-full sm:w-[350px] md:w-[400px] lg:w-[420px] space-y-4">
      <div className="flex items-start gap-3">
        <Clock className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
        <h3 className="text-lg md:text-xl font-bold text-orange-900 leading-snug">
          Are delayed payouts affecting your customers?
        </h3>
      </div>

      <p className="text-black text-sm md:text-base font-bold leading-relaxed">
        Keep your operations running smoothly beyond banking hours and
        traditional delays.
      </p>

      <img
        src={Poster1}
        alt="Feature 1 Poster"
        className="w-full h-64 md:h-72 object-contain"
      />
    </div>

    {/* Feature 2 */}
    <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition text-left w-full sm:w-[350px] md:w-[400px] lg:w-[420px] space-y-4">
      <div className="flex items-start gap-3">
        <Zap className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
        <h3 className="text-lg md:text-xl font-bold text-orange-900 leading-snug">
          Struggling with time-consuming bulk payouts?
        </h3>
      </div>

      <p className="text-black text-sm md:text-base font-bold leading-relaxed">
        Simplify bulk payments by adding beneficiaries and uploading Excel files
        for real-time payouts.
      </p>

      <img
        src={Poster2}
        alt="Feature 2 Poster"
        className="w-full h-64 md:h-72 object-contain"
      />
    </div>

    {/* Feature 3 */}
    <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition text-left w-full sm:w-[350px] md:w-[400px] lg:w-[420px] space-y-4">
      <div className="flex items-start gap-3">
        <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
        <h3 className="text-lg md:text-xl font-bold text-orange-900 leading-snug">
          Flexible instant beneficiary payments
        </h3>
      </div>

      <p className="text-black text-sm md:text-base font-bold leading-relaxed">
        Gain full control over payouts — choose fund sources and use
        Maker-Checker for added security.
      </p>

      <img
        src={Poster3}
        alt="Feature 3 Poster"
        className="w-full h-64 md:h-72 object-contain"
      />
    </div>
  </div>
</section>




    </div>
  );
}
