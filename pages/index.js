import Head from "next/head";

import LinkedIn from "../icons/linkedin.svg";
import GitHub from "../icons/github.svg";
import Facebook from "../icons/facebook.svg";
import Instagram from "../icons/instagram.svg";

export default function Home() {
	return (
		<>
			<Head>
				<title>
					Jonathan Dawber | Full-stack developer, architect, leader,
					mentor.
				</title>
				<meta
					name="description"
					content="Jonathan Dawber's personal website. Full-stack developer, architect, leader, mentor."
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, user-scalable=1"
				/>
				<meta
					name="google-site-verification"
					content="c4Xf-Mdm2ka3EEruESb1i7n39zzbG-R1tlXWzWzXB7c"
				/>
				<link
					rel="dns-prefetch"
					href="https://www.googletagmanager.com"
				/>
			</Head>
			<main>
				<section id="introduction">
					<p>
						Hi, I'm <span class="highlight">Jonathan Dawber</span>.
						<br />
						Full-stack developer, architect, leader, mentor.
					</p>
				</section>
				<section id="about">
					<h1>About Me</h1>
					<ol>
						<li>HTML</li>
						<li>CSS</li>
						<li>JavaScript</li>
						<li>React</li>
						<li>Node</li>
						<li>Java</li>
						<li>SAP</li>
						<li>ABAP</li>
						<li>SAPUI5</li>
						<li>Amazon Web Services</li>
						<li>Google Cloud Platform</li>
						<li>SAP Business Technology Platform</li>
						<li>Certified Jira Administrator</li>
						<li>DevSecOps</li>
						<li>CI/CD</li>
						<li>Infrastructure as Code</li>
						<li>Terraform</li>
						<li>DevSecOps</li>
					</ol>
				</section>
				<footer>
					<ul>
						<li>
							<a href="https://www.linkedin.com/in/jdawber/">
								<LinkedIn class="icon" />
							</a>
						</li>
						<li>
							<a href="https://github.com/jdawber/">
								<GitHub class="icon" />
							</a>
						</li>
						<li>
							<a href="https://www.facebook.com/jdawber/">
								<Facebook class="icon" />
							</a>
						</li>
						<li>
							<a href="https://www.instagram.com/jdawber85/">
								<Instagram class="icon" />
							</a>
						</li>
					</ul>
				</footer>
			</main>
		</>
	);
}
