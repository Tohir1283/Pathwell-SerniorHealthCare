import { Carousel } from "react-bootstrap";
import React from "react";

const Banner = () => {
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src="http://pathwell.axiomthemes.com/wp-content/uploads/2018/02/slide3.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src="http://pathwell.axiomthemes.com/wp-content/uploads/2018/02/slide2.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src="http://pathwell.axiomthemes.com/wp-content/uploads/2018/02/slide1.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Banner;
