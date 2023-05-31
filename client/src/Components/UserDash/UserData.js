import React from "react";

import { Data } from "../../Constants/Data";

const UserData = () => {
  return (
    <div>
      <h1>Personal Information</h1>
      <p>
        Manage your personal information, including phone, numbers and email
        address where you can be contacted
      </p>
      <div className="account-box-datas">
        {Data.accountBoxData.map((card) => (
          <div className="box-card" key={card.id}>
            <div className="text">
              <h3>{card.name}</h3>
              <p>{card.desc}</p>
            </div>
            <i className="icon">{card.icon}</i>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserData;
