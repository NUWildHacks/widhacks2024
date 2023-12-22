import { Decorative } from '../styles';
import { theme, tracks, about } from '../variables';
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

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ width }) => width};
  height: ${({ height }) => height};

  border: 4px solid var(--brown);
  border-radius: 15px;

  color: ${(props) => props.color || `var(--brown)`};
  font-size: ${(props) => props.fontSize || '20px'};
`;

export default function About() {
  return (
    <Container id="about">
      <Column width="25%">
        <Box width="90%" height="35%">
          This is image or about
        </Box>
        <Box width="90%" height="20%">
          This can be a quote
        </Box>
        <Box width="90%" height="40%">
          {tracks[0]}
        </Box>
      </Column>
      <Column width="55%">
        <Box width="90%" height="25%" fontSize="50px">
          <Decorative>{theme}</Decorative>
        </Box>
        <Box width="90%" height="45%">
          {about}
        </Box>
        <Box width="90%" height="25%">
          {tracks[1]}
        </Box>
      </Column>
      <Column width="25%">
        <Box width="90%" height="45%">
          This is image / logo
        </Box>
        <Box width="90%" height="45%">
          {tracks[2]}
        </Box>
      </Column>
    </Container>
  );
}
