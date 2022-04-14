import React from 'react';
import Trending from './Trending';

import '../styles/Banner.scss'

const Banner = () => {
  return (
    <section className='banner'>
      <div className='banner-content'>
        <div className='tagline'>
          <h2>Crypto Ocean</h2>
          <h3>Get updated information of all the Crypto Currencies in one place.</h3>
        </div>
        <Trending />
      </div>
    </section>
  )
}

export default Banner;