import React from "react";
import announcements from "../announcements";
import '../styles/notifications.css'
const Alerts = () => {
  const allAlerts = announcements.map((alert) => {
    return (
      <div className="alerts_content">
        <h4>{alert.title}</h4>
        <p>{alert.description}</p>
        <h6>{alert.announcer}</h6>
      </div>
    );
  });
  return (
    <div className="notification_popup">
      <h3>Notification ({announcements.length})</h3>
      {allAlerts}
    </div>
  );
};

export default Alerts;
