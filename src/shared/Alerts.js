import React from "react";
import announcements from "../data/announcements";

const Alerts = () => {
  return (
    <div className="bg-gray-800 text-gray-100 rounded-lg shadow-lg w-80 max-h-96 overflow-auto scrollbar-hidden p-4 space-y-4">
      <h3 className="text-xl font-semibold border-b border-gray-600 pb-2 mb-2">
        Notifications ({announcements.length})
      </h3>
      {announcements.map((alert, index) => (
        <div key={index} className="bg-gray-700 p-4 rounded-lg border border-gray-600 space-y-2">
          <h4 className="text-lg font-semibold text-yellow-400">{alert.title}</h4>
          <p className="text-sm text-gray-300">{alert.description}</p>
          <h6 className="text-xs text-gray-400">By: {alert.announcer}</h6>
        </div>
      ))}
    </div>
  );
};

export default Alerts;
