import React, { useEffect } from "react";
import "../../../styles/home-styles/studentsAchievements.css";
import { Carousel } from "react-bootstrap";
import { t } from "i18next";
import success1 from "../../../images/studentsAchievements/success-story-1.jpg";
import success2 from "../../../images/studentsAchievements/success-story-2.jpg";
import success3 from "../../../images/studentsAchievements/success-story-3.jpg";

	
function StudentsAchievements() {
	
	useEffect(()=>{
		const next = document.querySelector(".carousel__btn--next"),
		back = document.querySelector(".carousel__btn--back"),
		carousel = document.querySelector(".carousel__cards");
		let angle = 0;

		next.addEventListener("click", () => {
		angle -= 45;
		carousel.style.transform = `translateZ(-25rem) rotateY(${angle}deg)`;
		});

		back.addEventListener("click", () => {
		angle += 45;
		carousel.style.transform = `translateZ(-25rem) rotateY(${angle}deg)`;
		});
	}, []);

	return (
		<>
			<section className="students-achievements" id="students-achievements">
				{/* <div className="big-container"> */}
				<div className="lamar-container">
					<h2 className="mainTitle">Our Students Achievements</h2>
					{/* <div className="container">
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
					</div> */}
					<div class="carousel-box">
						<div class="carousel__cards">
							<div class="carousel__card">
								<img class="carousel__img"
									src={success1} alt="success1"/>
							</div>
							<div class="carousel__card">
								<img class="carousel__img"
									src={success2} alt="success2"/>
							</div>
							<div class="carousel__card">
								<img class="carousel__img"
									src={success3} alt="success3"/>
							</div>
							<div class="carousel__card">
								<img class="carousel__img"
										src={success1} alt="success1"/>
							</div>
							<div class="carousel__card">
								<img class="carousel__img"
										src={success2} alt="success2"/>
							</div>
							<div class="carousel__card">
								<img class="carousel__img"
										src={success3} alt="success3"/>
							</div>
							<div class="carousel__card">
								<img class="carousel__img"
										src={success1} alt="success1"/>
							</div>
							<div class="carousel__card">
								<img class="carousel__img"
										src={success2} alt="success2"/>
							</div>
						</div>
						<div class="carousel__control">
							<button class="carousel__btn carousel__btn--back">&#8678; Prev</button>
							<button class="carousel__btn carousel__btn--next">Next &#8680;</button>
						</div>
					</div>
				</div>
				{/* </div> */}
			</section>
		</>
	);
}

export default StudentsAchievements;
