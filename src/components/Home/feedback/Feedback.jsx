import React from "react";
import "../../../styles/home-styles/feedback.css";
import { Carousel } from "react-bootstrap";
import { t } from "i18next";
import feedback_1 from "../../../images/feedback/feedback_1.jpg";
import feedback_2 from "../../../images/feedback/feedback_2.jpg";
import feedback_3 from "../../../images/feedback/feedback_3.jpg";
import feedback_4 from "../../../images/feedback/feedback_4.jpg";
import feedback_5 from "../../../images/feedback/feedback_5.jpg";
import feedback_6 from "../../../images/feedback/feedback_6.jpg";
import feedback_7 from "../../../images/feedback/feedback_7.jpg";
import feedback_8 from "../../../images/feedback/feedback_8.jpg";

function Feedback() {
	return (
		<>
			<section className="feedback" id="feedback">
				{/* <div className="big-container"> */}
				<div className="lamar-container">
				<h2 className="mainTitle">Winners’ Feedbacks</h2>
					<Carousel
						className="carousel"
						controls={true}
						indicators={false}
						pause={'hover'}
						fade={true}
						prevIcon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>}
						nextIcon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>}
					>
						<Carousel.Item className="item1">
							<div className="slide-container">
								{/* <h3>{t("ourAims.label")}</h3>
								<h4>{t("ourAimsDEsc.label")}</h4>
								<div>{t("ourAimsDesc2.label")}</div> */}
								<img src={feedback_1} alt="feedback_1"/>
							</div>
						</Carousel.Item>

						<Carousel.Item className="item2">
							<div className="slide-container">
								{/* <h3>{t("ethis.label")}</h3>
								<h4>{t("ethicDesc.label")}</h4>
								<div>{t("ethicDesc2.label")}</div> */}
								<img src={feedback_2} alt="feedback_2"/>

							</div>
						</Carousel.Item>
						<Carousel.Item className="item3">
							<div className="slide-container">
								{/* <h2>{t("mission.label")}</h2>
								<h4>{t("missionDesc.label")} </h4>
								<div>{t("missionDesc2.label")}</div> */}
								<img src={feedback_3} alt="feedback_3"/>

							</div>
						</Carousel.Item>
						<Carousel.Item className="item4">
							<div className="slide-container">
								{/* <h2>{t("mission.label")}</h2>
								<h4>{t("missionDesc.label")} </h4>
								<div>{t("missionDesc2.label")}</div> */}
								<img src={feedback_4} alt="feedback_4"/>

							</div>
						</Carousel.Item>
						<Carousel.Item className="item5">
							<div className="slide-container">
								{/* <h2>{t("mission.label")}</h2>
								<h4>{t("missionDesc.label")} </h4>
								<div>{t("missionDesc2.label")}</div> */}
								<img src={feedback_5} alt="feedback_5"/>

							</div>
						</Carousel.Item>
						<Carousel.Item className="item6">
							<div className="slide-container">
								{/* <h2>{t("mission.label")}</h2>
								<h4>{t("missionDesc.label")} </h4>
								<div>{t("missionDesc2.label")}</div> */}
								<img src={feedback_6} alt="feedback_6"/>

							</div>
						</Carousel.Item>
						<Carousel.Item className="item7">
							<div className="slide-container">
								{/* <h2>{t("mission.label")}</h2>
								<h4>{t("missionDesc.label")} </h4>
								<div>{t("missionDesc2.label")}</div> */}
								<img src={feedback_7} alt="feedback_7"/>

							</div>
						</Carousel.Item>
						<Carousel.Item className="item8">
							<div className="slide-container">
								{/* <h2>{t("mission.label")}</h2>
								<h4>{t("missionDesc.label")} </h4>
								<div>{t("missionDesc2.label")}</div> */}
								<img src={feedback_8} alt="feedback_8"/>

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
