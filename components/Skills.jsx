import styled from "styled-components";

import Section from "./Section";

const SkillList = styled.ol`
	text-align: left;
	margin: 0 0 120px 0;
	padding: 0;
`;

const Skill = styled.li`
	list-style-type: none;
	margin-left: 10px;

	&:before {
		content: "\\2713";
		margin-right: 10px;
	}
`;

const Skills = React.forwardRef((props, ref) => {
	const { skills, backgroundColour, animateOnScroll } = props;
	return (
		<Section
			title="Skills"
			backgroundColour={backgroundColour}
			animateOnScroll={animateOnScroll}
			ref={ref}
		>
			<SkillList>
				{skills.map(({ key, name }) => (
					<Skill key={key}>{name}</Skill>
				))}
			</SkillList>
		</Section>
	);
});

export default Skills;
