/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import brand13 from '../../../images/brand/test/brand13.jpg';
import brand12 from '../../../images/brand/test/brand12.jpg';
import brand11 from '../../../images/brand/test/brand11.jpg';
import brand14 from '../../../images/brand/test/brand14.jpg';
import brand2 from '../../../images/brand/test/brand2.jpg';
import brand7 from '../../../images/brand/test/brand7.jpg';
import brand18 from '../../../images/brand/test/brand18.jpg';
import brand1 from '../../../images/brand/test/brand1.jpg';
import '../../../styles/home-styles/products.css';
import Flicking from "@egjs/react-flicking";
function Slider() {
  return (
    <>
      <section className='multi-slider'>
        <div className='lamar-container'>
        <Flicking circular={true} >
       
              <div className='box' >
                <div className='slide-img'>
                  <img src={brand13} alt='' />

                  <div className='overlay'>
                    <a href='#' className='buy-btn'>
                      buy now
                    </a>
                  </div>
                </div>

                <div className='details'>
                  <div className='type'>
                    <a href='#'>lolo fashion</a>
                    <span>lamar</span>
                  </div>

                  <a href='#' className='price'>
                    QAR 1,300
                  </a>
                </div>
              </div>
        
         
              <div className='box'>
                <div className='slide-img'>
                  <img src={brand12} alt='' />

                  <div className='overlay'>
                    <a href='#' className='buy-btn'>
                      buy now
                    </a>
                  </div>
                </div>

                <div className='details'>
                  <div className='type'>
                    <a href='#'>lolo fashion</a>
                    <span>lamar</span>
                  </div>

                  <a href='#' className='price'>
                    QAR 1,300
                  </a>
                </div>
              </div>
          
    
              <div className='box'>
                <div className='slide-img'>
                  <img src={brand7} alt='' />

                  <div className='overlay'>
                    <a href='#' className='buy-btn'>
                      buy now
                    </a>
                  </div>
                </div>

                <div className='details'>
                  <div className='type'>
                    <a href=''>lolo fashion</a>
                    <span>lamar</span>
                  </div>

                  <a href='#' className='price'>
                    QAR 1,300
                  </a>
                </div>
              </div>
         
     
              <div className='box'>
                <div className='slide-img'>
                  <img src={brand1} alt='' />

                  <div className='overlay'>
                    <a href='#' className='buy-btn'>
                      buy now
                    </a>
                  </div>
                </div>

                <div className='details'>
                  <div className='type'>
                    <a href='#'>lolo fashion</a>
                    <span>neo</span>
                  </div>

                  <a href='#' className='price'>
                    QAR 1,300
                  </a>
                </div>
              </div>
       
 
              <div className='box'>
                <div className='slide-img'>
                  <img src={brand14} alt='' />

                  <div className='overlay'>
                    <a href='#' className='buy-btn'>
                      buy now
                    </a>
                  </div>
                </div>

                <div className='details'>
                  <div className='type'>
                    <a href='#'>lolo fashion</a>
                    <span>lamar</span>
                  </div>

                  <a href='#' className='price'>
                    QAR 1,300
                  </a>
                </div>
              </div>
       
     
              <div className='box'>
                <div className='slide-img'>
                  <img src={brand11} alt='' />

                  <div className='overlay'>
                    <a href='#' className='buy-btn'>
                      buy now
                    </a>
                  </div>
                </div>

                <div className='details'>
                  <div className='type'>
                    <a href='#'>lolo fashion</a>
                    <span>lamar</span>
                  </div>

                  <a href='#' className='price'>
                    QAR 1,300
                  </a>
                </div>
              </div>
         
        
              <div className='box'>
                <div className='slide-img'>
                  <img src={brand2} alt='' />

                  <div className='overlay'>
                    <a href='#' className='buy-btn'>
                      buy now
                    </a>
                  </div>
                </div>

                <div className='details'>
                  <div className='type'>
                    <a href='#'>lolo fashion</a>
                    <span>lamar</span>
                  </div>

                  <a href='#' className='price'>
                    QAR 1,300
                  </a>
                </div>
              </div>
       
            
              <div className='box'>
                <div className='slide-img'>
                  <img src={brand18} alt='' />

                  <div className='overlay'>
                    <a href='#' className='buy-btn'>
                      buy now
                    </a>
                  </div>
                </div>

                <div className='details'>
                  <div className='type'>
                    <a href='#'>lolo fashion</a>
                    <span>neo</span>
                  </div>

                  <a href='#' className='price'>
                    QAR 1,300
                  </a>
                </div>
              </div>
      
        </Flicking>
         
        </div>
      </section>
    </>
  );
}

export default Slider;
