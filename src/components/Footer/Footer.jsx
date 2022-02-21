/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "../../styles/footer-styles/footer.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
function Footer() {
	const { t, i18n } = useTranslation();
	return (
		<>
			<div className="footer">
				<div className="lamar-container">
					<div className="box">
						<h3>Marietta</h3>
						<ul className="social">
							<li>
								<a
									href="https://www.facebook.com/monty.ramzi"
									className="facebook"
									target="_blank"
								>
									<i className="fab fa-facebook-f"></i>
								</a>
							</li>
							<li>
								<a
									href="https://www.instagram.com/mariettamontreal2022/?utm_medium=copy_link"
									className="instagram"
									target="_blank"
								>
									<i class="fab fa-instagram"></i>
								</a>
							</li>
							<li>
								<a
									href="mailto:Mariettamontreal@gmail.com"
									className="twitter"
									target="_blank"
								>
									<i className="far fa-envelope icon"></i>
								</a>
							</li>
						</ul>
						<p className="text">{t("welcome.label")}</p>
					</div>
					<div className="box">
						<ul className="links">
							<li>
								<Link
									to="/AboutUs"
									onClick={() => {
										window.scrollTo({
											left: 0,
											top: 0,
											behavior: "smooth",
										});
									}}
								>
									<i class="fas fa-angle-double-right"></i> {t("aboutus.label")}
								</Link>
							</li>
							{/* <li>
								<Link
									to="/DeliveryPolicy"
									onClick={() => {
										window.scrollTo({
											left: 0,
											top: 0,
											behavior: "smooth",
										});
									}}
								>
									<i class="fas fa-angle-double-right"></i> Delivery
								</Link>
							</li> */}
							{/* <li>
								<Link
									to="/PrivacyPolicy"
									onClick={() => {
										window.scrollTo({
											left: 0,
											top: 0,
											behavior: "smooth",
										});
									}}
								>
									<i class="fas fa-angle-double-right"></i> Privacy Policy
								</Link>
							</li> */}
							<li>
								<Link
									to="/ContactUs"
									onClick={() => {
										window.scrollTo({
											left: 0,
											top: 0,
											behavior: "smooth",
										});
									}}
								>
									<i class="fas fa-angle-double-right"></i>{" "}
									{t("contactus.label")}
								</Link>
							</li>
						</ul>
					</div>
					<div className="box">
						<div className="line">
							<i className="fas fa-map-marker-alt fa-fw"></i>
							<a href="https://www.google.com/maps/place/9390+Av.+De+Chateaubriand,+Montr%C3%A9al,+QC+H2M+1Y1,+Canada/@45.5518999,-73.650547,17z/data=!3m1!4b1!4m5!3m4!1s0x4cc918c471200d33:0x970dd2eb53689bc5!8m2!3d45.5518999!4d-73.6483583">
								<div className="info">
									9390 Av. De Chateaubriand, Montreal,QC, H2M 1Y1
								</div>
							</a>
						</div>
						<div className="line">
							<i className="far fa-envelope icon"></i>
							<a
								href="mailto:Mariettamontreal@gmail.com"
								target="_blank"
								className="info"
							>
								Mariettamontreal@gmail.com
							</a>
						</div>
						<div className="line">
							<i className="fab fa-whatsapp fa-fw icon"></i>
							<div className="info">
								<a
									href="http://wa.me/+14389210654"
									target="_blank"
									rel="noreferrer"
								>
									+1 (438) 921-0654
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-pay">
					<div className="lamar-container">
						<p className="copyright">{t("powered.label")}</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default Footer;
