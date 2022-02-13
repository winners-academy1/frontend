import React from "react";
import { Link } from "react-router-dom";
import "../../styles/contact-us/contact-us.css";
function ContactUs() {
	return (
		<>
			<section className="contact-us">
				<div className="lamar-container">
					<form action="mailto:anofal719@gmail.com" method="GET">
						<h2>Contact Us</h2>

						<div className="email">
							<h5>by Email: </h5>
							<i className="far fa-paper-plane fa-fw"></i>

							<a href="mailto:Info@maritta.qa" target="_blank">
								Info@marietta.qa
							</a>
						</div>
						<div className="email">
							<h5>by WhatsApp: </h5>
							<i className="fab fa-whatsapp fa-fw"></i>
							<a href="http://wa.me/+97466881109" target="_blank">
								+974 6688555
							</a>
						</div>
					</form>
				</div>
			</section>
		</>
	);
}

export default ContactUs;
