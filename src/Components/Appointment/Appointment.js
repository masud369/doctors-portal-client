import React from 'react';
import docter from '../../images/doctor.png'
import './Appointment.css'

const Appointment = () => {
    return (
        <div className='row appointment-container' style={{marginTop:'150px'}}>
            <div className="col-md-5 docter-img">
                <img className='img-fluid' src={docter} alt="" />
            </div>
            <div className="col-md-7" style={{zIndex:'1',position:'relative'}}>
                <h5 className="pt-4" style={{color:'#1CC7C1'}}> APPOINTMENT</h5>
                <h1  className="py-2 text-light">Make an appointment <br /> Today</h1>
                <p className="py-2 text-light">It is a long established fact that a reader will be districtedby the readable <br /> content of page when looking at its</p>
                <button className='btn btn-info'>Learn More</button>
            </div>

        </div>
    );
};

export default Appointment;