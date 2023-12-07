import React from "react";
import "./icontext.css";

const Icontext = (props) => {
  const { direction, icon, title, description } = props;
  return (
    <div
      className={`icontext ${direction === "right" ? "icontext--right" : ""}`}
    >
      {icon}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Icontext;
