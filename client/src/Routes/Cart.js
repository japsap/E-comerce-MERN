import React from "react";
import { Link } from "react-router-dom";

import useServer from "../Hooks/useServer";

import { Data } from "../Constants/Data";

import CartCard from "../Components/ShopCards/CartCard";
import CheckOutButton from "../Components/StripeCheckOut/CheckOutButton";

import { BsArrowLeft } from 'react-icons/bs'


const Cart = ({ cart, user, setCart }) => {

  const  { useLogout } = useServer()

  const cartTotalAmount = cart.reduce(
    (acc, data) => acc + data.price * data.quantity,
    0,
  );

   //----------cart chaning price -----//

   const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data._id === item._id) {
        ind = index;
      }
    });

    const tempArr = cart;
    tempArr[ind].quantity += d;
    if (tempArr[ind].quantity === 0) {
      tempArr[ind].quantity = 1;
    }

    setCart([...tempArr]);
  };
  //----------cart chaning price -----//

  const clearCart = () => {
    if (
      window.confirm(
        "Are you sure you want to remove all your items from the cart?",
      )
    ) {
      setCart([]);
    }
  };

  return (
    <div className="cart-container">
      <div className="quick-data">
        <div className="mb-20">
          <h2>Review your bag.</h2>
          <p>{cart.length} Items in your cart.</p>
        </div>
        {user ? (
          <button className="global-button" onClick={useLogout}>Sign out</button>
        ) : (
          ''
        )}
      </div>
      <div className="cart-items-container">
        {cart.length === 0 ? (
          <div className="shopping-cart-error-container">
            <img src={Data.emptyCartError.img} />
            <h1 className="purple">{Data.emptyCartError.h1}</h1>
            <p className="gray">{Data.emptyCartError.p}</p>
            <Link to="/">
              <button>{Data.emptyCartError.button}</button>
            </Link>
          </div>
        ) : (
          cart.map((item) => (
            <CartCard
              item={item}
              key={item._id}
              cart={cart}
              setCart={setCart}
              handleChange={handleChange}
            />
          ))
        )}
      </div>

      <div className="cart-checkout d-flex justify-between align-center">
        <div className="promo-cart">
          {cart.length === 0 ? (
            ""
          ) : (
            <button className="clear-cart-btn" onClick={clearCart}>
              <span>Clear cart</span>
            </button>
          )}
        </div>
        {cartTotalAmount == 0 ? (
          ""
        ) : (
          <div className="total-money">
            <p className="gray">
              Subtotal
              <span className="gray">{cartTotalAmount}$</span>
            </p>
            <strike className="gray d-flex justify-between">
              VAT <strike className="gray">100$</strike>
            </strike>
            
            <h3>
              Subtotal <span>{cartTotalAmount.toFixed(2)}  $</span>
            </h3>
            {!user ? (
              <button>
                <Link to="/register">Register</Link>
              </button>
            ) : (
              <Link>
                <CheckOutButton cart={cart} setCart={setCart}/>
              </Link>
            )}
            <Link
              className="d-flex align-center justify-center mt-20 gray continue-shopping"
              to="/"
            >
              <BsArrowLeft className="icon" />
              <p>Continue Shopping</p>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
