import React from 'react';
import treatment from '../../images/treatment.png';

const ExceptionalCare = () => {
    return (
        <div className='container'>
            <div className="row mt-5">
                <div className="col-md-1"></div>
                <div className="col-md-5 col-sm-6 col-xs-6 m-auto">
                    <img src={treatment} className='img-fluid' alt="" />
                </div>
                <div className="col-md-5 col-sm-8 text-center m-auto" style={{marginRight:"15px"}}>
                    <h1 className='py-3' style={{color:'#3A4256'}}>Exceptional Dental <br /> Care, On Your Terms</h1>
                    <p className='text-secondary pt-2 lh-base pb-5' style={{lineHeight:'30px !important'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. dolor sit amet consectetur adipisicing elit. Repellat cumque velit ipsum similique dicta quam tenetur eligendi tempore quidem, quod, vero officiis error et accusamus atque nulla in minus ratione porro culpa aut nihil. Earum ab fugit placeat atque doloribus quae tempora, corporis illo inventore.</p>
                    <button className=' btn btn-primary'>Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default ExceptionalCare;