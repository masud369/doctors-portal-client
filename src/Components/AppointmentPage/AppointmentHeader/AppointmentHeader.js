import React, { useState } from "react";
import chair from '../../../images/chair.png'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AppointmentHeader = ({handelDateChange}) => {
    const [value, onChange] = useState(new Date());
  return (
    <div>
      <main
        className="row d-flex align-items-center"
        style={{ height: "600px" }}
      >
        <div className="col-md-4 offset-md-1">
        <h1 className="py-4" style={{color:'#3A4256',}}>Appointment </h1>
        <Calendar onChange={handelDateChange} value={value} />
        </div>
        <div className="col-md-6">
          <img src={chair} className="img-fluid" alt="" />
        </div>
      </main>
    </div>
  );
};

export default AppointmentHeader;
