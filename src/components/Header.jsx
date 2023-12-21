import { dashboard } from '../variables';
import { textFont } from '../styles';
import styled from 'styled-components';

const Container = styled.nav`
  display: flex;
  position: sticky;
  top: 0;
  height: 80px;
  width: 100%;
  justify-content: end;
  align-items: center;
  background-color: var(--beige);
  border-bottom: 5px solid var(--brown);
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  margin-right: 20px;
  list-style-type: none;

  li {
    padding-right: 20px;

    :hover {
      color: var(--red);
    }

    a {
      text-decoration: none;
      color: var(--brown);
    }
  }
`;

const Button = styled.button`
  position: relative;
  background-color: var(--brown);
  border: 2px solid var(--gold);
  padding: 10px 20px;
  font-family: ${textFont};
  overflow: hidden;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%); /* Rectangle */

  &:hover {
    clip-path: polygon(0 0, 80% 0, 100% 50%, 80% 100%, 0 100%);
  }

  a {
    text-decoration: none;
    color: var(--beige);
    font-size: 20px;
  }
`;

export default function Header() {
  return (
    <Container>
      <List>
        <li>
          <a href="#landing">WildHacks</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#faq">FAQ</a>
        </li>
        <li>
          <a href="#sponsors">Sponsors</a>
        </li>
        <Button>
          <a href={dashboard} target="_blank" rel="noopener noreferrer">
            Dashboard
          </a>
        </Button>
      </List>
    </Container>
  );
}
