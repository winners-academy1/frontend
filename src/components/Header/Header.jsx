/* eslint-disable jsx-a11y/anchor-is-valid */
import { React, useState, useEffect } from 'react';
import '../../styles/header-styles/Header.css';
// import logo from "../../images/header/lamar-logo-small.png";
import logo from '../../images/header/Marietta-Logo-HD2.png';
import { BsCartFill, BsFillHeartFill, BsPersonCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
function Header() {
  const [showVerticalNav, setshowVerticalNav] = useState(false);
  const [showDropHome, setShowDropHome] = useState(false);
  const [showDropAbay, setShowDropAbay] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [dropDownA, setDropDownA] = useState(false);
  const [y, setY] = useState(1);

  //   function scrollHandler() {
  //     setY(window.scrollY);
  //   }

  useEffect(() => {
    // window.addEventListener('scroll', scrollHandler, true);
  }, []);

  return (
    <>
      <section className={y > 0 ? 'header header-scroll' : 'header'}>
        {showVerticalNav && (
          <div className='vertical-nav-container'>
            <ul className='main-nav-phone'>
              <li>
                <Link
                  to='/'
                  onClick={() => {
                    window.scrollTo({
                      left: 0,
                      top: 0,
                      behavior: 'smooth',
                    });
                  }}
                >
                  <a>Home</a>
                </Link>
                <i
                  className={dropDown ? 'fas fa-angle-up' : 'fas fa-angle-down'}
                  onClick={() => {
                    setShowDropHome(!showDropHome);
                    setDropDown(!dropDown);
                  }}
                ></i>
                <ul className={showDropHome ? 'drop-ul-phone drop-ul-phone-scroll' : 'drop-ul-phone'}>
                  <li>
                    <a href='#brands'>Brands</a>
                  </li>
                  <li>
                    <a href='#collection'>Collection</a>
                  </li>
                  <li>
                    <a href='#feedback'>Feedback</a>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  to='/Abaya'
                  onClick={() => {
                    window.scrollTo({
                      left: 0,
                      top: 0,
                      behavior: 'smooth',
                    });
                  }}
                >
                  <a>Abaya</a>
                </Link>
                <i
                  className={dropDownA ? 'fas fa-angle-up' : 'fas fa-angle-down'}
                  onClick={() => {
                    setShowDropAbay(!showDropAbay);
                    setDropDownA(!dropDownA);
                  }}
                ></i>
                <ul className={showDropAbay ? 'drop-ul-phone drop-ul-phone-scroll' : 'drop-ul-phone'}>
                  <li>
                    <a href='#lamar'>lamar</a>
                  </li>
                  <li>
                    <a href='#mortaha'>mortaha</a>
                  </li>
                  <li>
                    <a href='#neo'>neo</a>
                  </li>
                  <li>
                    <a href='#shera'>shera</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href='#shalat'>Shalat</a>
              </li>
            </ul>
          </div>
        )}
        <div className={y > 0 ? 'lamar-container lamar-container-scroll ' : 'lamar-container'}>
          <ul className={y > 0 ? 'main-nav main-nav-scroll ' : 'main-nav'}>
            <li>
              <Link
                to='/'
                onClick={() => {
                  window.scrollTo({
                    left: 0,
                    top: 0,
                    behavior: 'smooth',
                  });
                }}
              >
                <a>
                  Home<i class='fas fa-angle-down'></i>
                </a>
              </Link>
              <ul className={y > 0 ? 'drop-ul-home-scroll' : 'drop-ul-home'}>
                <li>
                  <Link to='/AboutUs'>About Us</Link>
                </li>
                <li>
                  <Link to='/ContactUs'>Contact Us</Link>
                </li>
              </ul>
            </li>
            <li>
              <a href='#Specialties'>
                <a>Specialties</a>
              </a>
            </li>
            <li>
              <a>
                <a href='#whatwedo'>What We Do</a>
              </a>
            </li>
          </ul>

          <div className={y > 0 ? 'image image-scroll ' : 'image'}>
            <Link
              to='/'
              onClick={() => {
                window.scrollTo({
                  left: 0,
                  top: 0,
                  behavior: 'smooth',
                });
              }}
            >
              <img src={logo} alt='logo' className={y > 0 ? 'small-logo' : 'logo'} />
              <div>
                <h4>Enterprise</h4>
                <h4>Marietta</h4>
              </div>
            </Link>
          </div>
          <section className={y > 0 ? 'rightContainer rightContainer-scroll ' : 'rightContainer'}>
            {/* <div className='searchContainer'>
              <input type='text' name='search' placeholder='Search...' className='input' />

              <a href='#' className='btn'>
                <i className='fas fa-search'></i>
              </a>
            </div> */}
            <div></div>
            <ul className='right-nav'>
              <li>
                <a href='#'>
                  <a>
                    <i class='fab fa-whatsapp'></i>
                  </a>
                </a>
              </li>
              <li>
                <a href='#'>
                  <a>
                    <i class='fab fa-instagram'></i>
                  </a>
                </a>
              </li>
              <li>
                <a href='#'>
                  <a>
                    <i class='fab fa-facebook'></i>
                  </a>
                </a>
              </li>
            </ul>
          </section>
          <div
            className={showVerticalNav ? 'three-dashs active' : 'three-dashs'}
            onClick={() => {
              setshowVerticalNav(!showVerticalNav);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
