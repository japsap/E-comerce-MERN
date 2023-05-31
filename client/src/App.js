import React, { useState } from "react";

import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import PostAnAdd from "./Components/UserDash/PostAnAdd";
import useAuth from "./Hooks/useAuth";
import CatalogCardId from "./Routes/CatalogCardId";
import ErrorPage from "./Routes/ErrorPage";

import MainPage from "./Routes/MainPage";
import MakeAccount from "./Routes/MakeAccount";
import UserDash from "./Routes/UserDash";

const cartItemFromLocalStorage = JSON.parse(localStorage.getItem("cart")) || [];
const favoritesFromLocalStorage = JSON.parse(localStorage.getItem("cart")) || [];

const App = () => {
  const [user] = useAuth();

  const [favorites, setFavorites] = useState(favoritesFromLocalStorage);
  const [cart, setCart] = useState(cartItemFromLocalStorage);

  return (
    <div className="app-container">
      <Navbar user={user} favorites={favorites} cart={cart} />

      <Routes>
        <Route
          path="/"
          element={<MainPage user={user} favorites={favorites} cart={cart} />}
        />
        <Route
          path="/catalog/:cardId"
          element={<CatalogCardId favorites={favorites} cart={cart} />}
        />

        {user ? (
          <Route path="/dashboard/:userId" element={<UserDash user={user} />} />
        ) : (
          <Route path="/account" element={<MakeAccount />} />
        )}

        {user.isAdmin ? (
          <Route
            path="/dashboard/:userId/post-an-add"
            element={<PostAnAdd user={user} />}
          />
        ) : (
          <Route path="" element={<ErrorPage />} />
        )}

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default App;
