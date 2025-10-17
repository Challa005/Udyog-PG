import { useState } from 'react';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';

export default function PricingPage() {
  const [walletsExpanded, setWalletsExpanded] = useState(true);
  const [cardsExpanded, setCardsExpanded] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <p className="text-[#5D5EAE] font-semibold mb-2 "
          style={{ fontSize: "20px", lineHeight: 1.1 }}>PRICING -</p>
          <h1 className="text-5xl font-bold text-indigo-900 mb-8 mt-10"
          style={{ fontSize: "40px", lineHeight: 1.1 }}>
            Simple Pricing, No Hidden Charges
          </h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-10">
          {/* Left Column - Pricing Tables */}
          <div className="lg:col-span-2 space-y-4">
            {/* Standard Plan Header */}
            <div className="bg-white rounded-lg shadow-sm p-6 flex justify-between items-center">
              <div>
                <p className="text-indigo-600 font-semibold text-sm mb-1">STANDARD</p>
                <h2 className="text-xl font-bold text-gray-900">Pay as you go - for startups</h2>
              </div>
              <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-md transition-colors">
                Create Account &gt;
              </button>
            </div>

            {/* Wallets/Connected BaaS Section */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <button
                onClick={() => setWalletsExpanded(!walletsExpanded)}
                className="w-full flex justify-between items-center p-6 hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-bold text-gray-900">Wallets/ Connected BaaS</h3>
                {walletsExpanded ? (
                  <ChevronUp className="w-5 h-5 text-gray-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                )}
              </button>

              {walletsExpanded && (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-y border-gray-200">
                      <tr>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                          Transaction Amount
                        </th>
                        <th className="px-6 py-3 text-center text-sm font-semibold text-gray-900">
                          NEFT
                        </th>
                        <th className="px-6 py-3 text-center text-sm font-semibold text-gray-900">
                          RTGS
                        </th>
                        <th className="px-6 py-3 text-center text-sm font-semibold text-gray-900">
                          IMPS/UPI/<br />Amazon Pay
                        </th>
                        <th className="px-6 py-3 text-center text-sm font-semibold text-gray-900">
                          Pay to Phone/<br />Pay to Phone + CC
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm text-gray-900">Up to <span className="font-semibold">1,000</span></td>
                        <td className="px-6 py-4 text-sm text-center font-semibold text-gray-900">3.00</td>
                        <td className="px-6 py-4 text-sm text-center font-semibold text-gray-900">3.00</td>
                        <td className="px-6 py-4 text-sm text-center font-semibold text-gray-900">3.00</td>
                        <td className="px-6 py-4 text-sm text-center font-semibold text-gray-900">3.00</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm text-gray-900"><span className="font-semibold">1,000</span> to <span className="font-semibold">25,000</span></td>
                        <td className="px-6 py-4 text-sm text-center font-semibold text-gray-900">5.00</td>
                        <td className="px-6 py-4 text-sm text-center font-semibold text-gray-900">5.00</td>
                        <td className="px-6 py-4 text-sm text-center font-semibold text-gray-900">5.00</td>
                        <td className="px-6 py-4 text-sm text-center font-semibold text-gray-900">5.00</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm text-gray-900">Above <span className="font-semibold">25,000</span></td>
                        <td className="px-6 py-4 text-sm text-center font-semibold text-gray-900">8.00</td>
                        <td className="px-6 py-4 text-sm text-center font-semibold text-gray-900">8.00</td>
                        <td className="px-6 py-4 text-sm text-center font-semibold text-gray-900">8.00</td>
                        <td className="px-6 py-4 text-sm text-center font-semibold text-gray-900">8.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* Cards Section */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <button
                onClick={() => setCardsExpanded(!cardsExpanded)}
                className="w-full flex justify-between items-center p-6 hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-bold text-gray-900">Cards</h3>
                {cardsExpanded ? (
                  <ChevronUp className="w-5 h-5 text-gray-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                )}
              </button>

              {cardsExpanded && (
                <div className="p-6 pt-0">
                  <p className="text-gray-600">Card pricing details would go here...</p>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Enterprise Card */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-lg shadow-lg p-8 text-white sticky top-8">
              <p className="text-indigo-300 text-sm font-semibold mb-3">ENTERPRISES</p>
              <h2 className="text-2xl font-bold mb-8">
                Optimized payments infrastructure that helps you scale
              </h2>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-indigo-300 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Dedicated account manager</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-indigo-300 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Volume discounts</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-indigo-300 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Migration support</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-indigo-300 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Dedicated support</span>
                </div>
              </div>

              <p className="text-sm text-indigo-200 mb-6">
                Get in touch with our sales team to explore the right product(s) for your payment needs and get custom pricing.
              </p>

              <button className="w-full bg-transparent border-2 border-white hover:bg-white hover:text-indigo-900 text-white font-semibold py-3 px-6 rounded-md transition-all">
                Contact Sales &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}