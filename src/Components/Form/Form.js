import React from "react";
import "./Form.css";
const Form = () => {
  return (
    <div className="form-container">
      <div className="text-center">
        <h5 style={{ color:"#1cc7c1" }}>CONTACT US</h5>
        <h1 className="text-light py-2">Always Connect With Us</h1>
      </div>
      <div className="text-center">
        <div className="container">
          <form action="">
            <div className="row">
              <div className="">
                <label htmlFor="lname"></label>

                <div className="col-md-8 m-auto">
                  <input
                    type="text"
                    id="lname"
                    name="lastname"
                    placeholder="Email Adress"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="">
                <label htmlFor="lname"></label>

                <div className="col-md-8 m-auto">
                  <input
                    type="text"
                    id="lname"
                    name="lastname"
                    placeholder="Subject"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="">
                <label htmlFor="subject"></label>
                <div className="col-md-8 text-center m-auto">
                  <textarea
                    id="subject"
                    name="subject"
                    placeholder="Your Message*"
                    style={{ height: "200px" }}
                  ></textarea>
                </div>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-2 m-auto">
                <input className="button-style" type="submit" px-5 value="SUBMIT" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
