import { React, useState } from 'react';
import Brand from './brand/Brand';
import Hero from './hero/Hero';
import Feedback from './feedback/Feedback';
import Products from './products/Products';
import Shop from './shop/Shop';

function Home() {
  return (
    <>
      <Hero />
      <Brand />
      <Shop />
      <Products />
      <Feedback />
    </>
  );
}

export default Home;
