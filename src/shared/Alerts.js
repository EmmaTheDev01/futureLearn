import React, { useEffect, useState } from "react";
import axios from "axios";

const Alerts = () => {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAlerts = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/v1/announcement", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Use your auth token if required
          },
        });
        setAlerts(response.data || []); // Ensure response.data is an array
      } catch (error) {
        setError("Failed to fetch alerts");
        console.error("Error fetching alerts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAlerts();
  }, []);

  if (loading) return <div className="p-4 text-gray-100">Loading...</div>;
  if (error) return <div className="p-4 text-red-400">Error: {error}</div>;

  return (
    <div className="bg-gray-800 text-gray-100 rounded-lg shadow-lg w-80 max-h-96 overflow-auto scrollbar-hidden p-4 space-y-4">
      <h3 className="text-xl font-semibold border-b border-gray-600 pb-2 mb-2">
        Notifications ({alerts.length})
      </h3>
      {alerts.length > 0 ? (
        alerts.map((alert) => (
          <div key={alert._id} className="bg-gray-700 p-4 rounded-lg border border-gray-600 space-y-2">
            <h4 className="text-lg text-start font-semibold text-blue-500">{alert.title}</h4>
            <p className="text-sm text-start text-gray-300">{alert.desc}</p>
            <h6 className="text-xs text-start text-gray-400">By: Lecturer</h6>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No alerts available</p>
      )}
    </div>
  );
};

export default Alerts;
