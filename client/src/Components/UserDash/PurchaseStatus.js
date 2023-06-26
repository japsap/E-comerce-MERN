import React, { useEffect } from "react";

import { useParams } from "react-router";

import DashboardLinks from "./DashboardLinks";

import useFetch from "../../Hooks/useFetch";
import useServer from "../../Hooks/useServer";

import Spinner from "../Spinner/Spinner";

import { AiOutlinePlus } from "react-icons/ai";

const PurchaseStatus = () => {
  const { userId } = useParams();

  const [data, _, isLoading] = useFetch(
    `https://e-comerce-mern-cp8a.vercel.app/user/${userId}`,
    {},
  );

  const { useLogout } = useServer();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="user-dashboard-container">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className="quick-actions">
            <h2>{data.user?.username}'s Account</h2>
            <button className="global-button" onClick={useLogout}>
              Sign out
            </button>
          </div>
          <div className="account-data-conatiner">
            <div className="small-account-box">
              <div
                className="img-container"
                onClick={() => {
                  window.location.href = `/dashboard/${userId}`;
                }}
              >
                <img src={data.user?.userPfp} />
                <div className="image-plus-icon">
                  <AiOutlinePlus className="icon" />
                </div>
              </div>
              <h2>{data.user?.username}</h2>
              <p>{data.user?.email}</p>
              <div className="box-links">
                <DashboardLinks user={data?.user} />
              </div>
            </div>
            <div className="personal-information">
              <h1>See the status of the purchases you've made!</h1>
              <p>
                Manage your personal information, including phone, numbers and
                email address where you can be contacted.
              </p>
              {data?.user?.userCart.length === 0 ? (
                <div className="no-products-bought">
                  <h1>No product were bought by you</h1>
                  <p>
                    It seem like you haven't bought anything from us for now :(
                  </p>
                </div>
              ) : (
                data?.user?.userCart?.map((card) => {
                  const { image, description, title, price, _id, quantity } =
                    card;
                  return (
                    <div key={_id}>
                      <div className="order-status">
                        <span>Approved</span>
                      </div>
                      <div className="order-status-card">
                        <img src={image} />
                        <h4>{title.slice(0, 20) + "..."}</h4>
                        <p className="desc">
                          {description.slice(0, 50) + "..."}
                        </p>
                        <span className="price">{price.toFixed(2)}$</span>
                        <p className="mb-20">{quantity}</p>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PurchaseStatus;
