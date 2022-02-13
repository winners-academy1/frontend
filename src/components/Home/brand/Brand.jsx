import React from "react";
import "../../../styles/home-styles/brand.css";

function Brand() {
	return (
		<>
			<section className="brand" id="Specialties">
				<div class="custom-shape-divider-top-1638712956"></div>
				<div className="title-section">
					<h2 className="mainTitle">Specialties</h2>
				</div>
				<div className="lamar-container">
					<div class="clinic">
						<div class="part">
							<h3>
								<i class="fas fa-solid fa-pencil"></i>
							</h3>
							<h3>Archetictural Engineering</h3>
							<p>
								We design buildings and homes with high quality and draw the
								plans required for implementation. We also design 3D plans and
								interior design services with very high quality and implement
								and design all architectural requirements
							</p>
						</div>

						<div class="part">
							<h3>
								<i class="fas fa-user-check"></i>
							</h3>
							<h3>Civil Engingeering</h3>
							<p>
								We design and implement building related services Structure,
								including calculation of material quantities Required, number of
								columns and concrete in buildings and Roofs and all services
								related to the building structure.
							</p>
						</div>
						<div class="part">
							<h3>
								<i class="fab fa-creative-commons-sa"></i>
							</h3>
							<h3>Mechanical Engineerin</h3>
							<p>
								We design and supervise mechanical services for buildings with
								the best quality and performance, including water, sewage, air
								conditioning, refrigeration, firefighting and other mechanical
								services.
							</p>
						</div>
						<div class="part">
							<h3>
								<i class="fas fa-flask"></i>
							</h3>
							<h3>Electrical Engineering</h3>
							<p>
								We design and implement electrical services, including internal
								and external lighting services, and electrical power
								calculations for all electrical devices used in buildings.
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Brand;
