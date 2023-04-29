import React from "react";
import "../../../styles/home-styles/feedback.css";
import { Carousel } from "react-bootstrap";
import { t } from "i18next";
import success1 from "../../../images/feedback/success-story-1.jpg";
import success2 from "../../../images/feedback/success-story-2.jpg";
import success3 from "../../../images/feedback/success-story-3.jpg";

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
						pause={false}
					>
						<Carousel.Item className="item1">
							<div className="slide-container">
								{/* <h3>{t("ourAims.label")}</h3>
								<h4>{t("ourAimsDEsc.label")}</h4>
								<div>{t("ourAimsDesc2.label")}</div> */}
								<img src={success1} alt="success1"/>
							</div>
						</Carousel.Item>

						<Carousel.Item className="item2">
							<div className="slide-container">
								{/* <h3>{t("ethis.label")}</h3>
								<h4>{t("ethicDesc.label")}</h4>
								<div>{t("ethicDesc2.label")}</div> */}
								<img src={success2} alt="success2"/>

							</div>
						</Carousel.Item>
						<Carousel.Item className="item3">
							<div className="slide-container">
								{/* <h2>{t("mission.label")}</h2>
								<h4>{t("missionDesc.label")} </h4>
								<div>{t("missionDesc2.label")}</div> */}
								<img src={success3} alt="success3"/>

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
