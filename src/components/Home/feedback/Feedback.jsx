import React from 'react';
import '../../../styles/home-styles/feedback.css';
import { Carousel } from 'react-bootstrap';
function Feedback() {
  return (
    <>
      <section className='feedback' id='feedback'>
        {/* <div className="big-container"> */}
        <div className='lamar-container'>
          <Carousel className='carousel' controls={true} indicators={false} pause={false}>
            <Carousel.Item className='item1'>
              <div className='slide-container'>
                <h3>Our Aims</h3>
                <h4>A technologically green ecosystem </h4>
                <div>To inspire humanity with greener, more sustainable designs through building platforms of efficiency and standards for our future cities. </div>
              </div>
            </Carousel.Item>

            <Carousel.Item className='item2'>
              <div className='slide-container'>
                <h3>Ethics and values</h3>
                <h4>Honesty and fairness are the success factor we have always built on. </h4>
                <div>
                  We are committed to operating at the highest ethical standards. By creating a humane organisation, we guarantee honourable dealings that render an exemplary output to our clients and
                  society. Our quality of work is a direct result of our values and ethics.{' '}
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item className='item3'>
              <div className='slide-container'>
                <h2>The mission</h2>
                <h4>The engineering firm of the modern era. </h4>
                <div>
                  Streamlining the industry with our engineering and value engineering expertise, through the heavy deployment of technology for cost efficient and sustainable designs that focus on
                  the operating and maintenance factor of each building.
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
        {/* </div> */}
      </section>
    </>
  );
}

export default Feedback;
