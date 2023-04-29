import React from "react";
import { useTranslation } from "react-i18next";
import "../../../styles/home-styles/brand.css";
import { FcEngineering } from "react-icons/fc";
function Brand() {
	const { t, i18n } = useTranslation();
	return (
		<>
			<section className="brand" id="Courses">
				<div className="custom-shape-divider-top-1638712956"></div>
				<div className="title-section">
					<h2 className="mainTitle">{t("courses.label")}</h2>
				</div>
				<div className="lamar-container">
					<div className="clinic">
						<div className="part">
							<h3>
								{/* <i class="fas fa-solid fa-pencil"></i> */}
								<i className="fas fa-duotone fa-vihara"></i>{" "}
							</h3>
							<h3>{t("archetictTitle.label")}</h3>
							<p>{t("archetictDesc.label")}</p>
						</div>

						<div className="part">
							<h3>
								{/* <i class='fas fa-user-check'></i> */}
								{/* <i class='fas fa-duotone fa-house-chimney-user'></i> */}
								<i className="fas fa-duotone fa-city"></i>{" "}
							</h3>
							<h3>{t("civilTitle.label")}</h3>
							<p>{t("civilDesc.label")}</p>
						</div>
						<div className="part">
							<h3>
								{/* <i class='fab fa-creative-commons-sa'></i> */}
								<i className="fas fa-duotone fa-wrench"></i>{" "}
							</h3>
							<h3>{t("mechanicalTitle.label")}</h3>
							<p>{t("mechanicalDesc.label")}</p>
						</div>
						<div className="part">
							<h3>
								{/* <i class='fas fa-flask'></i> */}
								<i className="fas fa-duotone fa-bolt"></i>
							</h3>
							<h3>{t("electricalTitle.label")}</h3>
							<p>{t("electricalDesc.label")}</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Brand;
