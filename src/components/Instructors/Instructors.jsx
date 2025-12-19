import React, { useState } from "react";
import { Link } from "react-router-dom";
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
		name: "Jafar",
		emoji: "👨‍🏫",
		position: "Founder of Winners Academy • Senior PTE Trainer",
		experience: "5 years",
		pteRecord: "Multiple perfect scores (90/90) in both PTE Academic and PTE Core",
		profile: `Jafar is the founder of Winners Academy and one of the leading PTE experts in the region. Over the past five years, he has taken the PTE exam more than ten times to test, refine, and validate new strategies after every major Pearson update — ensuring that the academy always stays ahead of exam changes.

He is also known for his rare talent in simplifying complex concepts, making the most challenging parts of the PTE exam easy for students to understand and apply. This ability, combined with his deep exam knowledge, has helped hundreds of learners achieve their target scores with confidence.`,
		teachingStyle: "Clear, simplified, strategy-focused, and results-driven.",
		images: {
			pteCore: jafarPteCore,
			pteAcademic: jafarPteAcademic,
		},
		accentColor: "#2E7D32", // Green accent for founder
	},
	{
		id: 2,
		name: "Ahlam",
		emoji: "👩‍🏫",
		position: "PTE Trainer",
		experience: "3 years",
		pteRecord: "Perfect 90/90 in both PTE Academic and PTE Core",
		profile: `Ahlam is an experienced PTE instructor with a strong record of helping students reach their target scores. She has taken the PTE exam multiple times to ensure she fully understands the test from a student's perspective as well as an instructor's. Her ability to simplify complex tasks and provide clear, structured guidance makes her one of the academy's most trusted trainers.`,
		teachingStyle: "Supportive, clear, and focused on building confidence.",
		images: {
			pteCore: ahlamPteCore,
			pteAcademic: ahlamPteAcademic,
		},
		accentColor: "#7B1FA2", // Purple accent
	},
];

// Component for displaying score report images with lightbox
const ScoreReportImage = ({ src, alt, onClick }) => (
	<div className="score-report-card" onClick={onClick}>
		<img src={src} alt={alt} loading="lazy" />
		<div className="score-report-overlay">
			<i className="fas fa-search-plus"></i>
			<span>View Certificate</span>
		</div>
	</div>
);

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

// Individual Instructor Card Component
const InstructorCard = ({ instructor, isReversed }) => {
	const [lightboxOpen, setLightboxOpen] = useState(false);
	const [lightboxImage, setLightboxImage] = useState({ src: "", alt: "" });

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
			<div className={`instructor-card ${isReversed ? "reversed" : ""}`}>
				<div className="instructor-info">
					<div className="instructor-header">
						<span className="instructor-emoji">{instructor.emoji}</span>
						<div className="instructor-title">
							<h2>{instructor.name}</h2>
							<p className="position">{instructor.position}</p>
						</div>
					</div>

					<div className="instructor-stats">
						<div className="stat-item">
							<i className="fas fa-clock"></i>
							<div>
								<span className="stat-label">Experience</span>
								<span className="stat-value">{instructor.experience}</span>
							</div>
						</div>
						<div className="stat-item">
							<i className="fas fa-trophy"></i>
							<div>
								<span className="stat-label">PTE Record</span>
								<span className="stat-value">{instructor.pteRecord}</span>
							</div>
						</div>
					</div>

					<div className="instructor-profile">
						<h3>Profile</h3>
						{instructor.profile.split("\n\n").map((paragraph, index) => (
							<p key={index}>{paragraph}</p>
						))}
					</div>

					<div className="teaching-style">
						<h3>
							<i className="fas fa-chalkboard-teacher"></i>
							Teaching Style
						</h3>
						<p>{instructor.teachingStyle}</p>
					</div>
				</div>

				<div className="instructor-certificates">
					<h3>Official PTE Score Reports</h3>
					<div className="certificates-grid">
						<div className="certificate-item">
							<h4>PTE Core</h4>
							<ScoreReportImage
								src={instructor.images.pteCore}
								alt={`${instructor.name} PTE Core Score Report`}
								onClick={() =>
									openLightbox(
										instructor.images.pteCore,
										`${instructor.name} PTE Core Score Report`
									)
								}
							/>
						</div>
						<div className="certificate-item">
							<h4>PTE Academic</h4>
							<ScoreReportImage
								src={instructor.images.pteAcademic}
								alt={`${instructor.name} PTE Academic Score Report`}
								onClick={() =>
									openLightbox(
										instructor.images.pteAcademic,
										`${instructor.name} PTE Academic Score Report`
									)
								}
							/>
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

	return (
		<section className="instructors-page">
			<div className="lamar-container">
				<div className="path">
					<Link to="/">
						<i className="fas fa-home"></i>
					</Link>
					<i className="fas fa-angle-right"></i>
					<span>Our Instructors</span>
				</div>
			</div>

			<div className="instructors-hero">
				<div className="lamar-container">
					<h1>Meet Our Expert Instructors</h1>
					<p>
						Learn from the best PTE trainers in the region. Our instructors have
						achieved perfect scores and helped hundreds of students reach their
						target scores.
					</p>
				</div>
			</div>

			<div className="instructors-list">
				<div className="lamar-container">
					{instructorsData.map((instructor, index) => (
						<InstructorCard
							key={instructor.id}
							instructor={instructor}
							isReversed={index % 2 !== 0}
						/>
					))}
				</div>
			</div>

			<div className="instructors-cta">
				<div className="lamar-container">
					<h2>Ready to Start Your PTE Journey?</h2>
					<p>Join Winners Academy and learn from our expert instructors.</p>
					<div className="cta-buttons">
						<Link to="/PricingPlans?course=arabic&type=core" className="cta-btn primary">
							View Courses
						</Link>
						<Link to="/ContactUs" className="cta-btn secondary">
							Contact Us
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Instructors;
