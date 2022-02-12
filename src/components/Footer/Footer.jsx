/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "../../styles/footer-styles/footer.css";
import master from "../../images/header/MasterCard_Logo.svg.png";
import visa from "../../images/header/Visa_Logo.png";
import pay_pal from "../../images/header/PayPal.svg.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="lamar-container">
          <div className="box">
            <h3>Lamar</h3>
            <ul className="social">
              <li>
                <a
                  href="https://m.facebook.com/Lamar-Fashion-Qatar-100896018825886/"
                  className="facebook"
                  target="_blank"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/lamarfashion.qa?utm_medium=copy_link"
                  className="instagram"
                  target="_blank"
                >
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://m.facebook.com/Lamar-Fashion-Qatar-100896018825886/"
                  className="twitter"
                  target="_blank"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
            </ul>
            <p className="text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Temporibus nulla rem, dignissimos iste aspernatur
            </p>
          </div>
          <div className="box">
            <ul className="links">
              <li>
                <Link to="/AboutUs" onClick={()=>{
                  window.scrollTo({
                    left:0,
                    top:0,
                    behavior: 'smooth'
                  })
                }}>
                  <i class="fas fa-angle-double-right"></i> About Us
                </Link>
              </li>
              <li>
              
                  <Link to="/DeliveryPolicy" onClick={()=>{
                  window.scrollTo({
                    left:0,
                    top:0,
                    behavior: 'smooth'
                  })
                }}> 
                  <i class="fas fa-angle-double-right"></i> Delivery
                  </Link>
             
              </li>
              <li>
                
                <Link to="/PrivacyPolicy" onClick={()=>{
                  window.scrollTo({
                    left:0,
                    top:0,
                    behavior: 'smooth'
                  })
                }}> 
                  <i class="fas fa-angle-double-right"></i> Privacy Policy
                  </Link>
             
              </li>
              <li>
              <Link to="/AboutUs" onClick={()=>{
                  window.scrollTo({
                    left:0,
                    top:0,
                    behavior: 'smooth'
                  })
                }}>
                  <i class="fas fa-angle-double-right"></i> Contact us 
               </Link>
              </li>
            </ul>
          </div>
          <div className="box">
            <div className="line">
              <i className="fas fa-map-marker-alt fa-fw"></i>
              <div className="info">Suhaim Bin Hamad Street, Doha, Qatar</div>
            </div>
            <div className="line">
              <i className="far fa-clock fa-fw"></i>
              <div className="info">Business Hours: From 09:00 To 22:00</div>
            </div>
            <div className="line">
              <i className="fas fa-phone-volume fa-fw"></i>
              <div className="info">
                <span>+974 5010 9900</span>
              </div>
            </div>
          </div>
          <div className="box footer-gallery">
            <img
              src="https://i.pinimg.com/originals/67/ef/32/67ef3247138572050210b5ba91e5b4ce.jpg"
              alt=""
            />
            <img
              src="https://i.pinimg.com/originals/ba/19/3c/ba193c385cbd91c7b22ea891c30818fb.jpg"
              alt=""
            />
            <img
              src="https://i.pinimg.com/originals/67/ef/32/67ef3247138572050210b5ba91e5b4ce.jpg"
              alt=""
            />
            <img
              src="https://i.pinimg.com/originals/ba/19/3c/ba193c385cbd91c7b22ea891c30818fb.jpg"
              alt=""
            />
            <img
              src="https://i.pinimg.com/originals/67/ef/32/67ef3247138572050210b5ba91e5b4ce.jpg"
              alt=""
            />
            <img
              src="https://i.pinimg.com/originals/ba/19/3c/ba193c385cbd91c7b22ea891c30818fb.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="footer-pay">
          <div className="lamar-container">
            <p className="copyright">Powerd By A.A 💻</p>
            <div className="info-pay">
              <a href="#policy">
                <div className="image">
                  <img src={visa} alt="" />
                </div>
              </a>
              <a href="#policy">
                <div className="image pay-pal">
                  <img src={pay_pal} alt="" />
                </div>
              </a>
              <a href="#policy">
                <div className="image">
                  <img src={master} alt="" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
