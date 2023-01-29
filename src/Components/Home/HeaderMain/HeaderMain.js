import React from 'react';
import { useNavigate, useNavigation } from 'react-router-dom';
import chair from '../../../images/chair.png'
import './HeaderMain.css';

const HeaderMain = () => {
    const navigate = useNavigate();
    const handelAppointmen = ()=>{
        navigate("/appointment");
    }
    return (
        <main className='row d-flex align-items-center' style={{height:"600px"}}> 
        <div className="col-md-4 p-sm-5  m-auto col-sm-10 col-xs-10 offset-md-1">
            <h1 style={{color:'#3A4256'}}>Your New Smile <br /> Starts Here</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A beatae fugit saepe magni consectetur minus!</p>
            <button onClick={handelAppointmen} className='btn btn-primary'>GET APPOINTMEN</button>
        </div>
        <div className="col-md-6">
            <img src={chair} className="img-fluid" alt="" />
        </div>
        </main>
    );
};

export default HeaderMain;