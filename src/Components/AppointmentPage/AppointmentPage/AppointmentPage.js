import React from 'react';
import { useState } from 'react';
import Footer from '../../Footer/Footer';
import AppointmentBookings from '../AppointmentBookings/AppointmentBookings';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import NavBar from '../NavBar/NavBar';

const AppointmentPage = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handelDateChange = date =>{
        setSelectedDate(date);
    }
    return (
        <div>
            <NavBar />
            <AppointmentHeader handelDateChange={handelDateChange}/>
            <AppointmentBookings date={selectedDate} />
            <Footer/>
        </div>
    );
};

export default AppointmentPage;