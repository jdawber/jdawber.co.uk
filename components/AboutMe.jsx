import Image from "next/image";
import { forwardRef } from "react";
import styled from "styled-components";

import Section from "./Section";

const HopinLogoContainer = styled.div`
	margin-top: 2rem;
`;

const Skills = forwardRef((props, ref) => (
	<Section title="About Me" {...props} ref={ref}>
		<p>
			Experienced Software Engineering professional with 15+ years’ experience
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
			Committed to writing clean, well-structured, high-quality applications and
			driven to constantly self-improve and influence others.
		</p>
		<p>
			I'm currently a Senior Frontend Engineer at{" "}
			<a href="https://www.hopin.com/">Hopin</a>, Europe's fastest-growing ever
			start up.
			<HopinLogoContainer>
				<a href="https://www.hopin.com/">
					<Image src="/hopin.png" alt="Hopin" width="128" height="125" />
				</a>
			</HopinLogoContainer>
		</p>
	</Section>
));

export default Skills;
