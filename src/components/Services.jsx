import React from "react";

const Services = () => {
  return (
    <div className="p-6 w-full bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold text-blue-700 mb-6">🛠️ Services</h1>

      {/* Services List */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Service Card */}
        <div className="bg-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition">
          <h2 className="text-lg font-semibold mb-2 text-gray-800">🧼 Interior Cleaning</h2>
          <p className="text-gray-600 mb-2">Deep cleaning of seats, dashboard, and carpets.</p>
          <p className="text-sm text-gray-500">Available: Mon - Fri, 9:00 AM - 5:00 PM</p>
        </div>

        <div className="bg-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition">
          <h2 className="text-lg font-semibold mb-2 text-gray-800">🚿 Exterior Wash</h2>
          <p className="text-gray-600 mb-2">Full body wash with wax coating option.</p>
          <p className="text-sm text-gray-500">Available: Daily, 8:00 AM - 8:00 PM</p>
        </div>

        <div className="bg-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition">
          <h2 className="text-lg font-semibold mb-2 text-gray-800">🔧 General Servicing</h2>
          <p className="text-gray-600 mb-2">Routine checkup, oil change, tire inspection, etc.</p>
          <p className="text-sm text-gray-500">Available: Tue - Sat, 10:00 AM - 6:00 PM</p>
        </div>

        <div className="bg-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition">
          <h2 className="text-lg font-semibold mb-2 text-gray-800">♻️ Eco Service</h2>
          <p className="text-gray-600 mb-2">Eco-friendly waterless wash and engine cleanup.</p>
          <p className="text-sm text-gray-500">Available: Weekends only</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
