import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDashboard, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { Container, Icon, Image, Menu, Sidebar } from "semantic-ui-react";
import './DashboardMenu.css'
import { useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../../../App";

const DashboardMenu = () => {
  const [loggedinUser, setLoggedinUser] = useContext(UserContext);
  const [isDocters, setIsDocters] = useState(false);

useEffect(()=>{
  fetch('https://doctors-portal-server-2qfr.onrender.com/usersDshboard',{
    method:'POST',
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({email:loggedinUser.email})
})
  .then(res=>res.json())
  .then(data=>{
    console.log(data)
      setIsDocters(data)
    
  })
},[])

console.log(isDocters);




  return (
    <div className="sidebar-container py-4 ps-3">
      <Menu>
        <Menu.Item className="text-light fw-bolder fs-16 menu-item my-3" as={Link} to="/home">
          <FontAwesomeIcon className="pe-2" icon={faDashboard} /> Home
        </Menu.Item>
        <br />
        <br />
        <Menu.Item className="text-light fw-bolder fs-16 menu-item my-3" as={Link} to="/myAppointmen">
          <FontAwesomeIcon className="pe-2" icon={faDashboard} /> My Appointmen
        </Menu.Item>
        <br />
        <br />
        {isDocters && <div className=""> <Menu.Item className="text-light fw-bolder fs-16 menu-item my-5" as={Link} to="/user/Appointment">
          <FontAwesomeIcon className="pe-2" icon={faCalendar} /> Appointment
        </Menu.Item>
        <br />
        <br />
        <Menu.Item className="text-light fw-bolder fs-16 menu-item py-3" as={Link} to="/user/Patients">
        <FontAwesomeIcon className="pe-2" icon={faCalendar} />
          Patients
        </Menu.Item>
        <br />
        <br />
        <Menu.Item className="text-light fw-bolder fs-16 menu-item py-3" as={Link} to="/user/Prescriptions">
        <FontAwesomeIcon className="pe-2" icon={faCalendar} />
          Prescriptions
        </Menu.Item>
        <br />
        <br />
        <Menu.Item className="text-light fw-bolder fs-16 menu-item py-3" as={Link} to="/user/Setting">
        <FontAwesomeIcon className="pe-2" icon={faCalendar} />
          Setting
        </Menu.Item>
        <br />
        <br />
        <Menu.Item className="text-light fw-bolder fs-16 menu-item py-3" as={Link} to="/user/addDocotors">
        <FontAwesomeIcon className="pe-2" icon={faCalendar} />
          Add Doctors
        </Menu.Item></div>}
      </Menu>
    </div>
  );
};

export default DashboardMenu;
