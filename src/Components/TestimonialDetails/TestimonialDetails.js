import React from 'react';

const TestimonialDetails = ({testimonial}) => {
    return (
        <div className="col-md-4 col-sm-12 py-5">
            <div className="card m-auto border-0 box-shadow" style={{width: '18rem'}}>
              <div className="card-body">
                <p className="card-text text-center p-3">
                  {testimonial.description}
                </p>
                <div className="py-4 d-flex justify-content-center">
                    <img className='img-fluid mr-5' style={{width:"60px",marginRight:' 15px'}} src={testimonial.img} alt="" />
                    <div className="">
                    <h4>{testimonial.name}</h4>
                    <small>{testimonial.city}</small>
                    </div>
                    
                </div>
              </div>
            </div>
          </div>
    );
};

export default TestimonialDetails;