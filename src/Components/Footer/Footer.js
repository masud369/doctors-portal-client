import React from "react";
import "./Footer.css";
import { CiFacebook } from "react-icons/ci";
import { FaGooglePlusG } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="container">
        <div className="row">
          <div className="col-md-3" style={{ marginTop: "34px" }}>
            <li className="text-secondary tex-left my-2">
              Emergancy Dental Care
            </li>
            <li className="text-secondary tex-left my-2">Check Up</li>
            <li className="text-secondary tex-left my-2">
              Treatment of Personal Diseases
            </li>
            <li className="text-secondary tex-left my-2">Tooth Extraction</li>
            <li className="text-secondary tex-left my-2">Check Up</li>
          </div>
          <div className="col-md-3">
            <h5 style={{ color: "#1cc7c1" }}>Services</h5>
            <li className="text-secondary tex-left my-2">
              Emergancy Dental Care
            </li>
            <li className="text-secondary tex-left my-2">Check Up</li>
            <li className="text-secondary tex-left py-2">
              Treatment of Personal Diseases
            </li>
            <li className="text-secondary tex-left my-2">Tooth Extraction</li>
            <li className="text-secondary tex-left my-2">Check Up</li>
            <li className="text-secondary tex-left my-2">Check Up</li>
            <li className="text-secondary tex-left my-2">Check Up</li>
          </div>
          <div className="col-md-3">
            <h5 style={{ color: "#1cc7c1" }}>Oral Health</h5>
            <li className="text-secondary tex-left my-2">
              Emergancy Dental Care
            </li>
            <li className="text-secondary tex-left my-2">Check Up</li>
            <li className="text-secondary tex-left py-2">
              Treatment of Personal Diseases
            </li>
            <li className="text-secondary tex-left my-2">Tooth Extraction</li>
            <li className="text-secondary tex-left my-2">Check Up</li>
            <li className="text-secondary tex-left my-2">Check Up</li>
            <li className="text-secondary tex-left my-2">Check Up</li>
          </div>
          <div className="col-md-3">
            <h5 style={{ color: "#1cc7c1" }}>Our Address</h5>
            <li className="text-secondary tex-left my-2">
              New York-101010 Hubson <br /> Yards
            </li>
            <li>
              <div className="container">
                <div className="row mt-4">
                  <div className="col-md-4"><CiFacebook className="hover" /></div>
                  <div className="col-md-4 ">
                    <FaGooglePlusG className="hover" />
                  </div>
                  <div className="col-md-4 ">
                    <TiSocialTwitter className="hover" />
                  </div>
                </div>
              </div>
            </li>
            <div className="" style={{ marginTop: "200px" }}>
              <small className="text-secondary bolder fw-bold">Call Now</small>
              <br />
              <button className="btn btn-secondary button-style border-0 rounded-0 ">
                +2025550295
              </button>
            </div>
          </div>
        </div>
        <p className="text-secondary text-center">
          Copyright 2020 All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
