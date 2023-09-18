import Section from './Section';

interface AboutMeProps {
  backgroundColour: string;
}

const AboutMe = ({ backgroundColour }: AboutMeProps) => (
  <Section title="About Me" backgroundColour={backgroundColour}>
    <p>
      Experienced Software Engineering professional with 16+ years’ experience working with small and large global
      organisations including fast paced, software as a service start-ups.
    </p>
    <p>
      Passion for web technologies with skills in development, software and enterprise architecture, project delivery,
      consultancy, team leadership and management.
    </p>
    <p>
      Proven ability to learn new technologies, languages and methodologies quickly and apply the knowledge across teams
      and organisations.
    </p>
    <p>
      Committed to writing clean, well-structured, high-quality applications and driven to constantly self-improve and
      influence others.
    </p>
    <p>
      I'm currently working at <a href="https://www.and.digital">AND Digital</a> as a Senior Product Developer.
    </p>
  </Section>
);

export default AboutMe;
