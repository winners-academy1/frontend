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
									href="Mariettamontreal@gmail.com"
									className="twitter"
									target="_blank"
								>
									<i className="fab fa-google"></i>
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
							<a href="https://www.google.com/maps/place/9390+Av.+De+Chateaubriand,+Montr%C3%A9al,+QC+H2M+1Y1,+Canada/@45.5518999,-73.650547,17z/data=!3m1!4b1!4m5!3m4!1s0x4cc918c471200d33:0x970dd2eb53689bc5!8m2!3d45.5518999!4d-73.6483583">
								<div className="info">
									9390 Av. De Chateaubriand, Montreal,QC, H2M 1Y1
								</div>
							</a>
						</div>
						<div className="line">
							<i className="fab fa-google fa-fw"></i>
							<div className="info">Mariettamontreal@gmail.com</div>
						</div>
						<div className="line">
							<i className="fas fa-phone-volume fa-fw"></i>
							<div className="info">
								<span>+1 (438) 921-0654</span>
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
