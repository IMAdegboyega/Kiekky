'use client'

import React, { useState } from 'react';
import { Plus, Send } from 'lucide-react';

const Wallet = () => {
  const [activeTab, setActiveTab] = useState('Tokens');
  
  const tabs = ['Tokens', 'Subscription', 'KYC', 'Request Payout', 'Referrals', 'Voucher'];

  return (
    <div className="max-w-4xl mx-auto bg-white min-h-screen">
      {/* Navigation Tabs */}
      <div className="bg-gray-50">
        <div className="flex space-x-0 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`w-full py-3 px-1 text-sm font-medium whitespace-nowrap border-0 transition-colors cursor-pointer ${
                activeTab === tab
                  ? 'text-blue-600 bg-white'
                  : 'text-gray-500 border-transparent hover:text-gray-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        {/* Token Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {/* Token Balance Card */}
          <div className="bg-gray-800 text-white p-6 rounded-xl relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <div className="text-3xl font-bold mb-1">5000</div>
              <div className="text-gray-300 text-sm flex items-center">
                Token Balance 
                <div className="w-3 h-3 bg-white rounded-sm ml-2 opacity-60"></div>
              </div>
            </div>
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900"></div>
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white opacity-5 rounded-full"></div>
          </div>

          {/* Top Up Token Card */}
          <div className="bg-white border-2 border-dashed border-gray-300 p-6 rounded-xl flex flex-col items-center justify-center hover:border-blue-400 transition-colors cursor-pointer">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
              <Plus className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-gray-700 font-medium">Top Up Token</span>
          </div>

          {/* Transfer Token Card */}
          <div className="bg-white border-2 border-dashed border-gray-300 p-6 rounded-xl flex flex-col items-center justify-center hover:border-purple-400 transition-colors cursor-pointer">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
              <Send className="w-6 h-6 text-purple-600" />
            </div>
            <span className="text-gray-700 font-medium">Transfer Token</span>
          </div>
        </div>

        {/* My Transactions Section */}
        <div className="bg-white rounded-xl p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">My Transactions</h2>
          
          {/* Empty State */}
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-gray-300 rounded-full border-dashed"></div>
            </div>
            <p className="text-gray-500">You have not made any transaction yet</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;