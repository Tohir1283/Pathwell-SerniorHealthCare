import React from "react";
import { Carousel } from "react-bootstrap";
import Service from "../../components/Service/Service";
import useData from "../../hooks/useData";
import "./Services.css";

const Services = () => {
  const [data] = useData();
  // console.log(data);
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://pathwell.axiomthemes.com/wp-content/uploads/2018/02/slide1.jpg"
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
      <div className="infoContainer">
        <h1 style={{ fontSize: "3rem " }}>
          Meet Your Professional Care You Can Trust
        </h1>
        <br />
        <p
          style={{
            fontSize: "1.5rem",
            fontFamily: " 'Playfair Display', serif",
          }}
        >
          We Provide Care
        </p>
        <br />
        <br />
        <h5>
          We trace our success as a company to the simple and enduring
          philosophy that ageing is a gift. The wealth of knowledge and
          experience that comes with age is a gift to the individual and the
          family.
        </h5>
        <br />
        <br />
        <p
          style={{ fontFamily: " 'Playfair Display', serif", color: "tomato" }}
        >
          email: pathWell@info.com
        </p>
        <br />
      </div>
      <div className="servicesContainer">
        {data.map((info) => (
          <Service info={info} key={info.title} />
        ))}
      </div>
    </div>
  );
};

export default Services;
