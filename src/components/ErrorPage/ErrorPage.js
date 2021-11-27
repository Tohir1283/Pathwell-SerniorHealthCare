import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className="errorContainer">
      <img
        src="https://www.pngitem.com/pimgs/m/254-2549834_404-page-not-found-404-not-found-png.png"
        alt="error"
      />
      <button className="dailyServicesButton mt-5">
        {" "}
        <Link to="/home" style={{ textDecoration: "none", color: "salmon" }}>
          return home
        </Link>{" "}
      </button>
    </div>
  );
};

export default ErrorPage;
