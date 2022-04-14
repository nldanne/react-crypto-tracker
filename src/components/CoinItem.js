import React from 'react';
import { CryptoState } from '../CryptoContext';
import '../styles/CoinItem.scss'

const CoinItem = ({coins}) => {
  const { symbol } = CryptoState();

  function numberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  return (
    <div className='coin-row'>
      <p>{coins.market_cap_rank}</p>
      <div className='img-symbol'>
        <img src={coins.image} alt={coins.name}/>
        <p>{coins.symbol.toUpperCase()}</p>
      </div>
      <p>{symbol} {numberWithCommas(coins?.current_price.toFixed(2))}</p>
      <p>{coins.price_change_percentage_24h.toFixed(2)}%</p>
      <p className='hide-mobile'>{symbol} {numberWithCommas(coins.total_volume.toLocaleString())}</p>
      <p className='hide-mobile'>{symbol} {coins.market_cap.toLocaleString()}</p>
    </div>
  )
}

export default CoinItem;