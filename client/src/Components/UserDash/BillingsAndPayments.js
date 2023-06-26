import React, { useEffect } from "react";

import { useParams } from "react-router";

import useFetch from "../../Hooks/useFetch";
import useServer from "../../Hooks/useServer";

import DashboardLinks from "./DashboardLinks";

import Spinner from "../Spinner/Spinner";

import { AiOutlinePlus } from "react-icons/ai";

const BillingsAndPayments = ({ user }) => {
  const { userId } = useParams();

  const { useLogout } = useServer();

  const [data, _, isLoading] = useFetch(
    `https://e-comerce-mern-cp8a.vercel.app/user/${user._id}`,
    {},
  );

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
              <h1>See the Payment History of the purchases you've made!</h1>
              <p>
                Manage your personal information, including phone, numbers and
                email address where you can be contacted.
              </p>
              <div className="payment-sort">
                <p>Payment Invoice</p>
                <p>Amount</p>
                <p>Date</p>
                <p>Status</p>
              </div>

              {data?.user?.userCart.length === 0 ? (
                <div className="no-products-bought">
                  <h1>No product were bought by you</h1>
                  <p>
                    It seem like you haven't bought anything from us, to check
                    your Billings :(
                  </p>
                </div>
              ) : (
                <div className="billing-container">
                  {data?.user?.userCart?.map((card) => {
                    const {
                      image,
                      description,
                      title,
                      price,
                      _id,
                      quantity,
                      purchasedAt,
                    } = card;

                    let yy = purchasedAt.split("-")[0];
                    let mm = purchasedAt.split("-")[1];
                    let d = purchasedAt.split("-")[2];
                    let dd = d.split("T")[0];

                    let date = new Date(yy, mm, dd);

                    let day = date.toDateString().split(" ")[2];
                    let month = date.toDateString().split(" ")[1];
                    let year = date.toDateString().split(" ")[3];

                    return (
                      <div key={_id} className="billing-card">
                        <div className="billing-card-inner">
                          <div className="invoice">
                            <span className="mb-20">
                              Invoice
                              <span className="invoice-id">
                                #{_id.slice(-4)}
                              </span>{" "}
                              - {month} {year}
                            </span>
                          </div>
                          <span className="price">{price.toFixed(2)}$</span>
                          <p>
                            {month} {day} {year}
                          </p>
                          <div className="billing-card-status">
                            <span></span>
                            <p>Success</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BillingsAndPayments;
