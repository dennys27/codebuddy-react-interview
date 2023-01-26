import Container from 'react-bootstrap/Container';
import Grid from '../Grid/Grid';
import Slider from '../Slider/Slider';
import './Carousel.css';

const Carousel = () => {
  return (
    <div className="carousel_wrapper">
      <Container className="d-flex justify-content-center align-items-center w-100">
        <Slider />
      </Container>
      <Container className="d-flex justify-content-center align-items-center grid_container">
        <Grid />
      </Container>
    </div>
  );
};

export default Carousel;
