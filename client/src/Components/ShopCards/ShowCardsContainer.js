import React, { useState }from 'react';

import useFetch from '../../Hooks/useFetch';

import Card from './Card';

import { HiSortAscending } from 'react-icons/hi';

import Spinner from '../Spinner/Spinner';



const ShowCardsContainer = () => {

  const [ data, _, isLoading ] = useFetch('https://e-comerce-mern-cp8a.vercel.app/catalog')

  return (
    <section className="ShowCards-Container" id='section-catalog'>
      <div className="sort-products">
        <h1>New Arrivals</h1>
        <div className="sort-btn">
          <p>All products</p>
          <HiSortAscending className="icon"/>
        </div>
      </div>
      {isLoading && <Spinner/> }
      <div className="card-container">
        {data?.catalog?.map((card) => {
          return (
            <Card
              key={card._id}
              {...card}
              card={card}
              id={card.id}
            />
          );
        })}
      </div>
    </section>
  );
}

export default ShowCardsContainer