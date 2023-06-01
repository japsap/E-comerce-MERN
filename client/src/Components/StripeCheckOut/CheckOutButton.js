import React, { useState } from "react";
import useAuth from "../../Hooks/useAuth";

import axios from "axios";

const CheckOutButton = ({ cart, setCart }) => {
  const [user] = useAuth();

  const [isProcessing, setIsProcessing] = useState(false);

  const handleCheckout = () => {
    setIsProcessing(true);

    axios
      .post(`http://localhost:5000/create-payment`, {
        userId: user._id,
        itemData: cart,
      })
      .then((response) => {
        if (response.data.url) {
          window.location.href = response.data.url;
          setIsProcessing(false);
        }
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <button onClick={() => handleCheckout()} disabled={isProcessing}>
      {isProcessing ? "Processing ... " : "Pay now"}
    </button>
  );
};

export default CheckOutButton;