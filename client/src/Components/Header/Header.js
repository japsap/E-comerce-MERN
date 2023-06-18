import React from "react";
import { Data } from "../../Constants/Data";

import line1 from "../../Assets/Images/line1.png";
import line2 from "../../Assets/Images/line2.png";
import shoe1 from '../../Assets/Images/shoes/firstShoe.png'
import SwiperHeader from "./SwiperHeader";

const Header = () => {
  return (
    <header className="header-mainPage">
      <div className="header-data">
        <div className="header-text">
          <p className="pHeader">{Data.headerData.h1}</p>
          <p>{Data.headerData.p}</p>
          <div className="header-buttons">
            <button><a href="#section-catalog">{Data.headerData.btn1}</a></button>
            <button><a href="#section-catalog">{Data.headerData.btn2}</a></button>
            <span className="additonal-shit">
              <p className="num">50+</p>
              <p>Types with a <br/> unique design</p>
            </span>
          </div>
          {/* <img src={shoe1} className='shoeImg'/> */}
        </div>
    
        <SwiperHeader />
      </div>

      <div className="header-lines">
        <img src={line1} className="img1" />
        <img src={line2} className="img2" />
      </div>
    </header>
  );
};

export default Header;
