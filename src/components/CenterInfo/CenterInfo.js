import React from "react";
import "./CenterInfo.css";

const CenterInfo = () => {
  return (
    <div className="centerInfo bg-light">
      <div className="centerNumber">
        <h2>Health Care Center</h2>
        <h3>+19 (077) 555 22 33</h3>
      </div>
      <div className="centerSchedule">
        <h2>Schedule a tour</h2>
        <h3>+19 (077) 555 11 44</h3>
      </div>
    </div>
  );
};

export default CenterInfo;
