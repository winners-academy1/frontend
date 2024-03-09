import {React, useState, useEffect} from 'react';
import '../../../styles/home-styles/hero.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import hero_large_displays from "../../../images/hero/hero_large_displays.png";
import hero_laptop from "../../../images/hero/hero_laptop.png";
import hero_tablet from "../../../images/hero/hero_tablet.png";
import hero_mobile from "../../../images/hero/hero_mobile.png";
function Hero({ setIsLoading }) {
  const [imageSource, setImageSource] = useState('');

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth > 1200) {
        setImageSource(hero_large_displays);
      } else if (screenWidth > 1100) {
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
        <img
          src={imageSource}
          alt="winners_academy"
          onLoad={() => {
            console.log('image loaded');
            setIsLoading(false);
          }}
        />
      </div>
    </>
  );
}

export default Hero;
