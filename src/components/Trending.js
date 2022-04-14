import React, { useEffect, useState } from 'react';
import { TrendingCoins } from '../config/api';
import { CryptoState } from '../CryptoContext';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../styles/Trending.scss'

//REGEX for Formatting numbers https://sebhastian.com/javascript-format-number-commas/   


const Trending = () => {
  const [trending, setTrending] = useState([]);
  const { currency, symbol } = CryptoState();

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      const { data } = await axios.get(TrendingCoins(currency));
  
      setTrending(data);
    };
  
    //console.log(trending);
  
    fetchTrendingCoins();
  }, [currency]);


  function numberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  return (
    <div className='trending'>
      <h4>Trending coins this week</h4>
      <div className='trending-container'>
        {/*items*/}
      {trending.map((coin) => {
      let profit = coin.price_change_percentage_24h >= 0;

      return (
        <Link to={`/coins/${coin.id}`} className='trending-item' key={coin.name}>
          <img 
            src={coin?.image}
            alt={coin.name}
            height="80px"
            style={{ marginBottom: '10px'}}
          />
          <span>{coin?.symbol}
            &nbsp;
            <span className={`${profit > 0 ? 'green' : 'red'}`}>
              {profit && '+' }{coin?.price_change_percentage_24h?.toFixed(2)}%
              </span>
          </span>
          <span className='price' >
            {symbol} {numberWithCommas(coin?.current_price.toFixed(2))}
          </span>
        </Link>
      )
      })
      }
      </div>
    </div>
  )
}

export default Trending;