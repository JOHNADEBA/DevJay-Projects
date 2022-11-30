import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ menu, social, handleToggle }) => {
	const [showLinks, setShowLinks] = useState(false);
	const linksContainerRef = useRef(null);
	const linksRef = useRef(null);

	const toggleLinks = () => {
		setShowLinks(!showLinks);
	};

	useEffect(() => {
		const linksHeight = linksRef.current.getBoundingClientRect().height;
		if (showLinks) {
			linksContainerRef.current.style.height = `${linksHeight}px`;
		} else {
			linksContainerRef.current.style.height = "0px";
		}
	}, [showLinks]);

	return (
		<nav>
			<div className="nav-center">
				<div className="nav-header">
					<h2 className="logo"> JOHN ADEBA</h2>
					<button className="nav-toggle" onClick={toggleLinks}>
						{!showLinks ? <FaBars /> : <FaTimes />}
					</button>
				</div>
				<div className="links-container" ref={linksContainerRef}>
					<ul className="links" ref={linksRef}>
						{menu.map((link, index) => {
							return (
								<li key={index}>
									<button
										onClick={() => {
											handleToggle(link);
											toggleLinks();
										}}
									>
										{link}
									</button>
								</li>
							);
						})}
					</ul>
				</div>
				<ul className="social-icons">
					{social.map((socialIcon) => {
						const { id, url, icon } = socialIcon;
						return (
							<li key={id}>
								<a href={url} target="_blank " rel="noreferrer">
									{icon}
								</a>
							</li>
						);
					})}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
