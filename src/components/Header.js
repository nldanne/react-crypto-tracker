import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CryptoState } from '../CryptoContext';

import '../styles/Header.scss';

const Header = () => {
  const { currency, setCurrency } = CryptoState();
  const [isClicked, setIsClicked] = useState(false);

  const currencyHandler = (event) => {
    //event.preventDefault();
    setCurrency(event.target.textContent);
    setIsClicked(false);
    //console.log(event.target.textContent);
  };


  return (
    <header>
      <nav className='navbar'>
      <h1><Link to='/'>Crypto Ocean</Link></h1>
      <div className='dropdown'>
        <div className='dropdown-btn' onClick={() => setIsClicked(!isClicked)}>{currency}</div>
        {isClicked && (
          <ol className='dropdown-content'>
            <li 
              className='dropdown-item' 
              key='EUR'
              onClick={currencyHandler} 
            >EUR 
            </li>
            <li 
              className='dropdown-item' 
              key='USD' 
              onClick={currencyHandler}
            >USD 
            </li>
            <li 
              className='dropdown-item' 
              key='HUF' 
              onClick={currencyHandler}
            >HUF 
            </li>
          </ol>
        )}
      </div>
      </nav>

    </header>
    )
}

export default Header;