import React, { useEffect, useState } from "react";
import "../../../styles/home-styles/studentsAchievements.css";
import { t } from "i18next";
import stud_acheiv_1 from "../../../images/studentsAchievements/stud_acheiv_1.jpg";
import stud_acheiv_2 from "../../../images/studentsAchievements/stud_acheiv_2.jpg";
import stud_acheiv_3 from "../../../images/studentsAchievements/stud_acheiv_3.jpg";
import stud_acheiv_4 from "../../../images/studentsAchievements/stud_acheiv_4.jpg";
import stud_acheiv_5 from "../../../images/studentsAchievements/stud_acheiv_5.jpg";
import stud_acheiv_6 from "../../../images/studentsAchievements/stud_acheiv_6.jpg";
import stud_acheiv_7 from "../../../images/studentsAchievements/stud_acheiv_7.jpg";
import stud_acheiv_8 from "../../../images/studentsAchievements/stud_acheiv_8.jpg";
import ViewImage from "../../Common/ViewImage";

const ImagesList = [stud_acheiv_1, stud_acheiv_2, stud_acheiv_3, stud_acheiv_4, stud_acheiv_5, stud_acheiv_6, stud_acheiv_7, stud_acheiv_8];
	
function StudentsAchievements() {
	const [isImageClicked, setIsImageClicked] = useState("");

	useEffect(()=>{
		const next = document.querySelector(".carousel__btn--next"),
		back = document.querySelector(".carousel__btn--back"),
		carousel = document.querySelector(".carousel__cards");
		let angle = 0;
		let autoSlidingInterval
		let isHovered = false;

		//auto sliding
		function startAutoSliding() {
			autoSlidingInterval = setInterval(()=>{
				if (!isHovered) {
					angle -= 45;
					carousel.style.transform = `translateZ(-25rem) rotateY(${angle}deg)`;
				}
			}, 5000);
		};

		startAutoSliding();

		function stopAutoSliding() {
			clearInterval(autoSlidingInterval);
		};


		next.addEventListener("click", () => {
			stopAutoSliding();
			angle -= 45;
			carousel.style.transform = `translateZ(-25rem) rotateY(${angle}deg)`;
			startAutoSliding();
		});

		back.addEventListener("click", () => {
			stopAutoSliding();
			angle += 45;
			carousel.style.transform = `translateZ(-25rem) rotateY(${angle}deg)`;
			startAutoSliding();
		});
		// Event listener for mouseenter event (hover)
		carousel.addEventListener("mouseenter", () => {
			isHovered = true;
			stopAutoSliding();
		});
		
		// Event listener for mouseleave event (hover release)
		carousel.addEventListener("mouseleave", () => {
			isHovered = false;
			startAutoSliding();
		});
		// Event listener for touchstart event (hover)
		carousel.addEventListener("touchstart", () => {
			isHovered = true;
			stopAutoSliding();
		});
		
		// Event listener for touchend event (hover release)
		carousel.addEventListener("touchend", () => {
			isHovered = false;
			startAutoSliding();
		});
	}, []);

	return (
		<>
			<section className="students-achievements" id="students-achievements">
				<div className="lamar-container">
					<h2 className="mainTitle">Winners’ Academy Elite List</h2>
					<div class="carousel-box">
						<div class="carousel__cards">
							{ImagesList.map((img, idx)=>{
								return (
									<div class="carousel__card" onClick={()=>setIsImageClicked(img)}>
										<img class="carousel__img"
											src={img} alt="stud_acheiv"/>
									</div>
								)
							})}
						</div>
						<div class="carousel__control">
							<button class="carousel__btn carousel__btn--back">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z"/></svg>
							</button>
							<button class="carousel__btn carousel__btn--next">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z"/></svg>
							</button>
						</div>
					</div>
				</div>
			</section>
				{isImageClicked && <ViewImage img={isImageClicked} setState={setIsImageClicked}></ViewImage>}
		</>
	);
}

export default StudentsAchievements;
