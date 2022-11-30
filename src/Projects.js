import vue from "./images/vue.png";
import angular from "./images/angular.png";
import react from "./images/react.png";
import html from "./images/html.png";

const Projects = ({ doneProjects, header }) => {
	return (
		<>
			<h3 className="mt3 mb0 tc">
				{header} Project{doneProjects.length > 1 ? "s" : ""}
			</h3>
			<section className="projects">
				{doneProjects.map((project) => {
					const { id, link, github, tools, technology, title } = project;
					return (
						<a
							target="_blank "
							rel="noreferrer"
							href={link}
							key={id}
							className="project"
						>
							<article>
								<img
									src={
										technology === "react"
											? react
											: technology === "vue"
											? vue
											: technology === "angular"
											? angular
											: html
									}
									alt="pic"
								/>
								<div className="project-info">
									<h4 className="title">{title}</h4>
									<div className="project-footer">
										<p>{tools}</p>
										<a href={github}> Github</a>
									</div>
								</div>
							</article>
						</a>
					);
				})}
			</section>
		</>
	);
};
export default Projects;
