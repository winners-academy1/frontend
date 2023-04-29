import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../../styles/about-us/about-us.css";
function AboutUs() {
	const { t, i18n } = useTranslation();
	return (
		<>
			<section className="about-us" id="#About">
				<div className="lamar-container">
					<div className="path">
						<Link to="/">
							<i class="fas fa-home"></i>
						</Link>
						<i class="fas fa-angle-right"></i> <span>{t("aboutus.label")}</span>
					</div>
				</div>
				<div className="lamar-container">
					<h5>
					At Winners Academy, we provide professional online PTE Academic preparation courses to help students succeed in the exam. Our academy is dedicated to equipping students with the necessary skills and knowledge to excel in the PTE Academic exam. With expert instructors and cutting-edge learning resources, our courses are designed to help students achieve their goals and reach their full potential. Whether you're looking to improve your English language proficiency or prepare for the PTE Academic exam, Winners Academy is the right choice for you. Join us today and experience the difference of high-quality online education.
					</h5>
					{/* <h2>MUNTASER QUMSIEH</h2>
					<p>{t("summary.label")}</p>
					<section className="experience">
						<h2>{t("experienceTitle.label")}</h2>
						<div>
							<h4>05/2014 {t("to.label")} 03/2016</h4>
							<h4>{t("jobTitle1.label")}</h4>
							<h4>{t("emarat.label")}</h4>

							<ul>
								<li>{t("jobDesc1part1.label")}</li>
								<li>{t("jobDesc1part2.label")}</li>
								<li>{t("jobDesc1part3.label")}</li>
							</ul>
						</div>
						<div>
							<h4>05/2007 {t("to.label")} 05/2014 </h4>
							<h4>{t("jobTitle2.label")}</h4>
							<h4>{t("emarat.label")}</h4>

							<ul>
								<li>{t("jobDesc2part1.label")}</li>
								<li>{t("jobDesc2part2.label")}</li>
								<li>{t("jobDesc2part3.label")}</li>
								<li>{t("jobDesc2part4.label")}</li>
							</ul>
						</div>
						<div>
							<h4>05/2004 {t("to.label")} 05/2007 </h4>
							<h4>{t("jobTitle3.label")}</h4>
							<h4>{t("emarat.label")}</h4>

							<ul>
								<li>{t("jobDesc3part1.label")}</li>
								<li>{t("jobDesc3part2.label")}</li>
								<li>{t("jobDesc3part3.label")}</li>
							</ul>
						</div>
						<div>
							<h4>05/2002 {t("to.label")} 05/2004 </h4>
							<h4>{t("jobTitle4.label")} </h4>
							<h4>{t("emarat.label")}</h4>

							<ul>
								<li>{t("jobDesc4part1.label")}</li>
								<li>{t("jobDesc4part2.label")}</li>
							</ul>
						</div>
						<div>
							<h4>07/1998 {t("to.label")} 03/2002 </h4>
							<h4>{t("jobTitle5.label")}</h4>
							<h4> {t("jordan.label")}</h4>

							<ul>
								<li>{t("jobDesc5part1.label")}</li>
								<li>{t("jobDesc5part2.label")}</li>
							</ul>
						</div>
					</section>
					<section className="eductation">
						<h2>{t("education.label")}</h2>
						<div>
							<ul>
								<li>{t("educationTitle1.label")}</li>
								<li>{t("educationTitle2.label")}</li>
							</ul>
						</div>
					</section>
					<section className="eductation">
						<h2>{t("AFFILIATIONS.label")}</h2>
						<div>
							<ul>
								<li>{t("AFFILIATIONSDesc1.label")}</li>
								<li>{t("AFFILIATIONSDesc2.label")}</li>
								<li>{t("AFFILIATIONSDesc3.label")}</li>
							</ul>
						</div>
					</section> */}
				</div>
			</section>
		</>
	);
}

export default AboutUs;
