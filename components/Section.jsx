import styled from "styled-components";

import Title from "./SectionTitle";

const SectionRoot = styled.section`
	background: ${(props) => props.backgroundColour || "#fff"};
	padding: 25px;
	display: flex;
	justify-content: center;
`;

const SectionContent = styled.div`
	text-align: left;
	width: 100%;

	@media (min-width: 600px) {
		width: 600px;
	}
`;

const Section = React.forwardRef(
	({ title, backgroundColour, animateOnScroll, children }, ref) => {
		let animateOnScrollClasses = "";

		if (animateOnScroll) {
			animateOnScrollClasses = `animate-on-scroll ${animateOnScroll}`;
		}

		return (
			<SectionRoot backgroundColour={backgroundColour} ref={ref}>
				<SectionContent className={animateOnScrollClasses}>
					<Title>{title}</Title>
					<article>{children}</article>
				</SectionContent>
			</SectionRoot>
		);
	}
);

export default Section;
