import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { onValue, ref } from "firebase/database";

const HeatMapView = () => {
  const [spots, setSpots] = useState({});

  useEffect(() => {
    const spotRef = ref(db, "parking");
    onValue(spotRef, (snapshot) => {
      const data = snapshot.val();
      setSpots(data || {});
    });
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Heatmap View</h2>
      <div className="grid grid-cols-3 gap-4 mb-0.5">
        {Object.entries(spots).map(([spot, value]) => (
          <div
            key={spot}
            style={{
              backgroundColor: value ==0 ? "#00FF00AA" : "#FF0000AA",
              height: "80px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontWeight: "bold",
              borderRadius: "8px",
            }}
          >
            {spot.toLowerCase()}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeatMapView;
