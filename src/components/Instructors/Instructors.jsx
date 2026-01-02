import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../../styles/instructors/instructors.css";

// Import instructor images
import jafarPteCore from "../../images/instructors/jafar-pte-core.jpg";
import jafarPteAcademic from "../../images/instructors/jafar-pte-academic.jpg";
import ahlamPteCore from "../../images/instructors/ahlam-pte-core.jpg";
import ahlamPteAcademic from "../../images/instructors/ahlam-pte-academic.jpg";

// Instructor data - easily scalable by adding more instructors to this array
const instructorsData = [
	{
		id: 1,
		name: "JAFAR",
		position: "FOUNDER & SENIOR PTE TRAINER",
		experience: "5+ Years Experience",
		pteRecord: "Multiple Perfect PTE Scores (90/90)",
		examTypes: "PTE Academic & PTE Core",
		profileHighlights: [
			"Founder of Winners Academy and one of the leading PTE experts in the industry",
			"Has taken the PTE exam 10+ times to test and validate strategies after every Pearson update",
			"Helped thousands of students achieve their target scores on the first attempt",
		],
		teachingStyle: "Clear, simplified, strategy-focused, and results-driven.",
		images: {
			pteCore: jafarPteCore,
			pteAcademic: jafarPteAcademic,
		},
		gradient: "linear-gradient(135deg, #001f2a 0%, #002c38 50%, #024e5e 100%)",
		badge: "FOUNDER",
	},
	{
		id: 2,
		name: "AHLAM",
		position: "PTE TRAINER",
		experience: "3+ Years Experience",
		pteRecord: "Perfect PTE Scores (90/90)",
		examTypes: "PTE Academic & PTE Core",
		profileHighlights: [
			"Hands-on PTE exam experience from both student and instructor perspectives",
			"One of the academy's most trusted and reliable PTE trainers",
		],
		teachingStyle: "Supportive, clear, and focused on building confidence.",
		images: {
			pteCore: ahlamPteCore,
			pteAcademic: ahlamPteAcademic,
		},
		gradient: "linear-gradient(135deg, #002c38 0%, #035f7a 50%, #037fa2 100%)",
		badge: "EXPERT",
	},
];

// Lightbox component for viewing images
const ImageLightbox = ({ isOpen, imageSrc, imageAlt, onClose }) => {
	if (!isOpen) return null;

	return (
		<div className="lightbox-overlay" onClick={onClose}>
			<div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
				<button className="lightbox-close" onClick={onClose}>
					<i className="fas fa-times"></i>
				</button>
				<img src={imageSrc} alt={imageAlt} />
			</div>
		</div>
	);
};

// Premium Instructor Section Component
const InstructorSection = ({ instructor, index }) => {
	const [lightboxOpen, setLightboxOpen] = useState(false);
	const [lightboxImage, setLightboxImage] = useState({ src: "", alt: "" });
	const isEven = index % 2 === 0;

	const openLightbox = (src, alt) => {
		setLightboxImage({ src, alt });
		setLightboxOpen(true);
		document.body.style.overflow = "hidden";
	};

	const closeLightbox = () => {
		setLightboxOpen(false);
		document.body.style.overflow = "unset";
	};

	return (
		<>
			<div className="instructor-section" style={{ background: instructor.gradient }}>
				<div className="instructor-section-inner">
					{/* Decorative Elements */}
					<div className="decoration-circle decoration-circle-1"></div>
					<div className="decoration-circle decoration-circle-2"></div>
					<div className="decoration-line"></div>

					<div className={`instructor-content ${isEven ? "" : "reversed"}`}>
						{/* Left Side - Info */}
						<div className="instructor-bio">
							<div className="instructor-badge">{instructor.badge}</div>
							<h2 className="instructor-name">{instructor.name}</h2>
							<p className="instructor-position">{instructor.position}</p>

							<div className="instructor-achievements">
								<div className="achievement-card">
									<div className="achievement-icon">
										<i className="fas fa-clock"></i>
									</div>
									<div className="achievement-info">
										<span className="achievement-label">EXPERIENCE</span>
										<span className="achievement-value">{instructor.experience}</span>
									</div>
								</div>
								<div className="achievement-card">
									<div className="achievement-icon">
										<i className="fas fa-trophy"></i>
									</div>
									<div className="achievement-info">
										<span className="achievement-label">PTE SCORE</span>
										<span className="achievement-value">{instructor.pteRecord}</span>
									</div>
								</div>
								<div className="achievement-card full-width">
									<div className="achievement-icon">
										<i className="fas fa-certificate"></i>
									</div>
									<div className="achievement-info">
										<span className="achievement-label">CERTIFIED IN</span>
										<span className="achievement-value">{instructor.examTypes}</span>
									</div>
								</div>
							</div>

							<div className="instructor-highlights">
								<h3>PROFILE HIGHLIGHTS</h3>
								<ul>
									{instructor.profileHighlights.map((highlight, idx) => (
										<li key={idx}>
											<i className="fas fa-check-circle"></i>
											<span>{highlight}</span>
										</li>
									))}
								</ul>
							</div>

							<div className="teaching-style-box">
								<div className="teaching-style-header">
									<i className="fas fa-chalkboard-teacher"></i>
									<span>TEACHING STYLE</span>
								</div>
								<p>{instructor.teachingStyle}</p>
							</div>
						</div>

						{/* Right Side - Certificates */}
						<div className="instructor-certificates-showcase">
							<h3 className="certificates-title">
								<i className="fas fa-award"></i>
								OFFICIAL SCORE REPORTS
							</h3>
							<div className="certificates-display">
								<div
									className="certificate-frame"
									onClick={() =>
										openLightbox(
											instructor.images.pteCore,
											`${instructor.name} PTE Core Score Report`
										)
									}
								>
									<div className="certificate-glow"></div>
									<img
										src={instructor.images.pteCore}
										alt={`${instructor.name} PTE Core Score Report`}
										loading="lazy"
									/>
									<div className="certificate-label">
										<span className="cert-type">PTE CORE</span>
										<span className="cert-action">
											<i className="fas fa-expand"></i> VIEW FULL
										</span>
									</div>
								</div>
								<div
									className="certificate-frame"
									onClick={() =>
										openLightbox(
											instructor.images.pteAcademic,
											`${instructor.name} PTE Academic Score Report`
										)
									}
								>
									<div className="certificate-glow"></div>
									<img
										src={instructor.images.pteAcademic}
										alt={`${instructor.name} PTE Academic Score Report`}
										loading="lazy"
									/>
									<div className="certificate-label">
										<span className="cert-type">PTE ACADEMIC</span>
										<span className="cert-action">
											<i className="fas fa-expand"></i> VIEW FULL
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<ImageLightbox
				isOpen={lightboxOpen}
				imageSrc={lightboxImage.src}
				imageAlt={lightboxImage.alt}
				onClose={closeLightbox}
			/>
		</>
	);
};

