import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h2>
        <Link to='/react-capstone'>Pic Some</Link>
      </h2>

      <Link to='/react-capstone/cart'>
        {' '}
        <i className='ri-shopping-cart-line ri-fw ri-2x'></i>
      </Link>
    </header>
  );
}

export default Header;
