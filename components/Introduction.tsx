import Down from "../icons/down.svg";
import { RefObject } from "react";

interface IntroductionProps {
	name: string;
	summary: string;
	scrollTo: RefObject<HTMLDivElement>;
}

const Introduction = ({ name, summary, scrollTo }: IntroductionProps) => {
	const onDownArrowPress = () => {
		scrollTo.current.scrollIntoView({
			behavior: "smooth",
		});
	};
	return (
		<>
			<section id="introduction">
				<p>
					Hi, I'm <span className="highlight">{name}</span>.
					<br />
					{summary}
				</p>
				<Down className="down-arrow" onClick={onDownArrowPress} />
			</section>
		</>
	);
};

export default Introduction;
