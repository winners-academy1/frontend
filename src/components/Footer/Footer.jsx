/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "../../styles/footer-styles/footer.css";

import { Link } from "react-router-dom";
function Footer() {
	return (
		<>
			<div className="footer">
				<div className="lamar-container">
					<div className="box">
						<h3>Marietta</h3>
						<ul className="social">
							<li>
								<a
									href="https://m.facebook.com/Lamar-Fashion-Qatar-100896018825886/"
									className="facebook"
									target="_blank"
								>
									<i className="fab fa-facebook-f"></i>
								</a>
							</li>
							<li>
								<a
									href="https://www.instagram.com/lamarfashion.qa?utm_medium=copy_link"
									className="instagram"
									target="_blank"
								>
									<i class="fab fa-instagram"></i>
								</a>
							</li>
							<li>
								<a
									href="https://m.facebook.com/Lamar-Fashion-Qatar-100896018825886/"
									className="twitter"
									target="_blank"
								>
									<i className="fab fa-twitter"></i>
								</a>
							</li>
						</ul>
						<p className="text">
							Welcome to our website do not hesitate to contact with us.
						</p>
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
									<i class="fas fa-angle-double-right"></i> About Us
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
									<i class="fas fa-angle-double-right"></i> Contact us
								</Link>
							</li>
						</ul>
					</div>
					<div className="box">
						<div className="line">
							<i className="fas fa-map-marker-alt fa-fw"></i>
							<div className="info">Canada</div>
						</div>
						<div className="line">
							<i className="far fa-clock fa-fw"></i>
							<div className="info">Business Hours: From 09:00 To 22:00</div>
						</div>
						<div className="line">
							<i className="fas fa-phone-volume fa-fw"></i>
							<div className="info">
								<span>+999955554444</span>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-pay">
					<div className="lamar-container">
						<p className="copyright">Powerd By A.A 💻</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default Footer;
