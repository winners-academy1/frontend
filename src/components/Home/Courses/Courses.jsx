import React from "react";
import { useTranslation } from "react-i18next";
import "../../../styles/home-styles/brand.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ARABIC from "../../../images/courses/ARABIC.png";
import ENGLISH from "../../../images/courses/ENGLISH.png";
import ARABIC_CORE from "../../../images/courses/ARABIC_CORE.png";
import ENGLISH_CORE from "../../../images/courses/ENGLISH_CORE.png";
import Button from "../../Common/Button";

function Courses() {
	const navigate = useNavigate();
	const { t, i18n } = useTranslation();

  return (
    <>
      <section className="brand" id="Courses">
        <div className="title-section">
          <h2 className="mainTitle">Online PTE Academic Courses</h2>
        </div>
        <div className="lamar-container">
          <div className="card course-card left">
            <img src={ENGLISH} alt="english_course"/>
            <Button onClick={()=>{
              navigate("PricingPlansAcademic");
              window.scrollTo({
                left: 0,
                top: 0,
                behavior: 'smooth',
              });
            }}
            className="button-text"
              text="Register Now"
            >
            </Button>
          </div>
          <div className="card course-card left">
            <img src={ENGLISH_CORE} alt="english_core" style={{position: "relative", top: "-10px"}}/>
            <Button onClick={()=>{
              navigate("PricingPlansCore?course=english");
              window.scrollTo({
                left: 0,
                top: 0,
                behavior: 'smooth',
                });
              }}
              text="Register Now"
              className="button-text english"
            >
            </Button>
          </div>
          <div className="card course-card right">
            <img src={ARABIC} alt="arabic_course"/>
            <Button onClick={()=>{
              navigate("PricingPlansAcademic");
              window.scrollTo({
                left: 0,
                top: 0,
                behavior: 'smooth',
                });
              }}
              text="سجل الآن"
              className="button-text arabic"
            >
            </Button>
          </div>
          <div className="card course-card left">
            <img src={ARABIC_CORE} alt="arabic_core"/>
            <Button onClick={()=>{
              navigate("PricingPlansCore?course=arabic");
              window.scrollTo({
                left: 0,
                top: 0,
                behavior: 'smooth',
                });
              }}
              text="سجل الآن"
              className="button-text arabic"
            >
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Courses;
