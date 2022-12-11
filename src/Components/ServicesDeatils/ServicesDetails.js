import React from "react";

const ServicesDetails = ({ service }) => {
  return (
      <div className="col-md-4">
        <div className={``}>
            
          <div className="fs-2 px-2 text-center">
            <img className="rounded mx-auto d-block img-fluid" src={service.img} alt="" />
          </div>
          <div className="text-center">
            <h6 className="py-5">{service.title}</h6>
            <small className="py-5 text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              accusamus.
            </small>
          </div>
        </div>
      </div>
  );
};

export default ServicesDetails;
