import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import ParkingStatus from "./components/ParkingStatus";
import HeatMapView from "./components/HeatMapView";
import HistoryChart from "./components/HistoryChart";
import Booking from "./components/Bookings";
import Services from "./components/Services";
import Payments from "./components/Payments";

const App = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex h-screen font-sans">
      {/* Sidebar Toggle Button */}
      <button
        className="absolute top-4 left-4 z-50 text-2xl text-gray-700 focus:outline-none"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        ☰
      </button>

      {/* Sidebar */}
      {sidebarOpen && (
        <aside className="w-60 bg-cyan-300 border-r p-4 shadow py-15">
          <nav className="space-y-4">
            <button onClick={() => navigate("/")} className="block text-left text-gray-700 hover:text-blue-600">Dashboard</button>
            <button onClick={() => navigate("/booking")} className="block text-left text-gray-700 hover:text-blue-600">Booking</button>
            <button onClick={() => navigate("/services")} className="block text-left text-gray-700 hover:text-blue-600">Services</button>
            <button onClick={() => navigate("/payments")} className="block text-left text-gray-700 hover:text-blue-600">Payments</button>
          </nav>
        </aside>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-gray-50 relative">
        {/* Header: Title */}
        <div className="flex items-center justify-center p-4 bg-amber-200 border-b shadow">
          <h2 className="text-2xl font-bold text-blue-600">🚗 SPOT Parking System</h2>
        </div>

        {/* Search Bar */}
        {/* <header className="p-4 bg-white border-b shadow-sm">
          <input
            type="text"
            placeholder="Search registration number or booking name"
            className="w-full p-2 border rounded"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </header> */}

        {/* Route Content */}
        <main className="flex flex-1 overflow-hidden">
          <Routes>
            <Route path="/" element={
              <section className="flex-1 p-4 overflow-auto">
                <h1 className="text-xl font-semibold mb-4">Parking Space Overview</h1>
                <div className="bg-cyan-200 p-4 rounded shadow">
                  <ParkingStatus />
                  <HeatMapView />
                  <HistoryChart />
                </div>
              </section>
            } />
            <Route path="/booking" element={<Booking />} />
            <Route path="/services" element={<Services />} />
            <Route path="/payments" element={<Payments />} />
          </Routes>

          {/* Detail Panel */}
          <aside className="w-80 border-l bg-cyan-200 p-4 shadow">
            <h2 className="text-lg font-semibold mb-2">Parking Space - #A321</h2>
            <img
              src="https://images.unsplash.com/photo-1656199133291-8bd65cc1369f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Car"
              className="w-full h-36 object-cover rounded mb-4"
            />
            <div className="space-y-2 text-sm">
              <div><strong>Car:</strong> Renault Megane RS</div>
              <div><strong>Plate:</strong> WJG 814</div>
              <div><strong>Days:</strong> 7 Days</div>
              <div><strong>Payable:</strong> $2,250</div>
              <div><strong>VIN:</strong> WHNLK-315632532</div>
              <div><strong>Year:</strong> 2009</div>
              <div><strong>Type:</strong> Sedan</div>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold mb-2">Services</h3>
              <ul className="text-sm space-y-1">
                <li>🧼 Interior Cleaning - Mon, 9:00 AM</li>
                <li>🚿 Car Wash - Mon, 11:30 PM</li>
                <li>♻️ ECO Service - Sun, 12:00 AM</li>
              </ul>
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
};

export default App;
