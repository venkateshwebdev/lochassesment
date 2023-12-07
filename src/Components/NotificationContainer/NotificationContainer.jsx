import React from "react";
import Slider from "react-slick";
import Notification from "../Notification/Notification";
import NotificationChecks from "../Notification/NotificationChecks";
import Bars from "../../icons/Bars";
import ClockIcon from "../../icons/ClockIcon";

const NotificationContainer = (props) => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 1000,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    // centerMode: true,
  };
  return (
    <div className="notification-container">
      <div className="notification-container-overlay"></div>
      <div className="notification-container-overlay--left"></div>
      <div>
        <Slider {...settings}>
          <Notification />
          <NotificationChecks
            title="Notify me when any wallets move more than"
            droptext="$1,000.00"
            icon={<Bars />}
          />
          <NotificationChecks
            title="Notify me when any wallet dormant for"
            droptext="> 30 days"
            icon={<ClockIcon />}
            description="becomes active"
          />
        </Slider>
      </div>
    </div>
  );
};

export default NotificationContainer;
