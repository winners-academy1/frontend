import React from "react";
import "../../../styles/home-styles/studentsAchievements.css";
import { Carousel } from "react-bootstrap";
import { t } from "i18next";
import success1 from "../../../images/studentsAchievements/success-story-1.jpg";
import success2 from "../../../images/studentsAchievements/success-story-2.jpg";
import success3 from "../../../images/studentsAchievements/success-story-3.jpg";

function StudentsAchievements() {
	return (
		<>
			<section className="students-achievements" id="students-achievements">
				{/* <div className="big-container"> */}
				<div className="lamar-container">
					<h2 className="mainTitle">Our Students Achievements</h2>
					<div className="container">
						<div className="slides">
							<img src={success1}/>
							<img src={success2}/>
							<img src={success3}/>
							<img src={success1}/>
							<img src={success2}/>
							<img src={success3}/>
							<img src={success1}/>
							<img src={success2}/>
						</div>
					</div>
				</div>
				{/* </div> */}
			</section>
		</>
	);
}

export default StudentsAchievements;
