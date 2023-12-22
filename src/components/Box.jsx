import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ width }) => width};
  height: ${({ height }) => height};

  border: 4px solid var(--brown);
  border-radius: 15px;
  margin: 10px;
  padding: 10px;

  color: ${(props) => props.color || `var(--brown)`};
  font-size: ${(props) => props.fontSize || '20px'};

  ${(props) =>
    props.className === 'quote' &&
    ` 
      display: block;
      text-align: center;
      font-size: 18px;
    `};

  ${(props) =>
    props.className === 'about' &&
    ` 
      display: block;
      text-align: center;
    `};

  ${(props) =>
    props.className === 'track' &&
    ` 
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      text-align: center;
    `};
`;

export default function Box({ children, width, height, fontSize, className }) {
  return (
    <Container
      width={width}
      height={height}
      fontSize={fontSize}
      className={className}
    >
      {children}
    </Container>
  );
}
