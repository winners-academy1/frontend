import React from "react";
import "../../../styles/home-styles/shop.css";

import engineer from "../../../images/shop/engineers.png";
function Shop() {
	return (
		<>
			<section className="shop" id="whatwedo">
				<div className="lamar-container">
					<section className="leftSection">
						<h2 className="shop-title">What We Do?</h2>
						<h3 className="text">
							It starts with the conception and ends with the completion of
							something extraordinary. Our dedicated, experienced and skilled
							team of architects, engineers, project managers, and talented
							executives make our clients’ needs their top priority. Our years
							of experience have taught us how to use our time wisely to exceed
							expectations and master excellence.
						</h3>
						{/* <button className="button shopBtn">Shop Now</button> */}
					</section>
					<section className="rightSection">
						<img className="image" src={engineer} alt="image" />
					</section>
				</div>
			</section>
		</>
	);
}

export default Shop;
