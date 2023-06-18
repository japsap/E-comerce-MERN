import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import ShowCardsContainer from '../../Components/ShopCards/ShowCardsContainer'


const MainPage = () => {
  return (
    <div>
        <Header/>
        <ShowCardsContainer/>
        <Footer/>
    </div>
  )
}

export default MainPage