function Instructors() {
	const { t } = useTranslation();
	const navigate = useNavigate();

	const handleViewCourses = () => {
		navigate("/");
		setTimeout(() => {
			const coursesSection = document.getElementById("Courses");
			if (coursesSection) {
				const yOffset = -100; // Offset for fixed header
				const y = coursesSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
				window.scrollTo({ top: y, behavior: "smooth" });
			}
		}, 100);
	};

	return (
		<section className="instructors-page-v2">
			{/* Breadcrumb */}
			<div className="instructors-breadcrumb">
				<div className="lamar-container">
					<div className="path">
						<Link to="/">
							<i className="fas fa-home"></i>
						</Link>
						<i className="fas fa-angle-right"></i>
						<span>OUR INSTRUCTORS</span>
					</div>
				</div>
			</div>

			{/* Premium Hero Section */}
			<div className="instructors-hero-v2">
				<div className="hero-background">
					<div className="hero-gradient"></div>
					<div className="hero-pattern"></div>
				</div>
				<div className="hero-content">
					<span className="hero-subtitle">WINNERS ACADEMY</span>
					<h1 className="hero-title">MEET OUR EXPERT INSTRUCTORS</h1>
					<div className="hero-divider">
						<span></span>
						<i className="fas fa-star"></i>
						<span></span>
					</div>
					<p className="hero-description">
						Learn from the best PTE trainers in the industry. Our instructors have achieved perfect scores and have helped thousands of students achieve their desired results.
					</p>
					<div className="hero-stats">
						<div className="hero-stat">
							<span className="stat-number">90/90</span>
							<span className="stat-text">PERFECT SCORES</span>
						</div>
						<div className="hero-stat">
							<span className="stat-number">1500+</span>
							<span className="stat-text">STUDENTS TRAINED</span>
						</div>
						<div className="hero-stat">
							<span className="stat-number">8+</span>
							<span className="stat-text">YEARS COMBINED</span>
						</div>
					</div>
				</div>
			</div>

			{/* Instructor Sections */}
			<div className="instructors-showcase">
				{instructorsData.map((instructor, index) => (
					<InstructorSection
						key={instructor.id}
						instructor={instructor}
						index={index}
					/>
				))}
			</div>

			{/* Premium CTA Section */}
			<div className="instructors-cta-v2">
				<div className="cta-background">
					<div className="cta-gradient"></div>
				</div>
				<div className="cta-content">
					<h2>Ready to start your PTE success journey?</h2>
					<p>Join Winners Academy and learn from industry-leading PTE instructors</p>
					<div className="cta-buttons">
						<button onClick={handleViewCourses} className="cta-btn-v2 primary">
							<i className="fas fa-graduation-cap"></i>
							VIEW COURSES
						</button>
						<Link to="/ContactUs" className="cta-btn-v2 secondary">
							<i className="fas fa-envelope"></i>
							CONTACT US
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Instructors;
