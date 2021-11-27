import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = (props) => {
  const { id, title, img, details } = props.info;
  // console.log(props.info);
  return (
    <div>
      <img src={img} alt={title} style={{ width: "100%" }} />
      <div style={{ padding: " 1rem", textAlign: "center", height: "220px" }}>
        <h2>{title}</h2>
        <p>{details}</p>
      </div>{" "}
      <button className="dailyServicesButton">
        {" "}
        <Link to={`/service/${id}`} className="pageBtn">
          {" "}
          read more{" "}
        </Link>{" "}
      </button>
    </div>
  );
};

export default Service;
