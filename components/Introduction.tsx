interface IntroductionProps {
  name: string;
  summary: string;
}

const Introduction = ({ name, summary }: IntroductionProps) => (
  <section id="introduction">
    <p>
      Hi, I'm <span className="highlight">{name}</span>.
      <br />
      {summary}
    </p>
  </section>
);

export default Introduction;
