import styled from 'styled-components';
import Title from './SectionTitle';

const SectionRoot = styled.section<{ $backgroundColour: string }>`
  background: ${(props) => props.$backgroundColour || '#fff'};
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

interface SectionProps {
  title: string;
  backgroundColour: string;
  children: React.ReactNode;
}

const Section = ({ title, backgroundColour, children }: SectionProps) => (
  <SectionRoot $backgroundColour={backgroundColour}>
    <SectionContent>
      <Title>{title}</Title>
      <article>{children}</article>
    </SectionContent>
  </SectionRoot>
);

export default Section;
