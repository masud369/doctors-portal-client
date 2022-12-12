import React from "react";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DoctorsCard = ({ doctor }) => {
  return (
    <div className="col-md-4 col-sm-12">
      <div className="card border-0 m-auto" style={{ width: "18rem" }}>
        <div className="card-body">
          {
            doctor.imagef? <img className="img-fluid" style={{height:'200px'}} src={"data:image/png;base64," + doctor.imagef.img} /> : <img className="img-fluid" style={{height:'200px'}} src={`https://doctors-portal-server-2qfr.onrender.com/${doctor.img}`} alt="" />
          
          }
          
          <div className="text-center py-2">
            <h6 className="">{doctor.name}</h6 >
            <small className=""><FontAwesomeIcon style={{color: "#1cc7c1"}} icon={faPhone} />{doctor.email}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorsCard;
