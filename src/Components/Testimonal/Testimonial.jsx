import React from "react";
import "./Testimonial.css";

const Testimonial = (props) => {
  const { name, designation, content, width } = props;
  return (
    <div className="testimonial" style={{ width: width }}>
      <div className="testimonial-header">
        <h3>{name}</h3>
        <h4>{designation}</h4>
      </div>
      <h3 className="testimonial-content">{content}</h3>
    </div>
  );
};

export default Testimonial;
