import React from 'react';
import './Hero.css';

function Hero(comingImage = '') {
  return (
    <>
      <div
        className='banner_area d-flex align-items-center'
        style={{ backgroundImage: `url('img/banner.jpg')` }}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-12 text-center'>
              <h1>
                Build <span>Your</span> Body
              </h1>
              <a href='/' className='button'>
                {/* <a href='#' className='button'> */}
                START NOW!
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
