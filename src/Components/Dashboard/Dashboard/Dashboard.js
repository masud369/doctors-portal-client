import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import DashAppointment from '../DashAppointment/DashAppointment';
import DashboardCalender from '../DashboardClender/DashboardCalender';
import DashboardMenu from '../DashboardMenu/DashboardMenu';
import './Dashboard.css'


const Dashboard = () => {
    
     const [loggedinUser,setLoggedinUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);
    const handelDateChange = date =>{
        setSelectedDate(date);
    }

    useEffect(()=>{
        fetch("https://doctors-portal-server-2qfr.onrender.com/appointmentbyDate",{
            method:"POST",
            headers:{'Content-Type':"application/json"},
            body:JSON.stringify({date:selectedDate,email:loggedinUser.email})
        })
        .then(res=>res.json())
        .then(data=>setAppointments(data))
    },[selectedDate])



    return (
        <section className='row'> 
            <div className="col-md-2 dashboard-menu">
                <DashboardMenu/>
            </div>
            <div className="col-md-5">
                <DashboardCalender handelDateChange={handelDateChange} />
            </div>
            <div className="col-md-5">
                <DashAppointment appointments={appointments}  />
            </div>
        </section>
    );
};

export default Dashboard;