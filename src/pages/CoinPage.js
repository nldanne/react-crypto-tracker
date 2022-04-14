import React, { useEffect, useState } from 'react';
import { SingleCoin } from '../config/api';
import { CryptoState } from '../CryptoContext';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';

import '../styles/CoinPage.scss';

const CoinPage = () => {
  const [singleCoin, setSingleCoin] = useState({});
  const params = useParams();

  const { currency, symbol } = CryptoState();


  useEffect(() => {
    const fetchSingleCoin = async () => {
      const { data } = await axios.get(SingleCoin(params.id));
  
      setSingleCoin(data);
    };

    fetchSingleCoin();
  }, [currency, params.id]);

  return (
    <div>
      <div className='coin-container'>
        <div className='content'>
          <h1>{singleCoin.name}</h1>
        </div>

        <div className='content'>
          <div className='rank'>
            <span className='rank-btn'>Rank # {singleCoin.market_cap_rank}</span>
          </div>
          <div className='info'>
            <div className='coin-heading'>
              <img src={singleCoin.image?.small} alt={singleCoin.name} />
              <p>{singleCoin.name}</p>
              <p>{singleCoin.symbol?.toUpperCase()}</p>
            </div>
            <div className='coin-price'>
              <h2>{symbol} {singleCoin.market_data?.current_price?.[currency.toLowerCase()].toLocaleString()}</h2>
            </div>
          </div>
        </div>

        <div className='content'>
          <div className='stats'>
            <div className='left'>
              <div className='row'>
                <h4>24 hour Low</h4>
                <p>{symbol} {singleCoin.market_data?.low_24h?.[currency.toLowerCase()].toLocaleString()}</p>
              </div>
              <div className='row'>
                <h4>24 hour High</h4>
                <p>{symbol} {singleCoin.market_data?.high_24h?.[currency.toLowerCase()].toLocaleString()}</p>
              </div>
            </div>

            <div className='right'>
              <div className='row'>
                <h4>Market Cap</h4>
                <p>{symbol} {singleCoin.market_data?.market_cap?.[currency.toLowerCase()].toLocaleString()}</p>
              </div>
              <div className='row'>
                <h4>Circulating Supply</h4>
                <p>{singleCoin.market_data?.circulating_supply}</p>
              </div>
            </div>

          </div>
        </div>

        <div className='content'>
          <div className='about'>
            <h4>About</h4>
            <p 
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(singleCoin.description?.en)
              }}
            >
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoinPage;