import React, { useState, useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../components/Context';
import useHover from '../hooks/useHover';

function Image(props) {
  const { className, img } = props;
  const url = img.url;
  const isFavorite = img.isFavorite;

  const [hovered, ref] = useHover();

  const { toggleFavorite, cartItems, addImageToCart, removeImageFromCart } =
    useContext(Context);

  function entersHover() {
    setHovered(true);
  }

  function leavesHover() {
    setHovered(false);
  }

  function heartIcon() {
    if (isFavorite) {
      return (
        <i
          className='ri-heart-fill favorite'
          onClick={() => toggleFavorite(img.id)}
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          className='ri-heart-line favorite'
          onClick={() => toggleFavorite(img.id)}
        ></i>
      );
    }
  }

  function cartIcon() {
    const isInCart = cartItems.some((item) => item.id === img.id);
    if (isInCart) {
      return (
        <i
          className='ri-shopping-cart-fill cart'
          onClick={() => removeImageFromCart(img.id)}
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          className='ri-add-circle-line cart'
          onClick={() => addImageToCart(img)}
        ></i>
      );
    }
  }

  return (
    <div className={`${className} image-container`} ref={ref}>
      <img src={url} className='image-grid' />

      {heartIcon()}
      {cartIcon()}
    </div>
  );
}

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    url: PropTypes.string,
    id: PropTypes.string,
    isFavorite: PropTypes.bool,
  }).isRequired,
};

export default Image;
