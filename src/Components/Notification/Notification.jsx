import React from "react";
import "./Notification.css";
import BellStroke from "../../icons/BellStroke";

const Notification = (props) => {
  return (
    <div className="notification-plain">
      <div className="notification-header">
        <BellStroke />
        <p>Save</p>
      </div>
      <h3>We’ll be sending notifications to you here</h3>
      <input type="text" className="notification--input" />
    </div>
  );
};

export default Notification;
