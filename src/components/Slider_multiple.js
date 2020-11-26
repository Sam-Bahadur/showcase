import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Slider_multiple extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 2,
      arrows: false,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <h3>
              <img
                src="https://picsum.photos/seed/picsum/400/200?random=1"
                alt=""
              />
            </h3>
          </div>
          <div>
            <h3>
              <img src="image/slider_3.jpg" alt="" />
            </h3>
          </div>
          <div>
            <h3>
              <img src="https://picsum.photos/seed/picsum/400/200" alt="" />
            </h3>
          </div>
          <div>
            <h3>
              <img src="image/slider_2.jpg" alt="" />
            </h3>
          </div>
          <div>
            <h3>
              <img src="https://picsum.photos/seed/picsum/400/200" alt="" />
            </h3>
          </div>
          <div>
            <h3>
              <img src="image/slider_1.jpg" alt="" />
            </h3>
          </div>
        </Slider>
      </div>
    );
  }
}
