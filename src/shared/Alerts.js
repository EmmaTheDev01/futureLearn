import React from "react";
import announcements from "../announcements";
import '../styles/notifications.css'
const Alerts = () => {
  const allAlerts = announcements.map((alert) => {
    return (
      <div className="alert_message">
        <h4>{alert.title}</h4>
        <p>{alert.description}</p>
        <h6>By: {alert.announcer}</h6>
        <hr></hr>
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
