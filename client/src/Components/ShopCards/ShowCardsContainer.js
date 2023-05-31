import React, { useState }from 'react';

import useFetch from '../../Hooks/useFetch';

import Card from './Card';

import { HiSortAscending } from 'react-icons/hi';

import { Data } from '../../Constants/Data';

const ShowCardsContainer = () => {

  const [ data, setData ] = useFetch('http://localhost:5000/catalog')

  const [ favorites, setFavorites ] = useState([])

  const getFav = (item) => {
    setFavorites([...favorites, item])
  }

  const removeFromFav = (id) => {
    const filteredFavs = favorites.filter((card) => card.id !== id)
    setFavorites(filteredFavs)
  };


  return (
    <div className="ShowCards-Container">
      <div className="sort-products">
        <h1>New Arrivals</h1>
        <div className="sort-btn">
          <p>All products</p>
          <HiSortAscending className="icon" />
        </div>
      </div>
      <div className="card-container">
        {data?.catalog?.map((card) => {
          return (
            <Card
              key={card.id}
              {...card}
              card={card}
              getFav={getFav}
              id={card.id}
              removeFromFav={removeFromFav}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ShowCardsContainer