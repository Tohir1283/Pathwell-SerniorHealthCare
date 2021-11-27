import React from "react";
import { Link } from "react-router-dom";
import "./MedicalCareContact.css";

const MedicalCareContact = () => {
  return (
    <div>
      <div className="MedicalCareContainer">
        <h3>Competent Medical Care</h3>
        <h4>We are always closely connected</h4>
        <button className="contactButton">
          <Link to="/contact" className="pageBtn">
            Contact us
          </Link>
        </button>
      </div>
    </div>
  );
};

export default MedicalCareContact;
