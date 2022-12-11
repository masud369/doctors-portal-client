import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './DashboardCalender.css'

const DashboardCalender = ({ handelDateChange}) => {
   
    const [value, onChange] = useState(new Date());
    const dateColor = {
        color:'green',
    }
    return (
        <div>
            <Calendar  onChange={handelDateChange} value={value} />
        </div>
    );
};

export default DashboardCalender;