import React from 'react'

import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import MainPage from './Routes/MainPage';

const App = () => {
  return (
    <div className='app-container'>

      <Navbar/>
      
      <Routes>
        <Route path='/' element={<MainPage/>}/>
      </Routes>
    </div>
  )
}

export default App