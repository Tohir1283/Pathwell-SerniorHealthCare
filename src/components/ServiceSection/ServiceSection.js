import React from "react";
import { Link } from "react-router-dom";
import "./ServiceSection.css";

const ServiceSection = (props) => {
  const { title, img, details, id } = props.info;
  return (
    <div className="serviceSection">
      <img
        src={img}
        alt={title}
        style={{ width: "100%" }}
        className="img-fluid"
      />
      <div style={{ padding: " 1rem", textAlign: "center", height: "220px" }}>
        <h2>{title}</h2>
        <p>{details}</p>
      </div>
      <button className="dailyServicesButton">
        {" "}
        <Link
          to={`/service/${id}`}
          style={{ textDecoration: "none", color: "salmon" }}
        >
          read more
        </Link>{" "}
      </button>
    </div>
  );
};

export default ServiceSection;
