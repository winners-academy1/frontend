import React from "react";
import { Link } from "react-router-dom";
import "../../styles/about-us/about-us.css";
function AboutUs() {
	return (
		<>
			<section className="about-us" id="#About">
				<div className="lamar-container">
					<div className="path">
						<Link to="/">
							<i class="fas fa-home"></i>
						</Link>
						<i class="fas fa-angle-right"></i> <span>About us</span>
					</div>
				</div>
				<div className="lamar-container">
					<p>
						It starts with the conception and ends with the completion of
						something extraordinary. Our dedicated, experienced and skilled team
						of architects, engineers, project managers, and talented executives
						make our clients’ needs their top priority. Our years of experience
						have taught us how to use our time wisely to exceed expectations and
						master excellence.
					</p>
					<ul>
						<li>
							<span>Official name :</span> Enterprice Marietta
						</li>
						<li>
							{" "}
							<span>Address :</span>
							<ul>
								{/* <li>New Industrial Area</li> */}
								<li>Building No: 1, Street: 1, Zone: 1</li>
								<li>Canada - Canada</li>
							</ul>
						</li>
						<li>
							<span>Contact information :</span> +99999999
						</li>
						<li>
							<span>CR number :</span> 222222
						</li>
					</ul>
				</div>
			</section>
		</>
	);
}

export default AboutUs;
