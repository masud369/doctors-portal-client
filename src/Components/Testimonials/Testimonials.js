import React from "react";
import peole1 from "../../images/people-1.png";
import peole2 from "../../images/people-2.png";
import peole3 from "../../images/people-3.png";
import TestimonialDetails from "../TestimonialDetails/TestimonialDetails";
const Testimonials = () => {
  const testimonialsInfo = [
    {
      name: "Winson",
      img: peole1,
      description:
        "Some quick example text to build on the card title and make up Some quick example text to build on the card title and make up the card title and make up.",
      city: "California",
    },
    {
      name: "Winson",
      img: peole2,
      description:
        "Some quick example text to build on the card title and make up Some quick example text to build on the card title and make up the card title and make up.",
      city: "California",
    },
    {
      name: "Winson",
      img: peole3,
      description:
        "Some quick example text to build on the card title and make up Some quick example text to build on the card title and make up the card title and make up.",
      city: "California",
    },
  ];

  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <div className="">
        <h5 style={{ color: "#1cc7c1" }}>TESTIMONIALS</h5>
        <h1 style={{ color: "#3a4256" }}>
          What's Our Patients <br /> Says
        </h1>
      </div>
      <div className="">
        <div className="row">
          {testimonialsInfo.map((testimonial) => (
            <TestimonialDetails testimonial={testimonial} />
          ))}

          <div className="col-md-4"></div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
