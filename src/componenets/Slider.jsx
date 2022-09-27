import Carousel from "react-bootstrap/Carousel";
import React from "react";

const Slider = ({start}) => {
  return (
    <Carousel >
      {
        start.map((item) => (
          <Carousel.Item>
            <img className="d-block w-100" src={item} alt="First slide" />
          </Carousel.Item>
        ))}
    </Carousel>
  );
};

export default Slider;
