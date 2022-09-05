import React, { useContext } from 'react';

import Image from '../components/Image';
import { getClass } from '../utils/setClass';
import { Context } from '../components/Context';

export default function Photos() {
  const { allPhotos, toggleFavorite } = useContext(Context);

  const imageElements = allPhotos.map((img, index) => (
    <Image key={img.id} img={img} className={getClass(index)} />
  ));

  return <main className='photos'>{imageElements}</main>;
}
