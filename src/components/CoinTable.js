import React, { useEffect, useState } from 'react';
import { CoinList } from '../config/api';
import { CryptoState } from '../CryptoContext';
import axios from 'axios';
import CoinItem from './CoinItem';
import { Link } from 'react-router-dom';
import CoinPage from '../pages/CoinPage';


import '../styles/CoinTable.scss';

const CoinTable = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  const { currency } = CryptoState();

  const handleSearchInput = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    const fetchCoins = async () => {
      const { data } = await axios.get(CoinList(currency));
  
      setCoins(data);
    };
    
    fetchCoins();
  }, [currency]);

  const handleSearch = () => {
    return coins.filter((coin) => {
      return coin.name.toLowerCase().includes(search)
    });
  };


  return (
    <div className='cointable'>
      <div className='cointable-container'>
        <h4>Current Crypto Ranking</h4>
        <div 
          className='search'
          onChange={handleSearchInput}
        >
          <input type='text' placeholder='Search for Cake?'/>
        </div>

      <section>
        <div className='table-head'>
          <p>#</p>
          <p className='coin-name'>Coin</p>
          <p>Price</p>
          <p>24h</p>
          <p className='hide-mobile'>Volume</p>
          <p className='hide-mobile'>Market Cap</p>
        </div>

        {handleSearch().map((coin) => {
          return (
            <Link to={`/coins/${coin.id}`} element={<CoinPage />} key={coin.id}>
              <CoinItem coins={coin} key={coin.name} /> 
            </Link>
          )
        })}
        
      </section>
       
      </div>

    </div>
  )
}

export default CoinTable;