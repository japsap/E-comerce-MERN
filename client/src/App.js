import React, { useEffect, useState } from "react";

import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import PostAnAdd from "./Components/UserDash/PostAnAdd";
import PurchaseStatus from "./Components/UserDash/PurchaseStatus";

import useAuth from "./Hooks/useAuth";

import Cart from "./Routes/Cart";
import CatalogCardId from "./Routes/CatalogCardId";
import ErrorPage from "./Routes/Static/ErrorPage";
import MainPage from "./Routes/Static/MainPage";
import MakeAccount from "./Routes/MakeAccount";
import UserDash from "./Routes/UserDash";
import AfterPaymentPage from "./Routes/Static/AfterPaymentPage";
import BillingsAndPayments from "./Components/UserDash/BillingsAndPayments";



const cartItemFromLocalStorage = JSON.parse(localStorage.getItem("cart")) || [];

const App = () => {

  const [user] = useAuth();


  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState(cartItemFromLocalStorage);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="app-container">
      <Navbar user={user} favorites={favorites} cart={cart} />

      <Routes>
        <Route path="/" element={<MainPage user={user} />} />
        <Route
          path="/catalog/:cardId"
          element={
            <CatalogCardId
              favorites={favorites}
              cart={cart}
              setFavorites={setFavorites}
              setCart={setCart}
            />
          }
        />

        <Route
          path="/cart"
          element={<Cart cart={cart} setCart={setCart} user={user} />}
        />
        <Route path="/success" element={<AfterPaymentPage user={user} />} />
        <Route path="*" element={<ErrorPage />} />

        {/* dashboard  */}
        {user ? (
          <Route path="/dashboard/:userId" element={<UserDash user={user} />} />
        ) : (
          <Route path="/account" element={<MakeAccount />} />
        )}
        {/* dashboard  */}


      {/* dashboard order status */}
        {user ? (
          <Route
            path="/dashboard/:userId/orders"
            element={<PurchaseStatus user={user} />}
          />
        ) : (
          <Route
            path="/dashboard/:userId/orders"
            element={<ErrorPage user={user} />}
          />
        )}
        {/* dashboard order status */}



        {/* dashboard payments & billings */}

        {user ? (
          <Route
            path="/dashboard/:userId/payments"
            element={<BillingsAndPayments user={user} />}
          />
        ) : (
          // <Route
          //   path="/dashboard/:userId/payments"
          //   element={<ErrorPage user={user} />}
          // />
          ''
        )}

        {/* dashboard payments & billings */}

        {/*post catalog item */}
        {user.isAdmin ? (
          <Route
            path="/dashboard/:userId/post-an-add"
            element={<PostAnAdd user={user} />}
          />
        ) : (
          <Route
            path="/dashboard/:userId/post-an-add"
            element={<ErrorPage />}
          />
        )}
         {/*post catalog item */}
      </Routes>
    </div>
  );
};

export default App;
