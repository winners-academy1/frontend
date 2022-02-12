/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../../styles/header-styles/fixed-header.css';

function FixedHeader() {
  return (
    <>
      <div className='fixed-header'>
        <div className='lamar-container'>
          <section className='contact-container'>
            <div className='contact-info location'>
              <i className='fas fa-map-marker-alt fa-fw icon'></i>

              <p className='contact-text'>Suhaim Bin Hamad Street, Doha, Qatar</p>
            </div>
            <div className='contact-info'>
              <i className='fas fa-phone-volume fa-fw icon'></i>

              <p className='contact-text'>+974 5010 9900</p>
            </div>
            <div className='contact-info email'>
              <i class='far fa-envelope icon'></i>
              <p className='contact-text'>lamar@lamar-fashion.com</p>
            </div>
          </section>
          <section className='icons-container'>
            <a className='icons' href='https://m.facebook.com/Lamar-Fashion-Qatar-100896018825886/' target='_blank'>
              <i class='fab fa-facebook'></i>
            </a>

            <a className='icons' href='https://www.instagram.com/lamarfashion.qa?utm_medium=copy_link' target='_blank'>
              <i class='fab fa-instagram'></i>
            </a>

            <a className='icons' href='https://m.facebook.com/Lamar-Fashion-Qatar-100896018825886/' target='_blank'>
              <i class='fab fa-twitter'></i>
            </a>
          </section>
        </div>
      </div>
    </>
  );
}

export default FixedHeader;
