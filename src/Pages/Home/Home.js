import React from "react";
import Article from "../../components/Article/Article";
import Banner from "../../components/Banner/Banner";
import CareGiverServices from "../../components/CareGiverServices/CareGiverServices";
import CenterInfo from "../../components/CenterInfo/CenterInfo";
import DailyServices from "../../components/DailyServices/DailyServices";
import MedicalCareContact from "../../components/MedicalCareContact/MedicalCareContact";
import ServiceSection from "../../components/ServiceSection/ServiceSection";
import useData from "../../hooks/useData";
import "./Home.css";
const Home = () => {
  const [data] = useData([]);
  return (
    <div className="home">
      <Banner />
      <CenterInfo />
      <Article />
      <DailyServices />
      <div className="servicesSectionContainer">
        {data.map((info) => (
          <ServiceSection info={info} key={info.title} />
        ))}
      </div>
      <MedicalCareContact />
      <CareGiverServices />
    </div>
  );
};

export default Home;
