import React, { useEffect, useRef, useState } from "react";
import Testimonial from "../Testimonal/Testimonial";

const TestimonialContainer = (props) => {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const container = containerRef.current;

    const handleMouseDown = (event) => {
      setIsDragging(true);
      setStartX(event.pageX - container.offsetLeft);
      setScrollLeft(container.scrollLeft);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const handleMouseMove = (event) => {
      if (!isDragging) return;
      const x = event.pageX - container.offsetLeft;
      const walk = x - startX;
      container.scrollLeft = scrollLeft - walk;
    };

    container.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isDragging, startX, scrollLeft]);
  return (
    <div className="testimonial-container-scroll" ref={containerRef}>
      <div className="testimonial-container" style={{cursor:"grab"}}>
        <Testimonial width="132px" />
        <Testimonial
          name="Jack F"
          designation="Ex Blackrock PM"
          content="“Love how Loch integrates portfolio analytics and whale watching into one unified app.”"
          width="353px"
        />
        <Testimonial
          name="Yash P"
          designation="Research, 3poch Crypto Hedge Fund"
          content="“I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!”"
          width="353px"
        />
        <Testimonial
          name="Shiv S"
          designation="Co-Founder Magik Labs"
          content="“Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.”"
          width="491px"
        />
        <Testimonial width="24px" />
      </div>
    </div>
  );
};

export default TestimonialContainer;
