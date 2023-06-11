import { React, useState } from "react";
import Courses from "./Courses/Courses";
import Hero from "./hero/Hero";
import StudentsAchievements from "./studentsAchievements/StudentsAchievements";
import Feedback from "./feedback/Feedback";

import WhatWeDo from "./WhatWeDo/WhatWeDo";

function Home() {
	return (
		<>
			<Hero />
			<WhatWeDo />
			<Courses />
			<StudentsAchievements />
			<Feedback />
		</>
	);
}

export default Home;
