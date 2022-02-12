import React from 'react';
import '../../../styles/home-styles/hero.css';
import { Carousel } from 'react-bootstrap';
import hero4 from '../../../images/hero/mikita-yo-VpKOiv_6Q1s-unsplash.jpg';
import hero5 from '../../../images/hero/r-architecture-2gDwlIim3Uw-unsplash.jpg';
import hero6 from '../../../images/hero/thisisengineering-raeng-hoivM01c-vg-unsplash.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
function Hero() {
  return (
    <>
      <div className='hero'>
        <Carousel className='carousel' fade controls={false} indicators={false} pause={false}>
          <Carousel.Item className='item1'>
            <div className='lamar-container'>
              <div className='image'>{/* <img className='d-block w-100' src={hero4} alt='First slide' /> */}</div>
              <div className='text first-text'>
                <h2 className='h1'>new arrivals</h2>
                <h4 className='h2'>Style & Comfort</h4>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item className='item2'>
            <div className='lamar-container'>
              <div className='image'>{/* <img className='d-block w-100' src={hero5} alt='First slide' /> */}</div>
              <div className='text second-text'>
                <h2 className='h1'>Define fashion</h2>
                <h4 className='h2'>with Lamar</h4>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item className='item3'>
            <div className='lamar-container'>
              <div className='image'>{/* <img className='d-block w-100' src={hero6} alt='First slide' /> */}</div>
              <div className='text third-text'>
                <h2 className='h1 '>stand out</h2>
                <h4 className='h2 '>from the crowd</h4>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
        <section className='lamar-logo'>www.lamar-fashion.com</section>
      </div>
    </>
  );
}

export default Hero;
