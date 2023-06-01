import React, { useEffect, useState }  from "react";
import useFetch from "../../Hooks/useFetch";
import useServer from "../../Hooks/useServer";

const AfterPaymentPage = ({ user }) => {

   const { postAccountOrderStatus } = useServer();

    const queryParams = new URLSearchParams(window.location.search)
    const userId = queryParams.get("order")

    const orderData = JSON.parse(userId)
    
    
    useEffect(() => {
      postAccountOrderStatus({ orderStatusData: orderData.itemData, userId: orderData.userId })
    }, [])

    setTimeout(() => {
      window.location.href = `/dashboard/${orderData.userId}/orders`
    }, 3000)
   
  return (
    <div className="successful-container">
      <div className="wrapper">
        <div className="modal">
          <span className="emoji">👏</span>
          <h1>Good job, {user.username}</h1>
          <p>You have succesfully made a purchase 🎉</p>
          <a href="#" className="modal-btn">
            Great, now take me to my purchase status
          </a>
        </div>
      </div>
    </div>
  );
};

export default AfterPaymentPage;
