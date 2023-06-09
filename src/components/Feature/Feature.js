import React from "react";
import Marquee from "react-fast-marquee";
import image from "../images/dot.svg";

const Feature = () => {
  return (
    <div className="feature">
      <h2>
        Featured In <span style={{ color: "#6134be" }}>Publications</span>
      </h2>
      <Marquee className="marquee" gradient={false} speed={40}>
        <img src={image} />
        <img src={image} />
        <img src={image} />
        <img src={image} />
      </Marquee>
    </div>
  );
};

export default Feature;
