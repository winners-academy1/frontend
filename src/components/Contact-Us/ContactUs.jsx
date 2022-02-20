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
							<i className="fab fa-google fa-fw"></i>

							<a href="Mariettamontreal@gmail.com" target="_blank">
								Mariettamontreal@gmail.com
							</a>
						</div>
						<div className="email">
							<h5>by WhatsApp: </h5>
							<i className="fas fa-phone fa-fw"></i>
							<a href="http://wa.me/+14389210654" target="_blank">
								+1 (438) 921-0654
							</a>
						</div>
					</form>
				</div>
			</section>
		</>
	);
}

export default ContactUs;
