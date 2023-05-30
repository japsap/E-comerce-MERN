import React from "react";

import { Link } from "react-router-dom";

import { Data } from "../../Constants/Data";

import Logo from '../../Assets/Images/logo.png'

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
            <img src={Logo}/>
            <h2>Pyrim</h2>
        </div>
        <div className="navbar-cart-account"></div>
      </div>

      {/* end of navbar pc */}

      {/* navbar mobile */}
      <div className="navbar-mobile"></div>
    </div>
  );
};

export default Navbar;
