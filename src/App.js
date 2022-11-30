import React, { useState } from "react";
import Navbar from "./Navbar";
import Projects from "./Projects";
import { links, social } from "./data";
import "tachyons";

function App() {
	const [projects, setProjects] = useState(links);
	const [header, setHeader] = useState("All");

	const menu = ["All", ...new Set(links.map((link) => link.technology))];

	const handleToggle = (type) => {
		const filteredProjects = links.filter((project) => {
			return project.technology === type;
		});
		setProjects(filteredProjects);
		setHeader(type);
	};

	return (
		<>
			<Navbar handleToggle={handleToggle} menu={menu} social={social}></Navbar>
			<Projects header={header} doneProjects={projects}></Projects>
		</>
	);
}

export default App;
