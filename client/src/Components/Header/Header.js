import React from "react";
import { Data } from "../../Constants/Data";

import line1 from "../../Assets/Images/line1.png";
import line2 from "../../Assets/Images/line2.png";

const Header = () => {
  return (
    <header className="header-mainPage">
      <div className="header-data">
        <p className="pHeader">{Data.headerData.h1}</p>
        <p>{Data.headerData.p}</p>
        <div className="header-buttons">
          <button>{Data.headerData.btn1}</button>
          <button>{Data.headerData.btn2}</button>
        </div>
      </div>
      <img src={line1} className="img1"/>
      <img src={line2} className="img2"/>
    </header>
  );
};

export default Header;
