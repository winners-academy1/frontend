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
					<h2>MUNTASER QUMSIEH</h2>
					<p>
						Mechanical Engineer with more than 19 years of experience planning,
						developing and implementing Facility Managment,Budgeting ,cost
						control, technical requirements . Experienced manager with excellent
						client and project management skills. Action-oriented with strong
						ability to communicate effectively with technology, executive, and
						business audiences. Skilled Mechanical Engineer with experience in
						the Elecrto-Mechanical industry. Familiar with maintaining and
						rehabitation of Buildings HVAC/Electrical Power/Fire fighting
						systems.
					</p>
					<section className="experience">
						<h2>Experience</h2>
						<div>
							<h4>05/2014 to 03/2016</h4>
							<h4>Mechanical /Facility Engineer KHIDMAH L.L.C</h4>
							<h4>U.A.E,Abu Dhabi</h4>

							<ul>
								<li>
									- Ensuring smooth implementation of administrative activities
									like maintenance of office equipments,transport,house keeping
									and maintenance of office and record keeping of
									Electromechanical Equipments.
								</li>
								<li>
									- Formulating &amp; enforcing EHS policies,procedures,programs
									and standards to ensure saftey of the workers/Employees.
								</li>
								<li>
									- Leading efforts for streamlining processes and generating
									cost saving in the perations;interacting with departments for
									executing maintenance of equipment and enhancing overall
									efficiency.
								</li>
							</ul>
						</div>
						<div>
							<h4>05/2007 to 05/2014 </h4>
							<h4>
								Head Of Maintenance &amp; Property Department Private Buildings
								Est.
							</h4>
							<h4>U.A.E ,Abu Dhabi</h4>

							<ul>
								<li>
									- Shouldered the responsibility of administering the real
									estate &copy; maintenance work of electrical, mechanical and
									civil in different high rise towers, buildings and villas
									located in Abu Dhabi, Dubai&amp; Al Ain.
								</li>
								<li>
									- Overseeing the planning of preventive maintenance and
									compiling the list of suggestions
								</li>
								<li>
									- Responsible for providing technical coordination to
									management for scope and cost estimate for the capital
									improvement programs.
								</li>
								<li>
									- Establishing project review, monitoring and status reporting
									procedures to accurately report progress of the project to the
									seniors.
								</li>
							</ul>
						</div>
						<div>
							<h4>05/2004 to 05/2007 </h4>
							<h4>Maintenance Manager CASSELLES Group </h4>
							<h4>U.A.E,Abu Dhabi</h4>

							<ul>
								<li>
									- Overseeing the planning of preventive maintenance in advance
									and compiling the list of suggestions.{" "}
								</li>
								<li>
									- Developing plans,budgets,specifications and cost estimation
									for assigned projects.
								</li>
								<li>
									- Entrusted with the task of attending any emergency call
									particularly after office hours regarding any problem related
									to the maintenance of electromechanical equipments.
								</li>
							</ul>
						</div>
						<div>
							<h4>05/2002 to 05/2004 </h4>
							<h4>Mechanical Engineer Juma Al Majid Group </h4>
							<h4>U.A.E,Abu Dhabi</h4>

							<ul>
								<li>
									- Inspection field sites to observe and evaluate conditions
									and operability of facilities and structures.
								</li>
								<li>
									- Accountable for advicing and studying specifications,tender
									documents,technical submittals related to the electrical and
									Mechanical works.
								</li>
							</ul>
						</div>
						<div>
							<h4>07/1998 to 03/2002 </h4>
							<h4>Head Of Maintenance Department Arab Business Cooperation</h4>
							<h4> Jordan, Amman</h4>

							<ul>
								<li>
									- Ensuring maintenance of Al Basher Governmental Hospital
									including infrastructure,buildings,HVAC,power
									systems,AMCs,etc.
								</li>
								<li>
									- Inspection field sites to observe and evaluate conditions
									and operability of facilities and structures.
								</li>
							</ul>
						</div>
					</section>
					<section className="eductation">
						<h2>EDUCATION</h2>
						<div>
							<ul>
								<li>
									2012 MBA:Bussiness Administration University Of Atlanta - UAE
								</li>
								<li>
									UAE 1998 Bachelor Of Science: Mechanical of Engineering
									University Of Jordan
								</li>
							</ul>
						</div>
					</section>
				</div>
			</section>
		</>
	);
}

export default AboutUs;
