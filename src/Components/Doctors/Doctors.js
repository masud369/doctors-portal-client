import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import doctor from "../../images/doctor-small.png";
import DoctorsCard from "../DoctersCard/DoctorsCard";

const Doctors = () => {
  // const doctorsInfo = [
  //   {
  //     name: "Dr.Caudi",
  //     phone: "+61452200126",
  //     image: doctor,
  //   },
  //   {
  //     name: "Dr.Caudi",
  //     phone: "+61452200126",
  //     image: doctor,
  //   },
  //   {
  //     name: "Dr.Caudi",
  //     phone: "+61452200126",
  //     image: doctor,
  //   },
  // ];
  const [doctors, setDoctors] = useState([]);
  useEffect(()=>{
    fetch('https://doctors-portal-server-2qfr.onrender.com/getDoctors')
    .then(res=>res.json())
    .then(data=>{
      setDoctors(data) 
      console.log(data)
    })
  },[])

  return (
    <div className="container my-5">
        <h5 className="text-center py-5" style={{color: "#1cc7c1"}}>Our Doctors</h5>
      <div className="row">
        {doctors.map((doctor) => (
          <DoctorsCard doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default Doctors;
