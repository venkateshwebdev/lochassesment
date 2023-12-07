import React from "react";
import "./Notification.css";
import DownIcon from "../../icons/DownIcon";
import CheckboxIcon from "../../icons/CheckboxIcon";

const NotificationChecks = (props) => {
  const { title, description, icon, droptext } = props;
  return (
    <div className="notification-plain">
      <div className="notification-header">
        {icon}
        <CheckboxIcon />
      </div>
      <div className="notification-drop-container">
        <h4>{title}</h4>
        <div className="dropdown-custom">
          <p>{droptext}</p>
          <DownIcon />
        </div>
        {description && <h4>{description}</h4>}
      </div>
    </div>
  );
};

export default NotificationChecks;
