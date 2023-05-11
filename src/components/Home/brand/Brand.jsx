import React from "react";
import { useTranslation } from "react-i18next";
import "../../../styles/home-styles/brand.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Brand() {
	const navigate = useNavigate();
	const { t, i18n } = useTranslation();

  return (
    <>
      <section className="brand" id="Courses">
        <div className="custom-shape-divider-top-1638712956"></div>
        <div className="title-section">
          {/* <h2 className="mainTitle">{t("courses.label")}</h2> */}
          <h2 className="mainTitle">Online PTE Academic Courses</h2>
        </div>
        <div className="lamar-container">
          <div className="card course-card left">
            <h3 className="course-title">English Course</h3>
			<hr className="hr"/>
            <ul className="card-list left">
              <li>✅ placement test.</li>
              <li>✅ Five interactive online sessions.</li>
              <li>✅ One of the four sections will be covered in each session.</li>
              <li>✅ Session number five is going to be a recap session, that will review all the exam questions.</li>
              <li>✅ Study plans that will guide your daily practice.</li>
              <li>✅ Your answers on practice questions will be evaluated for feedback daily.</li>
              <li>✅ 1-1 evaluation before taking the mock test.</li>
              <li>✅ Free mock test with full analysis.</li>
            </ul>
            <button onClick={()=>navigate("ContactUs")} className="contact-btn">Contact Us</button>
          </div>
          <div className="card course-card right">
            <h3 className="course-title">كورس باللغة العربية</h3>
			<hr className="hr"/>
            <ul className="card-list right">
              <li> .امتحان مستوى ✅</li>
              <li> .خمسة محاضرات تفاعلية أونلاين ✅</li>
              <li>خطط دراسية مناسبة لهدف الطالب وفترة تحضيره ✅</li>
              <li>متابعة يومية لحل الطالب ✅</li>
              <li>تقييم شخصي لكل طالب 1-1 ✅</li>
              <li>امتحانات تجريبة مجانية مطابقة للامتحان الحقيقي ✅</li>
            </ul>
            <button onClick={()=>navigate("ContactUs")} className="contact-btn">اتصل بنا</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Brand;
