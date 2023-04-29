import React from "react";
import "../../../styles/home-styles/shop.css";
import { t } from "i18next";
import pte from "../../../images/shop/pte2.png";
function Shop() {
	return (
		<>
			<section className="shop" id="whatwedo">
				<div className="lamar-container">
					<section className="leftSection">
						<h2 className="shop-title">{t("whatwedo.label")}?</h2>
						<p className="text">{t("whatwedoDesc.label")}</p>
						{/* <button className="button shopBtn">Shop Now</button> */}
					</section>
					<section className="rightSection">
						<img className="image" src={pte} alt="image1" />
					</section>
				</div>
			</section>
		</>
	);
}

export default Shop;
