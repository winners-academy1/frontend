import {React, useState, useEffect} from 'react';
import '../../../styles/home-styles/hero.css';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import hero_large_displays from "../../../images/hero/hero_large_displays.jpg";
import hero_laptop from "../../../images/hero/hero_laptop.jpg";
import hero_tablet from "../../../images/hero/hero_tablet.jpg";
import hero_mobile from "../../../images/hero/hero_mobile.jpg";
function Hero() {
  const [imageSource, setImageSource] = useState('');

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth > 1200) {
        setImageSource(hero_large_displays);
      } else if (screenWidth > 900) {
        setImageSource(hero_laptop);
      } else if (screenWidth > 530) {
        setImageSource(hero_tablet);
      } else {
        setImageSource(hero_mobile);
      }
    };

    // Initial call to set the image source on component mount
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className='hero'>
        {/* <div className='hero_img'></div> */}
        <img
          style={{ width: '100%', height: '100%' }}
          src={imageSource}
          alt="winners_academy"
        />        {/* <Carousel className='carousel' fade controls={false} indicators={false} pause={false}>
          <Carousel.Item className='item1'></Carousel.Item>

          <Carousel.Item className='item2'></Carousel.Item>
          <Carousel.Item className='item3'></Carousel.Item>
        </Carousel> */}
      </div>
    </>
  );
}

export default Hero;
