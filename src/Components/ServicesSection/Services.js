import React from "react";
import fluoride from "../../images/fluoride.png";
import cavity from "../../images/cavity.png";
import teathWhitening from "../../images/whitening.png";
import ServicesDetails from "../ServicesDeatils/ServicesDetails";

const Services = () => {
  const servicesInfo = [
    {
      title: "Fluoride Treatment",
      img: fluoride,
    },
    {
      title: "Cavity Filling",
      img: cavity,
    },
    {
      title: "Teath Whitening",
      img: teathWhitening,
    },
  ];

  return (
    <div className="pb-5">
      <div className="text-center py-5 mt-5 mb-3">
        <h5 style={{color:"#1CC7C1"}} >Our Services</h5>
        <h2 style={{color:"#3A4256"}} className="">Services We Provide</h2>
      </div>
      <section className="d-flex justify-content-center">
        <div className="w-75 row">
          {servicesInfo.map((service) => (
            <ServicesDetails service={service} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
