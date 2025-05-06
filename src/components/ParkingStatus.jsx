import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { onValue, ref } from "firebase/database";

const ParkingStatus = () => {
  const [distances, setDistances] = useState({});
  const threshold = 1; // Threshold for determining if a spot is occupied or available

  useEffect(() => {
    const distanceRef = ref(db, "parking");
    onValue(distanceRef, (snapshot) => {
      const data = snapshot.val();
      setDistances(data || {});
    });
  }, []);

  const uniqueKeys = Object.keys(distances);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Parking Spot Status</h2>
      <div className="grid grid-cols-2 gap-4 border border-dashed border-gray-400 p-1.5">
        {uniqueKeys.map((key) => (
          <div
            key={key}
            className={`p-4 rounded shadow text-center text-white border border-dashed border-black ${
              distances[key] == threshold ? "bg-red-500" : "bg-green-500"
            }`}
          >
            {key.toLowerCase()}: {distances[key] == threshold ? "Occupied" : "Available"}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParkingStatus;
