import React, { useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import useFetch from "../Hooks/useFetch";

import { AiOutlineHeart, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import Spinner from "../Components/Spinner/Spinner";

const CatalogCardId = ({ cart, setCart }) => {
  const { cardId } = useParams();

  const [collabse, setCollabse] = useState(true);
  const [added, setAdded] = useState(false);
  const [error, setError] = useState("");

  const [data, _, isLoading] = useFetch(
    `https://e-comerce-mern-cp8a.vercel.app/catalog/${cardId}`,
  );

  const getItem = (item) => {
    setAdded(false);
    let added = false;

    cart?.forEach((product) => {
      if (item._id == product._id) {
        added = true;
      }
    });

    if (added) {
      setError("Item already in cart!");
      setAdded(true);

      setTimeout(() => {
        setError("");
      }, 2000);

      return;
    }
    setCart([...cart, item]);
  };

  window.onload = function () {
    window.scrollTo(0, 0);
  };

  return (
    <div className="CatalogCard-container">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className="image-container">
            <img src={data?.card.image} />
          </div>
          <div className="catalogcard-data">
            <div className="card-items-pos">
              <div className="card-text">
                <p>
                  <Link to="/">Home</Link> / <Link to="/">Catalog</Link> /{" "}
                  {data?.card?.title}
                </p>
                <h3>{data?.card?.title}</h3>
                <p>
                  {data?.card?.title.split(" ")[0]}{" "}
                  {data?.card?.title.split(" ")[1]}{" "}
                  {data?.card?.title.split(" ")[2]}
                </p>
              </div>

              <div className="price">
                <span>{data?.card?.price}$</span>
                <strike>{data?.card?.price + 20}$</strike>
              </div>

              <hr className="line" />

              <div className="buttons">
                <button onClick={() => getItem(data.card)}>Add to Cart</button>
                <AiOutlineHeart className="icon" />
              </div>
              {error && (
                <div className="error-message">
                  <p>{error}</p>
                </div>
              )}

              <div
                className="card-btn-details"
                onClick={() => setCollabse((prev) => !prev)}
              >
                <p>Details</p>
                {collabse ? (
                  <AiOutlineMinus className="icon" />
                ) : (
                  <AiOutlinePlus className="icon" />
                )}
              </div>

              <div className={`${!collabse ? "d-none" : " card-details "}`}>
                <p>{data?.card?.description}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CatalogCardId;
