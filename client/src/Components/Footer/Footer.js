import React from "react";

import { Link } from "react-router-dom";

import logo from "../../Assets/Images/logo.png";

import { Data } from "../../Constants/Data";

import { AiOutlineInstagram } from 'react-icons/ai'


const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-data">
        <div className="box-1">
          <img src={logo} />
          <h2>Pyrim Shop</h2>
          <p>
            We help you <br /> get drip.
          </p>
        </div>
        <div className="box-2">
          <div className="inner-1">
            <span>Links</span>
            <div className="links">
              {Data.navbarLinks.map((link) => (
                <li key={link.id}>
                  <Link>{link.name}</Link>
                </li>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="footer-links">
          <span>© Pyrim Inc. All rights reserved.</span>
          <div className="icons"> 
            <AiOutlineInstagram className="icon"/>
          </div>
      </div>
    </div>
  );
};

export default Footer;