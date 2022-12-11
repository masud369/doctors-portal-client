import React from 'react';
import chair from '../../../images/chair.png'
import './HeaderMain.css';

const HeaderMain = () => {
    return (
        <main className='row d-flex align-items-center' style={{height:"600px"}}> 
        <div className="col-md-4 offset-md-1">
            <h1 style={{color:'#3A4256'}}>Your New Smile <br /> Starts Here</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A beatae fugit saepe magni consectetur minus!</p>
            <button className='btn btn-primary'>GET APPOINTMEN</button>
        </div>
        <div className="col-md-6">
            <img src={chair} className="img-fluid" alt="" />
        </div>
        </main>
    );
};

export default HeaderMain;