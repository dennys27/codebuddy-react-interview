import './Searchbar.css';
import Mic from '../../assets/mic.svg';
import Camera from '../../assets/camera.svg';
import Search from '../../assets/search.svg';
import Keyboard from '../../assets/keyboard.svg';

const Searchbar = () => {
  return (
    <div className="sbox">
      <div className="sbform d-flex justify-content-between">
        <div>
          <input className="me-2 search_input" />
        </div>
        <div className="d-flex gap-3">
          <img alt="mic" src={Mic} />
          <img alt="camera" src={Camera} />
          <img alt="keyboard" src={Keyboard} />
          <img alt="search" src={Search} />
        </div>
      </div>
      <span className="text-white d-flex pt-2 fs-6">
        <span className="d-flex gap-2 languages align-items-center justify-content-center">
          <a className="text-white text-decoration-none fs-6" href="#home">
            Languages:
          </a>
          <a className="text-white text-decoration-none " href="#home">
            हिंदी
          </a>
          <a className="text-white text-decoration-none" href="#home">
            বাংলা
          </a>
          <a className="text-white text-decoration-none" href="#home">
            اردو
          </a>
          <a className="text-white text-decoration-none" href="#home">
            ਪੰਜਾਬੀ
          </a>
          <a className="text-white text-decoration-none" href="#home">
            मराठी
          </a>
          <a className="text-white text-decoration-none" href="#home">
            తెలుగు
          </a>
          <a className="text-white text-decoration-none" href="#home">
            தமிழ்
          </a>
          <a className="text-white text-decoration-none" href="#home">
            ಕನ್ನಡ
          </a>
          <a className="text-white text-decoration-none" href="#home">
            ગુજરાતી
          </a>
          <a className="text-white text-decoration-none" href="#home">
            മലയാളം
          </a>
          <a className="text-white text-decoration-none" href="#home">
            ଓଡ଼ିଆ
          </a>
        </span>
      </span>
    </div>
  );
};

export default Searchbar;
