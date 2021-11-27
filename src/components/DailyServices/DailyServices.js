import React from "react";
import { Link } from "react-router-dom";
import "./DailyServices.css";

const DailyServices = () => {
  return (
    <div className="dailyServicesContainer ">
      <div className="dailyServices">
        <h5>Personalized Services</h5>
        <button className="dailyServicesButton">
          <Link to="/services" className="pageBtn">
            more
          </Link>
        </button>
      </div>
      <div className="dailyServices">
        <h5> Health Care</h5>
        <button className="dailyServicesButton">
          <Link to="/services" className="pageBtn">
            more
          </Link>
        </button>
      </div>
      <div className="dailyServices">
        <h5>Professional Check Up</h5>
        <button className="dailyServicesButton">
          <Link to="/services" className="pageBtn">
            more
          </Link>
        </button>
      </div>
      <div className="dailyServices">
        <h5>Medical Supply</h5>
        <button className="dailyServicesButton">
          <Link to="/services" className="pageBtn">
            more
          </Link>
        </button>
      </div>
    </div>
  );
};

export default DailyServices;
