import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Cart from './pages/Cart';
import Photos from './pages/Photos';

export default function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path='/react-capstone' element={<Photos />} />
        <Route path='/react-capstone/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}
