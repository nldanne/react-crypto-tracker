import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CryptoState } from '../CryptoContext';
import '../styles/Header.scss';


//https://javascript.plainenglish.io/how-to-detect-clicks-outside-a-react-component-using-hooks-dc8050331b77
const useComponentVisible = (initialIsVisible) => {
  const [isComponentVisible, setIsComponentVisible] = useState(
    initialIsVisible
  );
  const ref = useRef(null);
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsComponentVisible(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });
return { ref, isComponentVisible, setIsComponentVisible };
};


const Header = () => {
  const { currency, setCurrency } = CryptoState();
  //const [isClicked, setIsClicked] = useState(false);
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);

  const currencyHandler = (event) => {
    setCurrency(event.target.textContent);
    //setIsClicked(false);
    //console.log(event.target.textContent);
    setIsComponentVisible(false);
  };

  return (
    <header>
      <nav className='navbar'>
      <h1><Link to='/'>Crypto Ocean</Link></h1>
      <div className='dropdown'>
       {/*} <div className='dropdown-btn' onClick={() => setIsClicked(!isClicked)}>{currency}</div> */}
        <div className='dropdown-btn' onClick={() => setIsComponentVisible(!isComponentVisible)}>{currency}</div>

        {isComponentVisible && (
          <ol className='dropdown-content' ref={ref}>
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