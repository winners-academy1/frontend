import React from "react";
import "../../../styles/home-styles/feedback.css";
import { Carousel } from "react-bootstrap";
import { t } from "i18next";
import feedback1 from "../../../images/feedback/feedback1.jpg";
import feedback2 from "../../../images/feedback/feedback2.jpg";
import feedback3 from "../../../images/feedback/feedback3.jpg";
import feedback4 from "../../../images/feedback/feedback4.jpg";

function Feedback() {
	return (
		<>
			<section className="feedback" id="feedback">
				{/* <div className="big-container"> */}
				<div className="lamar-container">
					<Carousel
						className="carousel"
						controls={true}
						indicators={false}
						pause={'hover'}
					>
						<Carousel.Item className="item1">
							<div className="slide-container">
								{/* <h3>{t("ourAims.label")}</h3>
								<h4>{t("ourAimsDEsc.label")}</h4>
								<div>{t("ourAimsDesc2.label")}</div> */}
								<img src={feedback1} alt="feedback1"/>
							</div>
						</Carousel.Item>

						<Carousel.Item className="item2">
							<div className="slide-container">
								{/* <h3>{t("ethis.label")}</h3>
								<h4>{t("ethicDesc.label")}</h4>
								<div>{t("ethicDesc2.label")}</div> */}
								<img src={feedback2} alt="feedback2"/>

							</div>
						</Carousel.Item>
						<Carousel.Item className="item3">
							<div className="slide-container">
								{/* <h2>{t("mission.label")}</h2>
								<h4>{t("missionDesc.label")} </h4>
								<div>{t("missionDesc2.label")}</div> */}
								<img src={feedback3} alt="feedback3"/>

							</div>
						</Carousel.Item>
						<Carousel.Item className="item4">
							<div className="slide-container">
								{/* <h2>{t("mission.label")}</h2>
								<h4>{t("missionDesc.label")} </h4>
								<div>{t("missionDesc2.label")}</div> */}
								<img src={feedback4} alt="feedback4"/>

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
