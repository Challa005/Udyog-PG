import React from "react";
import Cashgramlogo from "../../assets/cashgramlogo.svg"; 
import Whatsapplogo from "../../assets/Whatsapplogo.svg";

export default function CashgramLanding() {
  return (
    <div className="min-h-screen bg-white px-6 md:px-12 py-16">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto text-left mt-10">
        <p
          className="text-indigo-600 font-medium mb-2"
          style={{ fontSize: "20px", lineHeight: 1.1 }}
        >
          Seamless Payout Link —
        </p>
        <h1
          className="text-5xl font-bold text-indigo-700 mb-4 mt-10"
          style={{ fontSize: "45px", lineHeight: 1.1 }}
        >
          Cashgram
        </h1>
        <p className="text-black text-base font-bold max-w-2xl mb-6 mt-10">
          Cashgram lets businesses generate payout links to instantly pay vendors, partners, or
          customers using only a mobile number or email.
        </p>
        <button className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-md hover:bg-orange-600 transition mt-10">
          Try Cashgram Today &gt;
        </button>
      </section>

      {/* Cashgram Logo */}
      <section className="mt-15 max-w-5xl mx-auto flex justify-start">
        <img
          src={Cashgramlogo}
          alt="Cashgram Flow"
          className="w-full max-w-7xl rounded-2xl shadow-xl"
        />
      </section>

      {/* Step Section */}
      <section className="mt-12 max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Step 1 */}
        <div>
          <h3 className="font-bold text-lg mb-2">1. Send</h3>
          <p className="text-black text-sm ">
            Create a Udyogpay link and notify via email, SMS or WhatsApp.
          </p>
        </div>

        {/* Step 2 */}
        <div>
          <h3 className="font-bold text-lg mb-2">2. Capture</h3>
          <p className="text-black text-sm ">
            Beneficiary enters their bank account, debit card, UPI, Paytm, or Amazon Pay details.
          </p>
        </div>

        {/* Step 3 */}
        <div>
          <h3 className="font-bold text-lg mb-2">3. Redeem</h3>
          <p className="text-black text-sm ">
            Beneficiary receives a payout in their preferred account.
          </p>
        </div>
      </section>

      {/* WhatsApp Integration Logo */}
      <section className="mt-16 max-w-5xl mx-auto flex justify-start">
        <img
          src={Whatsapplogo}
          alt="WhatsApp Integration"
          className="w-[380px] h-24 "
        />
      </section>
    </div>
  );
}
