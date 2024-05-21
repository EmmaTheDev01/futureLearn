import React, { useState } from "react";
import "../styles/topnav.css";
import { FaBell, FaCalendar, FaClock } from "react-icons/fa6";
import Alerts from "../shared/Alerts";
const TopNav = () => {
  const [showAlerts, setShowAlerts] = useState(false);

  const toggleAlerts = () => {
    setShowAlerts(!showAlerts)
  }
  return (
    <div className="topnav">
      <div className="nav_left">
        <li>Logo</li>
      </div>
      <div className="nav_right">
        <div onClick={toggleAlerts}>
          <li>
            <FaBell />
            <span>Alerts</span>
          </li>

        </div>
        <li>
          <FaClock />
          <span>{Date()}</span>
        </li>

        <li>
          <FaCalendar /> <span>Calendar</span>
        </li>
      </div>
      {showAlerts && <Alerts />}
    </div>
  );
};

export default TopNav;
