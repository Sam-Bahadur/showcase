import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block" src="image/slider_1.jpg" alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block" src="image/slider_1.jpg" alt="First slide" />
      </Carousel.Item>
    </Carousel>
  );
}
