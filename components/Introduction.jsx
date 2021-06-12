import Down from "../icons/down.svg";

const Introduction = ({ name, summary, scrollTo }) => {
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
