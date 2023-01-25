import './Footer.css';
import Container from 'react-bootstrap/Container';

const Footer = () => {
  return (
    <div className="Footer">
      <Container className="d-flex justify-content-between">
        <div className="d-flex gap-4">
          <a href="#home" className="text-decoration-none text-secondary">
            Privacy and Cookies
          </a>
          <a href="#home" className="text-decoration-none text-secondary">
            Legal
          </a>
          <a href="#home" className="text-decoration-none text-secondary">
            Advertise
          </a>
          <a href="#home" className="text-decoration-none text-secondary">
            About our ads
          </a>
          <a href="#home" className="text-decoration-none text-secondary">
            Help
          </a>
          <a href="#home" className="text-decoration-none text-secondary">
            Feedback
          </a>
        </div>
        <div>© 2023 Microsoft </div>
      </Container>
    </div>
  );
};

export default Footer;
