import React, { useEffect, useState, useRef } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";
import { getDatabase, ref, onValue } from "firebase/database";

const LiveChart = () => {
  const [history, setHistory] = useState([]);
  const [distances, setDistances] = useState({
    spot1: 0, spot2: 0, spot3: 0,
  });

  const lastStatus = useRef({});
  const [availability, setAvailability] = useState({});

  const getStatus = (dist) => (dist == 1 ? 1 : 0); // 1 = Occupied

  useEffect(() => {
    const db = getDatabase();
    const spots = ["spot1", "spot2", "spot3", "spot4", "spot5", "spot6"];
    const unsubscribers = [];

    spots.forEach((spot) => {
      const spotRef = ref(db, `parking/${spot}`);
      const unsub = onValue(spotRef, (snap) => {
        setDistances((prev) => ({
          ...prev,
          [spot]: snap.val()
        }));
      });
      unsubscribers.push(unsub);
    });

    return () => {
      unsubscribers.forEach((unsub) => unsub());
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentStatuses = {};
      const trends = {};
      const time = new Date().toLocaleTimeString();

      for (let spot in distances) {
        const status = getStatus(distances[spot]);
        const prev = lastStatus.current[spot] ?? status;
        currentStatuses[spot] = status;
        trends[spot] = status == prev ? "📉" : "📈";
        lastStatus.current[spot] = status;
      }

      const entry = { time };

      // Ensure every spot is included at each timestamp
      ["spot1", "spot2", "spot3"].forEach((spot) => {
        entry[spot] = currentStatuses[spot];
      });

      setHistory((prev) => [...prev.slice(-19), entry]);

      const availDisplay = {};
      for (let spot in currentStatuses) {
        availDisplay[spot] = {
          status: currentStatuses[spot] === 1 ? "Occupied" : "Available",
          trend: trends[spot],
        };
      }

      setAvailability(availDisplay);
    }, 1000); // update every 1 second

    return () => clearInterval(interval);
  }, [distances]);

  return (
    <div className="p-4 bg-amber-200 max-h-screen">
      <h2 className="text-xl font-bold mb-4">Live Parking Availability</h2>

      <h3 className="text-lg font-semibold mb-2">Last 20 Readings</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={history} margin={{ top: 5, right: 30, left: 60, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis
            domain={[0, 1]}
            ticks={[0, 1]}
            tickFormatter={(val) => (val === 1 ? "Occupied" : "Available")}
          />
          <Tooltip formatter={(v) => (v === 1 ? "Occupied" : "Available")} />
          <Legend />
          {["spot1", "spot2", "spot3"].map((spot, idx) => (
            <Line
              key={spot}
              type="monotone"
              dataKey={spot}
              stroke={["#8884d8", "#82ca9d", "#ffc658"][idx]}
              dot={false}
              isAnimationActive={false}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>

      {/* <div className="mt-4 grid grid-cols-2 gap-2">
        {Object.entries(availability).map(([spot, data]) => (
          <h4 key={spot} className="text-lg">
            {spot.toUpperCase()}: {data.status} {data.trend}
          </h4>
        ))}
      </div> */}
    </div>
  );
};

export default LiveChart;
