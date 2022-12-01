const Projects = ({ doneProjects, header }) => {
	return (
		<>
			<h3 className="mt3 mb0 tc">
				{header} Project{doneProjects.length > 1 ? "s" : ""}
			</h3>
			<section className="projects">
				{doneProjects.map((project) => {
					const { id, link, github, tools, title, image } = project;
					return (
						<a
							target="_blank "
							rel="noreferrer"
							href={link}
							key={id}
							className="project"
							
						>
							<article>
								<img src={image} alt="pic" />
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
