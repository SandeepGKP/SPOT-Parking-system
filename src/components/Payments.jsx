import React from "react";

const Payments = () => {
  return (
    <div className="p-6 w-full bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold text-blue-700 mb-6">💳 Parking Payments</h1>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Payment Record Card */}
        <div className="bg-gray-100 p-4 rounded-lg shadow-sm hover:shadow-md transition">
          <h2 className="text-lg font-semibold text-gray-800 mb-1">Invoice #SP-001</h2>
          <p className="text-gray-600">Car: Renault Megane RS</p>
          <p className="text-gray-600">Amount: $2250</p>
          <p className="text-gray-500 text-sm">Paid on: May 5, 2025</p>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg shadow-sm hover:shadow-md transition">
          <h2 className="text-lg font-semibold text-gray-800 mb-1">Invoice #SP-002</h2>
          <p className="text-gray-600">Car: Honda Civic</p>
          <p className="text-gray-600">Amount: $1800</p>
          <p className="text-gray-500 text-sm">Paid on: May 3, 2025</p>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg shadow-sm hover:shadow-md transition">
          <h2 className="text-lg font-semibold text-gray-800 mb-1">Invoice #SP-003</h2>
          <p className="text-gray-600">Car: Toyota Corolla</p>
          <p className="text-gray-600">Amount: $1200</p>
          <p className="text-gray-500 text-sm">Paid on: April 29, 2025</p>
        </div>
      </div>
    </div>
  );
};

export default Payments;
