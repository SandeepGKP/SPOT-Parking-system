import React from "react";

const Booking = () => {
  return (
    <div className="p-6 w-full bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold text-blue-700 mb-6">📅 Booking Management</h1>

      {/* Booking Form */}
      <div className="bg-gray-100 p-4 rounded-lg mb-6 shadow-sm">
        <h2 className="text-lg font-semibold mb-3 text-gray-700">Add New Booking</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 border rounded w-full"
          />
          <input
            type="text"
            placeholder="Vehicle Number"
            className="p-2 border rounded w-full"
          />
          <input
            type="date"
            className="p-2 border rounded w-full"
          />
          <button className="md:col-span-3 mt-2 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
            Confirm Booking
          </button>
        </div>
      </div>

      {/* Booking List */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold mb-3 text-gray-700">Current Bookings</h2>
        <table className="w-full text-sm text-left text-gray-600">
          <thead className="text-xs uppercase bg-gray-200 text-gray-700">
            <tr>
              <th scope="col" className="px-4 py-2">Name</th>
              <th scope="col" className="px-4 py-2">Vehicle No.</th>
              <th scope="col" className="px-4 py-2">Date</th>
              <th scope="col" className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b hover:bg-gray-50">
              <td className="px-4 py-2">John Doe</td>
              <td className="px-4 py-2">MH12 AB 1234</td>
              <td className="px-4 py-2">2025-05-10</td>
              <td className="px-4 py-2 text-green-600 font-medium">Confirmed</td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-50">
              <td className="px-4 py-2">Jane Smith</td>
              <td className="px-4 py-2">DL04 XY 5678</td>
              <td className="px-4 py-2">2025-05-12</td>
              <td className="px-4 py-2 text-yellow-600 font-medium">Pending</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Booking;
