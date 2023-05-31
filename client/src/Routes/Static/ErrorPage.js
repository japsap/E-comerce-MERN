import React from 'react' 

import errorImg from '../../Assets/Images/error.png'
import { Data } from '../../Constants/Data'

const ErrorPage = () => {
  return (
    <div className='errorPage-container'>
      <img src={errorImg}/>
      <div className='error-text'>
        <h1>{Data.errorPage.h1}</h1>
        <p>{Data.errorPage.p}</p>
        <button className='global-button' onClick={() => {window.location.href = '/'}}>{Data.errorPage.button}</button>
      </div>
    </div>
  )
}

export default ErrorPage