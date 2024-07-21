import React, { useState } from "react";
import { FaBell, FaCalendar, FaClock } from "react-icons/fa";
import Alerts from "../shared/Alerts";

const TopNav = () => {
  const [showAlerts, setShowAlerts] = useState(false);

  const toggleAlerts = () => {
    setShowAlerts(!showAlerts);
  };

  return (
    <div className="relative bg-gray-900 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <div className="text-2xl mr-4">Logo</div>
      </div>
      <div className="flex items-center">
        <div className="mr-4">
          <FaClock className="inline-block text-xl mr-1" />
          <span>{new Date().toLocaleString()}</span>
        </div>
        <div className="mr-4">
          <FaCalendar className="inline-block text-xl mr-1" />
        </div>
        <div className="relative mr-4 cursor-pointer" onClick={toggleAlerts}>
          <FaBell className="inline-block text-xl mr-1" />
          {showAlerts && (
            <div className="absolute right-0 mt-2 z-50">
              <Alerts />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopNav;
