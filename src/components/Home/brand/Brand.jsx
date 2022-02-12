import React from "react";
import "../../../styles/home-styles/brand.css";

function Brand() {
	return (
		<>
			<section className="brand" id="Specialties">
				<div class="custom-shape-divider-top-1638712956"></div>
				<div className="title-section">
					<h2 className="mainTitle">Specialties</h2>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit.
						Repellendus illum vel cupiditate dolorum laborum!
					</p>
				</div>
				<div className="lamar-container">
					<div class="clinic">
						<div class="part">
							<h3>
								<i class="fas fa-user-md"></i>
							</h3>
							<h3>More experience</h3>
							<p>
								Every year, more than a million people come to Mayo Clinic for
								care. Our highly specialized experts are deeply experienced in
								treating rare and complex conditions.
							</p>
						</div>

						<div class="part">
							<h3>
								<i class="fas fa-user-check"></i>
							</h3>
							<h3>The right answers</h3>
							<p>
								Successful treatment starts with an accurate diagnosis, and our
								experts take the time to get it right. A team of specialists
								will listen to your needs and evaluate your condition from every
								angle to make the very best plan for you.
							</p>
						</div>
						<div class="part">
							<h3>
								<i class="fab fa-creative-commons-sa"></i>
							</h3>
							<h3>Seamless care</h3>
							<p>
								At Midical Clinic, every aspect of your care is coordinated and
								teams of experts work togethe to provide exactly the care you
								need. What might take months elsewhere can often be done in days
								here.
							</p>
						</div>
						<div class="part">
							<h3>
								<i class="fas fa-flask"></i>
							</h3>
							<h3>Unparalleled expertise</h3>
							<p>
								Midical Clinic experts are some of the best in the world. In the
								U.S. News & World Report rankings of top hospitals, Mayo Clinic
								is consistently ranked among the top hospitals in the nation.
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Brand;
