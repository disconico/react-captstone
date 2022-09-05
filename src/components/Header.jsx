import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../components/Context';

function Header() {
  const { cartItems } = useContext(Context);

  function shoppingCartLogo() {
    if (cartItems.length > 0) {
      return <i className='ri-shopping-cart-fill ri-fw ri-2x'></i>;
    } else {
      return <i className='ri-shopping-cart-line ri-fw ri-2x'></i>;
    }
  }

  return (
    <header>
      <h2>
        <Link to='/react-capstone'>Pic Some</Link>
      </h2>

      <Link to='/react-capstone/cart'>{shoppingCartLogo()}</Link>
    </header>
  );
}

export default Header;
