import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './InfoCard.css'

const InfoCard = ({ info }) => {
  return (
    <div className="col-md-4">
      <div className={`p-3 card-container d-flex justify-content-center text-light  info-${info.background}`}>
        <div className="fs-2 px-2">
          <FontAwesomeIcon icon={info.icon} />
        </div>
        <div className=" text-light">
          <h6>{info.title}</h6>
          <small>{info.description}</small>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
