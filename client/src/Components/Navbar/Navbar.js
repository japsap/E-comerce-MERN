import React from "react";

import { Link } from "react-router-dom";

import { Data } from "../../Constants/Data";

import Logo from "../../Assets/Images/logo.png";

import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="navbar-container">
      {/* navbar pc */}
      <div className="navbar-pc">
        <div className="navbar-links">
          {Data.navbarLinks.map((link) => {
            const { name, path, id } = link;

            return (
              <li key={id}>
                <Link path={path}>{name}</Link>
              </li>
            );
          })}
        </div>
        <div className="navbar-logo">
          <img src={Logo} />
          <h2>Pyrim</h2>
        </div>
        <div className="navbar-cart-account">
          <div className="shopping-cart">
            <div className="shopping-icon-container">
                <AiOutlineShoppingCart className="icon"/>
                <span>0</span>
            </div>
          </div>
          <div className="user-navbar">
            <AiOutlineUser className="icon"/>
            <p>Account</p>
          </div>
        </div>
      </div>

      {/* end of navbar pc */}

      {/* navbar mobile */}
      <div className="navbar-mobile"></div>
    </div>
  );
};

export default Navbar;
