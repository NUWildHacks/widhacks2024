import { useEffect } from 'react';
import Box from '../components/Box';
import { Decorative, Bold } from '../styles';
import { theme, tracks } from '../variables';
import styled from 'styled-components';

const Container = styled.div`
  padding-top: 100px;
  min-height: 550px;
  min-width: 100%;
  display: flex;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  min-height: 100%;
  width: ${({ width }) => width};
`;

const Title = styled.p`
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  color: var(--gold);
  text-align: center;
  font-size: 90px;

  white-space: nowrap;
  overflow: hidden;
  width: 0;

  &.animate {
    animation: typing 3s steps(90, end) forwards;
  }
`;

export default function About() {
  useEffect(() => {
    let observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    const aboutTitle = document.querySelector('.title');
    observer.observe(aboutTitle);
  }, []);

  return (
    <Container id="about">
      <Column width="25%">
        <Box width="90%" height="35%">
          <Title className="title">ABOUT</Title>
        </Box>
        <Box width="90%" height="20%" className="quote">
          <Bold>
            "<Decorative>B</Decorative>
            ooks are a uniquely portable magic" - Stephen King
          </Bold>
        </Box>
        <Box width="90%" height="40%" className="track">
          <Decorative>~ Track One ~</Decorative>
          <Bold>
            <Decorative>E</Decorative>nigmatic Expedition to the Bibliophile's
            Sanctuary
          </Bold>
        </Box>
      </Column>
      <Column width="55%">
        <Box width="90%" height="25%" fontSize="50px">
          <Decorative>{theme}</Decorative>
        </Box>
        <Box width="90%" height="45%" className="about">
          WildHacks is Northwestern's overnight Hackathon taking place in-person{' '}
          <Bold>April 15-16 2023</Bold>. As Northwestern's largest hackathon,
          WildHacks is an opportunity for students to learn programming skills
          and develop a final project in a collaborative and inclusive
          environment. Through workshops, mentorship, and prizes, WildHacks aims
          to be an inclusive event that welcomes students of all skill levels,
          majors, and backgrounds.
        </Box>
        <Box width="90%" height="25%" className="track">
          <Decorative>~ Track Two ~</Decorative>
          <Bold>
            <Decorative>A</Decorative>lchemist's Challenge: Elixir of
            Empowerment
          </Bold>
        </Box>
      </Column>
      <Column width="25%">
        <Box width="90%" height="45%">
          This is image / logo
        </Box>
        <Box width="90%" height="45%" className="track">
          <Decorative>~ Track Three ~</Decorative>
          <Bold>
            <Decorative>T</Decorative>he Quest for the Elusive Tome
          </Bold>
        </Box>
      </Column>
    </Container>
  );
}
