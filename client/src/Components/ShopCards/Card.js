import React from "react";
import { Link } from "react-router-dom";

import { BsBag } from "react-icons/bs";

import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Card = ({ title, price, image, getFav, card, removeFromFav, _id, fav }) => {
  return (
    <div className="card-inner">
      {!fav ? (
        <AiOutlineHeart
          className="icon-heart"
          onClick={() => getFav(card)}
        />
      ) : (
        <AiFillHeart
          className="icon-heart red"
          onClick={() => removeFromFav(_id)}
        />
      )}
      <Link to={`/catalog/${_id}`}>
        <img src={image} />
      </Link>
      <div className="card-things">
        <div className="heading-and-price">
          <p className="title">{title}</p>
          <h4 className="price">{price}$</h4>
        </div>
        <div className="brand-and-add-to-cart">
          <p>Brand : {title.split(' ')[0]}</p>
          <BsBag className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Card;
