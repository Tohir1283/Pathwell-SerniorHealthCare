import React from "react";
import { Carousel } from "react-bootstrap";
import "./Style.css";

const About = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://pathwell.axiomthemes.com/wp-content/uploads/2017/10/services-6-copyright-1170x658.jpg"
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
      <div className="aboutInfo">
        <div style={{ padding: "3rem 2rem" }}>
          <h3>
            Caring for seniors is a labor of love and requires a special person
          </h3>
          <br />
          <p>
            Transitional care encompasses a broad range of services and
            environments designed to promote the safe and timely passage of
            patients between levels of health care and across care settings. ...
            These patients typically receive care from many providers and move
            frequently within health care settings", "description": " Care
            involved when a patient/client leaves one care setting hospital,
            nursing. home, assisted living facility, SNF, primary care provides
            short-term specialised care and support to help you regain your
            functional independence and confidence sooner, and avoid the need
            for longer term care and support services.Transitional care is
            designed to help patients get back on their feet safely after a
            hospital stay because of an illness or surgery – think of it as a
            stepping stone between the hospital and your home. During your stay,
            you may receive physical, occupational or speech therapies as
            needed.The care lasts for 30 days, beginning the date of discharge.
            TCM involves a healthcare professional making sure a person adapts
            to returning home and has appropriate follow-up care. The process is
            often managed by a family physician.
          </p>
        </div>
        <img
          src="https://i.ibb.co/CJP297Z/services-3-1copyright-1170x658.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
