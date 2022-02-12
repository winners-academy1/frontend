import React from 'react';
import '../../../styles/home-styles/feedback.css';
function Feedback() {
  return (
    <>
      <section className='feedback' id='feedback'>
        <div className='big-container'>
          <div className='title-section'>
            <h2 className='main-title'>small Feedback</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus illum vel cupiditate dolorum laborum!</p>
          </div>
          <div className='lamar-container'>
            <div className='box'>
              <div className='box-profile'>
                <img src='https://www.worldfootwear.com/media/images/news/wf2014377p.jpg' alt='people' className='img-person' />
                <h3 className='name-person'>ahmad nofal</h3>
                <h4 className='info-person'>client</h4>
              </div>
              <i class='fas fa-quote-left'></i>
              <p className='person-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis distinctio rem laudantium ratione, illo atque consectetur nostrum id. Ullam eaque non tempora minus quaerat cum ex et,.
              </p>
            </div>
            <div className='box'>
              <div className='box-profile'>
                <img src='https://www.worldfootwear.com/media/images/news/wf2014377p.jpg' alt='people' className='img-person' />
                <h3 className='name-person'>ahmad nofal</h3>
                <h4 className='info-person'>client</h4>
              </div>
              <i class='fas fa-quote-left'></i>
              <p className='person-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis distinctio rem laudantium ratione, illo atque consectetur nostrum id. Ullam eaque non tempora minus quaerat cum ex et,
                reiciendis quas odit.
              </p>
            </div>
            <div className='box'>
              <div className='box-profile'>
                <img src='https://www.worldfootwear.com/media/images/news/wf2014377p.jpg' alt='people' className='img-person' />
                <h3 className='name-person'>ahmad nofal</h3>
                <h4 className='info-person'>client</h4>
              </div>
              <i class='fas fa-quote-left'></i>
              <p className='person-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis distinctio rem laudantium ratione, illo atque consectetur nostrum id. Ullam eaque non tempora minus quaerat cum ex et,
                reiciendis quas odit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Feedback;
