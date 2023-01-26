import Container from 'react-bootstrap/Container';
import Navbar from './Navbar/Navbar';
import './Home.css';
import Searchbar from './SearchBar/Searchbar';
import Carousel from './Carousel/Carousel';
import Footer from './Footer/Footer';

const Home = () => {
  return (
    <>
      <main className="wrapper">
        <Navbar />
        <Container className="searchbar_wrapper">
          <Searchbar />
        </Container>
        <Carousel />
      </main>
      <Footer />
    </>
  );
};

export default Home;
