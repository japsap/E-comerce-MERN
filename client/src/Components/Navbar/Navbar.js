import React, { useRef, useState } from "react";

import { Link } from "react-router-dom";

import { Data } from "../../Constants/Data";

import Logo from "../../Assets/Images/logo.png";

import {
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineClose,
  AiOutlineHeart,
} from "react-icons/ai";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";

const Navbar = ({ user, cart, favorites }) => {
  const [toggleMobileNavIcon, setToggleMobileNavIcon] = useState(false);

  const navbarRef = useRef();
  const mobileNavbarRef = useRef();

  const toggleMobileNav = () => {
    mobileNavbarRef.current.classList.toggle("active");
    setToggleMobileNavIcon((prev) => !prev);
  };

  window.onscroll = function () {
    OnScrol();
  };

  function OnScrol() {
    if (
      document.body.scrollTop > 10 ||
      document.documentElement.scrollTop > 10
    ) {
      navbarRef.current.style.backgroundColor = "#222222";
    } else {
      navbarRef.current.style.background = "#22222";
    }
  }

  return (
    <div className="navbar-container" ref={navbarRef}>
      {/* navbar pc */}
      <div className="navbar-pc">
        <div className="navbar-links">
          {Data.navbarLinks.map((link) => {
            const { name, path, id } = link;

            return (
              <li key={id}>
                <a href={path}>{name}</a>
              </li>
            );
          })}
        </div>
        <div
          className="navbar-logo"
          onClick={() => (window.location.href = "/")}
        >
          <img src={Logo} />
          <h2>Pyrim</h2>
        </div>
        <div className="navbar-cart-account">
          {user ? (
            <Link to={`/dashboard/${user._id}`} className="user-navbar">
              <AiOutlineUser className="icon" />
              <p>Account</p>
            </Link>
          ) : (
            <button className="button-navbar">
              <Link to="/account">Sign up</Link>
            </button>
          )}
          <div className="favorites-cart">
            <AiOutlineHeart className="icon" />
            <span>{favorites.length}</span>
          </div>
          <div className="shopping-cart">
            <Link to="/cart" className="shopping-icon-container">
              <AiOutlineShoppingCart className="icon" />
              <span>{cart.length}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* end of navbar pc */}

      {/* navbar mobile */}
      <div className="navbar-mb-conti" ref={mobileNavbarRef}>
        <div className="navbar-mobile">
          <div className="navbar-logo" onClick={() => (window.location.href = "/")}>
            <img src={Logo} />
            <h2>Pyrim</h2>
          </div>
          <div className="navbar-menu">
            {toggleMobileNavIcon ? (
              <AiOutlineClose onClick={toggleMobileNav} className="icon" />
            ) : (
              <HiOutlineBars3BottomRight
                className="icon"
                onClick={toggleMobileNav}
              />
            )}
            <div className="cart-mobile-container">
              <Link to="/cart">
                <AiOutlineShoppingCart className="icon icon2" />
              </Link>
              <span>{cart.length}</span>
            </div>
          </div>
        </div>
        {toggleMobileNavIcon ? (
          <div className="mobile-inner" onClick={toggleMobileNav}>
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
            <div className="navbar-buttons">
              <Link to="/cart">
                <button className="cart-btn">
                  <AiOutlineShoppingCart className="icon" />
                </button>
              </Link>

              {user ? (
                <button className="user-btn">
                  <Link
                    to={`/dashboard/${user._id}`}
                    className="global-button m-10"
                  >
                    <AiOutlineUser className="icon" />
                    <p>Account</p>
                  </Link>
                </button>
              ) : (
                <button className="button-navbar">
                  <Link to="/account">Sign up</Link>
                </button>
              )}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Navbar;
