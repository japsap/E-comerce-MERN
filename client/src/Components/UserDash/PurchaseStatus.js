import React from "react";

import { useParams } from "react-router";

import DashboardLinks from "./DashboardLinks";

import useFetch from "../../Hooks/useFetch";
import useServer from "../../Hooks/useServer";

const PurchaseStatus = () => {
  const { userId } = useParams();

  const [data] = useFetch(`http://localhost:5000/user/${userId}`, {});

  const { useLogout } = useServer();

  console.log(data);

  return (
    <div className="user-dashboard-container">
      <div className="quick-actions">
        <h2>{data.user?.username}'s Account</h2>
        <button className="global-button" onClick={useLogout}>
          Sign out
        </button>
      </div>
      <div className="account-data-conatiner">
        <div className="small-account-box">
          <img src={data.user?.userPfp} />
          <h2>{data.user?.username}</h2>
          <p>{data.user?.email}</p>
          <div className="box-links">
            <DashboardLinks user={data?.user} />
          </div>
        </div>
        <div className="personal-information">
          <h1>See the status of the purchases you've made!</h1>
          <p>
            Manage your personal information, including phone, numbers and email
            address where you can be contacted
          </p>
          {data?.user?.userCart?.map((card) => {
            const { image, description, title, price, _id, quantity } = card;
            return (
              <div key={_id}>
                <div className="order-status">
                  <span>Approved</span>
                </div>
                <div className="order-status-card">
                  <img src={image} />
                  <h4>{title.slice(0, 20) + "..."}</h4>
                  <p className="desc">{description.slice(0, 50) + "..."}</p>
                  <span className="price">{price.toFixed(2)}$</span>
                  <p className="mb-20">{quantity}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PurchaseStatus;
