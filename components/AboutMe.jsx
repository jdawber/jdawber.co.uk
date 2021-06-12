import Section from "./Section";

const Skills = React.forwardRef((props, ref) => {
	return (
		<Section title="About Me" {...props} ref={ref}>
			<p>
				Experienced Software Engineering professional with 14+ years’ experience
				working with small and large global organisations.
			</p>
			<p>
				Passion for web technologies with skills in development, software and
				enterprise architecture, project delivery, consultancy, team leadership
				and management.
			</p>
			<p>
				Proven ability to learn new technologies, languages and methodologies
				quickly and apply the knowledge across teams and organisations.
			</p>
			<p>
				Committed to writing clean, well-structured, high-quality applications
				and driven to constantly self-improve and influence others.
			</p>
		</Section>
	);
});

export default Skills;
