import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { instagram, facebook, email } from '../variables';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 200px;
  background-color: var(--brown);
  color: var(--beige);

  p {
    font-size: 30px;
  }
`;

const Socials = styled.div`
  display: flex;
  font-size: 18px;

  a {
    margin: 10px 20px;
    color: var(--beige);

    &:hover {
      color: var(--gold);
    }
  }
`;

export default function Footer() {
  return (
    <Container>
      <Socials>
        <a href={instagram} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="fa-2x" />
        </a>
        <a href={facebook} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} className="fa-2x" />
        </a>
        <a href={`mailto:${email}`}>
          <FontAwesomeIcon icon={faEnvelope} className="fa-2x" />
        </a>
      </Socials>
      <p>wildhacks.net</p>
    </Container>
  );
}
