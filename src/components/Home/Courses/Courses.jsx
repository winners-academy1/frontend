import React from "react";
import { useTranslation } from "react-i18next";
import "../../../styles/home-styles/brand.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ARABIC from "../../../images/courses/ARABIC.png";
import ENGLISH from "../../../images/courses/ENGLISH.png";
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
              navigate("ContactUs");
              window.scrollTo({
                left: 0,
                top: 0,
                behavior: 'smooth',
                });
              }}
              text="Contact Us"
            >
            </Button>
          </div>
          <div className="card course-card right">
            <img src={ARABIC} alt="arabic_course"/>
            <Button onClick={()=>{
              navigate("ContactUs");
              window.scrollTo({
                left: 0,
                top: 0,
                behavior: 'smooth',
                });
              }}
              text="اتصل بنا"
            >
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Courses;
