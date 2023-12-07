import React from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Bell from "../../icons/Bell";
import CompanyIcon from "../../icons/CompanyIcon";
import Eye from "../../icons/Eye";
import CohortImage from "../../icons/cohortimage.png";
import Icontext from "../IconTextBox/Icontext";
import NotificationContainer from "../NotificationContainer/NotificationContainer";
import TestimonialContainer from "../TestimonialContainer/TestimonialContainer";
import "./LeftPane.css";

const LeftPane = (props) => {
  return (
    <div className="left-pane">
      <div className="section--one">
        <div className="section--one-icontext">
          <Icontext
            icon={<Bell />}
            title="Get notified when a highly correlated whale makes a move"
            description="Find out when a certain whale moves more than any preset amount on-chain
          or when a dormant whale you care about becomes active."
          />
        </div>

        <NotificationContainer />
      </div>
      <div className="section--two">
        <img
          alt="AVAX Whales"
          src={CohortImage}
          className="section--two-image"
        />
        <div className="icontext-container">
          <Icontext
            direction="right"
            icon={<Eye />}
            title="Watch what the whales are doing"
            description="All whales are not equal. Know exactly what the whales impacting YOUR portfolio are doing."
          />
        </div>
      </div>
      <div className="section--three">
        <div className="testimonial-bar">
          <h2>Testimonials</h2>
          <div className="divider"></div>
        </div>
        <div className="testimonail-parent">
          <CompanyIcon />
          <TestimonialContainer />
        </div>
      </div>
    </div>
  );
};

export default LeftPane;
