import React, { useState } from 'react';
import { Code, Zap, Bell, CheckCircle } from 'lucide-react';

export default function PayoutApiLanding() {
  const [activeTab, setActiveTab] = useState('Node');

  const codeExamples = {
    Node: `const cfSdk = require('@cashfree-sdk');
const {Payouts} = cfSdk.Payouts;
const {Response} = cfSdk.TransferRequestBatchTransfer(
  "batchTransferId": "Test_Bank_Account_00"
);
BatchFormat: BANK_ACCOUNT,
deleteBene: {},
  -batch: [
    {[transferId: VENDOR_BD023_PAY_1MAPRIL
    -amount: 1023.0,
    -phone: 9876543210,
    -bankAccount: 026291800001191,
    -ifsc: "HDFC0001017",
    -email: "john.doe@cashfree.com",
    -name: "John"}
  ]`,
    JSJava: `import com.cashfree.lib.Payouts;
import com.cashfree.lib.TransferRequest;

TransferRequest request = new TransferRequest();
request.setBatchTransferId("Test_Bank_Account_00");
request.setBatchFormat("BANK_ACCOUNT");
request.addTransfer(
  "VENDOR_BD023_PAY_1MAPRIL",
  1023.0,
  "9876543210",
  "026291800001191",
  "HDFC0001017",
  "john.doe@cashfree.com",
  "John"
);`,
    Python: `from cashfree_sdk import Payouts

payouts = Payouts()
batch_transfer = payouts.create_batch({
  "batchTransferId": "Test_Bank_Account_00",
  "batchFormat": "BANK_ACCOUNT",
  "deleteBene": {},
  "batch": [{
    "transferId": "VENDOR_BD023_PAY_1MAPRIL",
    "amount": 1023.0,
    "phone": "9876543210",
    "bankAccount": "026291800001191",
    "ifsc": "HDFC0001017",
    "email": "john.doe@cashfree.com",
    "name": "John"
  }]
})`,
    PHP: `<?php
require_once('cashfree-sdk/autoload.php');

use Cashfree\\Payouts;

$payouts = new Payouts();
$batchTransfer = $payouts->createBatch([
  'batchTransferId' => 'Test_Bank_Account_00',
  'batchFormat' => 'BANK_ACCOUNT',
  'batch' => [[
    'transferId' => 'VENDOR_BD023_PAY_1MAPRIL',
    'amount' => 1023.0,
    'phone' => '9876543210',
    'bankAccount' => '026291800001191',
    'ifsc' => 'HDFC0001017',
    'email' => 'john.doe@cashfree.com',
    'name' => 'John'
  ]]
]);`,
    cURL: `curl -X POST https://api.cashfree.com/payouts \\
  -H "Content-Type: application/json" \\
  -H "X-Client-Id: YOUR_CLIENT_ID" \\
  -H "X-Client-Secret: YOUR_CLIENT_SECRET" \\
  -d '{
    "batchTransferId": "Test_Bank_Account_00",
    "batchFormat": "BANK_ACCOUNT",
    "batch": [{
      "transferId": "VENDOR_BD023_PAY_1MAPRIL",
      "amount": 1023.0,
      "phone": "9876543210",
      "bankAccount": "026291800001191",
      "ifsc": "HDFC0001017"
    }]
  }'`
  };

  const tabs = ['Node', 'JSJava', 'Python', 'PHP', 'cURL'];

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Launch in minutes",
      description: "with our plug-ins and SDKs"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Try integrations",
      description: "with sample kits and Test API credentials, available in multiple languages"
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Stay updated",
      description: "on every transfer with real-time webhook notifications"
    }
  ];

  const noCodeFeatures = [
    "Make individual payouts using Quick Transfer on Dashboard by entering beneficiary account details.",
    "Make bulk payouts easily and quickly from the Dashboard by uploading excel sheets with beneficiary account details and make payouts in seconds."
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800">
      {/* Header Section */}
      <div className="px-6 py-12 max-w-6xl mx-auto">
        <div className="text-white mb-8">
          <p className="text-purple-200 text-sm mb-4 font-medium mt-10">Smart. Simple. Engineered for You</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
          style={{ fontSize: "35px", lineHeight: 1.1 }}>
            Developer-friendly Payouts API with seamless integration
          </h1>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-yellow-300 mb-3">{feature.icon}</div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-purple-100 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button className="bg-yellow-500 hover:bg-yellow-400 text-purple-900 font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 mb-12">
          View api documentation →
        </button>

        {/* Code Examples Section */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 shadow-2xl">
          {/* Language Tabs */}
          <div className="flex flex-wrap gap-3 mb-6">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-purple-500 text-white shadow-lg'
                    : 'bg-white/10 text-purple-100 hover:bg-white/20'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Code Display */}
          <div className="bg-gray-900 rounded-xl p-6 overflow-x-auto">
            <pre className="text-sm text-green-400 font-mono whitespace-pre-wrap">
              {codeExamples[activeTab]}
            </pre>
          </div>
        </div>

        {/* No Code Solutions */}
        <div className="mt-12 bg-white/5 backdrop-blur-md rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">No code solutions</h2>
          <div className="space-y-4">
            {noCodeFeatures.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                <p className="text-purple-100 text-sm leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}