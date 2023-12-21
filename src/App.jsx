import styled from 'styled-components';
import Header from './components/Header';
import Landing from './sections/Landing';
import About from './sections/About';
import Faq from './sections/Faq';
import Sponsors from './sections/Sponsors';
import Footer from './components/Footer';

const Container = styled.div`
  max-width: 100vw;
`;

function App() {
  return (
    <Container>
      <Header />
      <Landing />
      <About />
      <Faq />
      <Sponsors />
      <Footer />
    </Container>
  );
}

export default App;
