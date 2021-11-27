/* eslint-disable react-hooks/exhaustive-deps */
// import React, { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ServiceDescription.css";

const ServiceDescription = () => {
  const { serviceId } = useParams();

  const [servicesDescription, setServicesDescription] = useState([]);
  const [serviceDescription, setServiceDescription] = useState({});

  useEffect(() => {
    fetch("/servicesDescription.json")
      .then((res) => res.json())
      .then((data) => setServicesDescription(data.servicesDescription));
  }, []);
  // console.log(servicesDescription);

  useEffect(() => {
    const selectedService = servicesDescription.find(
      (service) => service.id === serviceId
    );
    setServiceDescription(selectedService);
  }, [servicesDescription]);

  console.log(serviceDescription);
  // const { title, details, img, description } = serviceDescription;
  return (
    <div>
      <div className="descriptionContainer">
        <br />
        <br />
        <h2>{serviceDescription?.title}</h2>
        <br />
        <p>{serviceDescription?.details}</p>
        <br />
        <img
          src={serviceDescription?.img}
          alt={serviceDescription?.title}
          style={{ width: "100%" }}
        />
        <br />
        <br />
        <br />
        <p>{serviceDescription?.description}</p>
      </div>
    </div>
  );
};

export default ServiceDescription;
