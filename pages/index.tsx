import Head from "next/head";

import LinkedIn from "../icons/linkedin.svg";
import GitHub from "../icons/github.svg";
import Facebook from "../icons/facebook.svg";
import Instagram from "../icons/instagram.svg";

import { useEffect, useRef } from "react";
import Introduction from "../components/Introduction";
import About from "../components/AboutMe";
import Skills, { Skill } from "../components/Skills";

interface Configuration {
	name: string;
	summary: string;
	googleSiteVerification: string;
	skills: Skill[];
}

const configuration: Configuration = {
	name: "Jonathan Dawber",
	summary: "Specialist in Frontend Development, AWS, CICD and DevOps.",
	googleSiteVerification: "c4Xf-Mdm2ka3EEruESb1i7n39zzbG-R1tlXWzWzXB7c",
	skills: [
		{ key: "html", name: "HTML" },
		{ key: "css", name: "CSS" },
		{ key: "js", name: "JavaScript" },
		{ key: "ts", name: "TypeScript" },
		{ key: "jsx", name: "React" },
		{ key: "next", name: "NextJS" },
		{ key: "node", name: "Node" },
		{ key: "graphql", name: "GraphQL" },
		{ key: "java", name: "Java" },
		{ key: "sap", name: "SAP" },
		{ key: "abap", name: "ABAP" },
		{ key: "sapui5", name: "SAPUI5/OpenUI5" },
		{ key: "fiori", name: "Fiori" },
		{ key: "aws", name: "Amazon Web Services" },
		{ key: "gcp", name: "Google Cloud Platform" },
		{ key: "btp", name: "SAP Business Technology Platform" },
		{ key: "devsecops", name: "DevSecOps" },
		{ key: "cicd", name: "CI/CD" },
		{ key: "iac", name: "Infrastructure as Code" },
		{ key: "terraform", name: "Terraform" },
		{ key: "devex", name: "Developer Experience" },
	],
};

export default function Home() {
	useEffect(() => {
		const animateOnScrollElements =
			document.querySelectorAll(".animate-on-scroll");

		if (animateOnScrollElements.length) {
			const intersectionObserver = new IntersectionObserver(
				(entries, observer) => {
					entries.forEach((entry) => {
						if (entry.intersectionRatio > 0) {
							const target = entry.target;
							target.classList.add("animate");
							observer.unobserve(target);
						}
					});
				}
			);

			animateOnScrollElements.forEach((animateOnScrollElement) => {
				intersectionObserver.observe(animateOnScrollElement);
			});
		}
	}, []);

	const title = `${configuration.name}'s personal website. ${configuration.summary}`;

	let scrollToReference = useRef();

	return (
		<>
			<Head>
				<title>
					{configuration.name} | {configuration.summary}
				</title>
				<meta name="description" content={title} />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, user-scalable=1"
				/>
				<meta
					name="google-site-verification"
					content={configuration.googleSiteVerification}
				/>
				<link rel="dns-prefetch" href="https://www.googletagmanager.com" />
			</Head>
			<main id="main">
				<Introduction
					name={configuration.name}
					summary={configuration.summary}
					scrollTo={scrollToReference}
				/>
				<About
					ref={scrollToReference}
					backgroundColour="#f7f8fa"
					animateOnScroll="fade-up"
				/>
				<Skills
					skills={configuration.skills}
					backgroundColour="#fff"
					animateOnScroll="fade-up"
				/>
				<footer>
					<ul>
						<li>
							<a href="https://www.linkedin.com/in/jdawber/" title="LinkedIn">
								<LinkedIn className="icon" />
							</a>
						</li>
						<li>
							<a href="https://github.com/jdawber/" title="GitHub">
								<GitHub className="icon" />
							</a>
						</li>
						<li>
							<a href="https://www.facebook.com/jdawber/" title="Facebook">
								<Facebook className="icon" />
							</a>
						</li>
						<li>
							<a href="https://www.instagram.com/jdawber85/" title="Instagram">
								<Instagram className="icon" />
							</a>
						</li>
					</ul>
				</footer>
			</main>
		</>
	);
}
