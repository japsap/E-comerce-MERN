import React from "react";

import { BsBag } from "react-icons/bs";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Card = ({ name, price, image, getFav, card, removeFromFav, toggleHeart, id }) => {

  return (
    <div className="card-inner">
      {toggleHeart ? (
        <AiOutlineHeart
          className="icon-heart"
          onClick={() => getFav(card)}
        />
      ) : (
        <AiFillHeart
          className="icon-heart red"
          onClick={() => removeFromFav(id)}
        />
      )}
      <img src={image} />
      <div className="card-things">
        <div className="heading-and-price">
          <p className="title">{name}</p>
          <h4 className="price">{price}</h4>
        </div>
        <div className="brand-and-add-to-cart">
          <p>Brand : {name.split(' ')[0]}</p>
          <BsBag className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Card;
