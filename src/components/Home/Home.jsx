import { React, useState } from "react";
import Brand from "./brand/Brand";
import Hero from "./hero/Hero";
import StudentsAchievements from "./studentsAchievements/StudentsAchievements";
import Feedback from "./feedback/Feedback";

import Shop from "./shop/Shop";

function Home() {
	return (
		<>
			<Hero />
			<Brand />
			<Shop />
			<StudentsAchievements />
			<Feedback />
		</>
	);
}

export default Home;
