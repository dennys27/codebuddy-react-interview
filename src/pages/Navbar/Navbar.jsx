/* eslint-disable prettier/prettier */
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbars from 'react-bootstrap/Navbar';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-duplicates
import { MdSettings } from 'react-icons/md';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-duplicates
import { HiLockClosed } from 'react-icons/hi';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-duplicates
import { HiClock } from 'react-icons/hi';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-duplicates
import { HiUser } from 'react-icons/hi';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-duplicates
import { BsFillShieldLockFill } from 'react-icons/bs';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-duplicates
import { BsFillChatLeftFill } from 'react-icons/bs';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-duplicates
import { MdHomeFilled } from 'react-icons/md';
import Logo from '../../assets/microsoft-bin-logo.svg';
import Account from '../../assets/account.svg';
import Status from '../../assets/status.svg';
import Menu from '../../assets/hamburger.svg';
import './Navbar.css';

const Navbar = () => {
  const popover = (
    <Popover hideArrow={false} className="mt-5">
      <Popover.Body className="popover_custom">
        <p>
          <MdSettings size={20} className="me-2" />
          settings
        </p>
        <p>
          <HiLockClosed size={20} className="me-2" /> safesearch
        </p>
        <p>
          {' '}
          <HiClock size={20} className="me-2" /> search history
        </p>
        <p>
          <HiUser size={20} className="me-2" />
          my bing
        </p>
        <p>
          <BsFillShieldLockFill size={16} className="me-3" />
          privacy
        </p>
        <p>
          <BsFillChatLeftFill size={15} className="me-3" />
          feedback
        </p>
        <p>
          {' '}
          <MdHomeFilled size={20} className="me-2" />
          customize your homepage
        </p>
        <hr />
        <p>© 2023 Microsoft</p>
      </Popover.Body>
    </Popover>
  );
  return (
    <Navbars collapseOnSelect expand="lg">
      <Container className="navbar_wrapper mb-4 gap-5">
        <Navbars.Brand href="#home">
          <img src={Logo} alt="logo" className="logo" />
        </Navbars.Brand>
        <Navbars.Toggle aria-controls="responsive-navbar-nav" />
        <Navbars.Collapse className="text-white" id="responsive-navbar-nav">
          <Nav className="me-auto gap-4">
            <Nav.Link className="text-white pl-5" href="#features">
              Images
            </Nav.Link>
            <Nav.Link className="text-white pl-5" href="#pricing">
              Videos
            </Nav.Link>
            <Nav.Link className="text-white pl-5" href="#pricing">
              Maps
            </Nav.Link>
            <Nav.Link className="text-white d-flex text " href="#pricing">
              <a
                className="text-decoration-none text-white d-flex align-items-center"
                href="#pricing"
              >
                . . .
              </a>
            </Nav.Link>
          </Nav>

          <Nav className="gap-1">
            <Nav.Link className="text-white gap-2" href="#deets">
              Sign in <img className="user_logo gap-5" alt="user" src={Account} />
            </Nav.Link>
            <Nav.Link className="text-white" eventKey={2} href="#memes">
              3 <img className="status_logo" alt="user" src={Status} />
            </Nav.Link>
            <Nav.Link className="text-white" eventKey={2} href="#memes">
              <OverlayTrigger arrow={false} trigger="click" placement="left" overlay={popover}>
                <img className="status_logo" alt="user" src={Menu} />
              </OverlayTrigger>
            </Nav.Link>
          </Nav>
        </Navbars.Collapse>
      </Container>
    </Navbars>
  );
};

export default Navbar;
