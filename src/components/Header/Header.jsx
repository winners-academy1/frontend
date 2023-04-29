/* eslint-disable jsx-a11y/anchor-is-valid */
import { React, useState, useEffect } from "react";
import "../../styles/header-styles/Header.css";
import { useTranslation } from "react-i18next";
// import logo from "../../images/header/lamar-logo-small.png";
import logo from "../../images/header/winners-logo2.png";
import { BsCartFill, BsFillHeartFill, BsPersonCircle } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
function Header() {
	const { t, i18n } = useTranslation();
	const location = useLocation();
	const navigate = useNavigate();
	const [showVerticalNav, setshowVerticalNav] = useState(false);
	const [showDropHome, setShowDropHome] = useState(false);
	const [showDropAbay, setShowDropAbay] = useState(false);
	const [dropDown, setDropDown] = useState(false);
	const [dropDownA, setDropDownA] = useState(false);
	const [y, setY] = useState(1);
	const langKey = "language";
	const [lan, setLan] = useState("En");

	function navigateHandler() {
		if (location.pathname !== "/") {
			navigate("/");
		}
	}
	//   function scrollHandler() {
	//     setY(window.scrollY);
	//   }

	useEffect(() => {
		const lang = localStorage.getItem("lang");
		if (lang) {
			setLan(lang);
		}
		i18n.changeLanguage(lang ? lang : "En");
		// window.addEventListener('scroll', scrollHandler, true);
	}, []);

	return (
		<>
			<section className={y > 0 ? "header header-scroll" : "header"}>
				{showVerticalNav && (
					<div className="vertical-nav-container">
						<ul className="main-nav-phone">
							<li>
								<Link
									to="/"
									onClick={() => {
										window.scrollTo({
											left: 0,
											top: 0,
											behavior: "smooth",
										});
									}}
								>
									<a>{t("home.label")}</a>
								</Link>
								<i
									className={dropDown ? "fas fa-angle-up" : "fas fa-angle-down"}
									onClick={() => {
										setShowDropHome(!showDropHome);
										setDropDown(!dropDown);
									}}
								></i>
								<ul
									className={
										showDropHome
											? "drop-ul-phone drop-ul-phone-scroll"
											: "drop-ul-phone"
									}
								>
									<li>
										<Link to="/AboutUs">{t("aboutus.label")}</Link>
									</li>
									<li>
										<Link to="/ContactUs">{t("contactus.label")}</Link>
									</li>
								</ul>
							</li>
							<li>
								<a href="#Courses" onClick={navigateHandler}>
									<a>{t("courses.label")}</a>
								</a>
							</li>
							<li>
								<a>
									<a href="#whatwedo" onClick={navigateHandler}>
										{t("whatwedo.label")}
									</a>
								</a>
							</li>
						</ul>
					</div>
				)}
				<div
					className={
						y > 0
							? "lamar-container lamar-container-scroll "
							: "lamar-container"
					}
				>
					<ul className={y > 0 ? "main-nav main-nav-scroll " : "main-nav"}>
						<li>
							<Link
								to="/"
								onClick={() => {
									window.scrollTo({
										left: 0,
										top: 0,
										behavior: "smooth",
									});
								}}
							>
								<a>
									{t("home.label")}
									<i class="fas fa-angle-down"></i>
								</a>
							</Link>
							<ul className={y > 0 ? "drop-ul-home-scroll" : "drop-ul-home"}>
								<li>
									<Link to="/AboutUs">{t("aboutus.label")}</Link>
								</li>
								<li>
									<Link to="/ContactUs">{t("contactus.label")}</Link>
								</li>
							</ul>
						</li>
						<li>
							<a href="#Courses" onClick={navigateHandler}>
								<a>{t("courses.label")}</a>
							</a>
						</li>
						<li>
							<a>
								<a href="#whatwedo" onClick={navigateHandler}>
									{t("whatwedo.label")}
								</a>
							</a>
						</li>
					</ul>

					<div className={y > 0 ? "image image-scroll " : "image"}>
						<Link
							to="/"
							onClick={() => {
								window.scrollTo({
									left: 0,
									top: 0,
									behavior: "smooth",
								});
							}}
						>
							<img
								src={logo}
								alt="logo"
								className={y > 0 ? "small-logo" : "logo"}
							/>
							<div>
								<h4>Winners Academy</h4>
								{/* <h4>Academy</h4> */}
							</div>
						</Link>
					</div>
					<section
						className={
							y > 0 ? "rightContainer rightContainer-scroll " : "rightContainer"
						}
					>
						{/* <div className='searchContainer'>
              <input type='text' name='search' placeholder='Search...' className='input' />

              <a href='#' className='btn'>
                <i className='fas fa-search'></i>
              </a>
            </div> */}
						<div></div>
						<ul className="right-nav">
							<li>
								<a>
									<select
										onChange={(e) => {
											setLan(e.target.value);
											localStorage.setItem("lang", e.target.value);
											i18n.changeLanguage(e.target.value);
										}}
										value={lan}
										class="selectpicker"
										data-width="fit"
									>
										<option data-content='<span class="flag-icon flag-icon-us"></span> English'>
											En
										</option>
										<option data-content='<span class="flag-icon flag-icon-mx"></span> Español'>
											Fr
										</option>
									</select>
								</a>
							</li>
							<li>
								<a
									href="http://wa.me/+962786305843"
									target="_blank"
									rel="noreferrer"
								>
									<a>
										<i class="fab fa-whatsapp"></i>
									</a>
								</a>
							</li>
							<li>
								<a
									href="https://www.instagram.com/winners.academy.pte/?igshid=YmMyMTA2M2Y"
									target="_blank"
									rel="noreferrer"
								>
									<a>
										<i class="fab fa-instagram"></i>
									</a>
								</a>
							</li>
							<li>
								<a
									href="https://www.facebook.com/PTEWinners"
									target="_blank"
									rel="noreferrer"
								>
									<a>
										<i class="fab fa-facebook"></i>
									</a>
								</a>
							</li>
						</ul>
					</section>
					<div
						className={showVerticalNav ? "three-dashs active" : "three-dashs "}
						onClick={() => {
							setshowVerticalNav(!showVerticalNav);
						}}
					>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</section>
		</>
	);
}

export default Header;
