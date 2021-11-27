import React from "react";
import "./CareGiverServices.css";

const CareGiverServices = () => {
  return (
    <div className="careGiverServiceContainer">
      <div className="careGiverServiceDetails">
        <br />
        <h1>Best Caregiver Services</h1>
        <h3>Why choose us!</h3>
        <br />
        <br />
        <div>
          <h3>Meeting Your Emotional Needs</h3>
          <h6>
            An elderly person needs to feel safe, remain close to other people
            and believe that life continues.
          </h6>
        </div>
        <br />
        <br />
        <div>
          <h3>Meeting Your Physical Needs</h3>
          <h6>
            We offer skilled nursing services at all of our locations with
            professionally trained nursing staff.
          </h6>
        </div>
        <br />
        <br />
        <div>
          <h3>Enjoy Independent Living</h3>
          <h6>
            Gives seniors the confidence to remain independent in a
            professionally managed environment.
          </h6>
        </div>
      </div>
      <div>
        <img
          className="imageContainer"
          src="https://i.ibb.co/CJP297Z/services-3-1copyright-1170x658.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default CareGiverServices;
