import React from 'react';
import '../../../styles/home-styles/hero.css';
import { Carousel } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
function Hero() {
  return (
    <>
      <div className='hero'>
        <Carousel className='carousel' fade controls={false} indicators={false} pause={false}>
          <Carousel.Item className='item1'></Carousel.Item>

          <Carousel.Item className='item2'></Carousel.Item>
          <Carousel.Item className='item3'></Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default Hero;
