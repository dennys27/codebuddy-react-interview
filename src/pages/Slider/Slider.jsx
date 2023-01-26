/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Leftarrow from '../../assets/forwardarrow.png';
import Rightarrow from '../../assets/backwardarrow.png';
import './Slider.css';

const Slider = () => {
  function leftScroll() {
    const left = document.querySelector('.scroll-images');
    left.scrollBy(200, 0);
  }

  function rightScroll() {
    const right = document.querySelector('.scroll-images');
    right.scrollBy(-200, 0);
  }

  return (
    <div className="cover d-flex justify-content-center gap-3">
      <div className="right" onClick={() => leftScroll()}>
        <img className="left-arrow" alt="left-arrow" src={Leftarrow} />
      </div>

      <div className="scroll-images ">
        <div className="child">
          <div className="card_title text-white"> Crocodile finds the body of a drowned child </div>
          <img
            className="child-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX7zQF5hiRiBtriEbyGngaI1l8a7a7hU2ezw&usqp=CAU"
            alt="content"
          />
        </div>

        <div className="child">
          <div className="card_title text-white"> Crocodile finds the body of a drowned child </div>
          <img
            className="child-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX7zQF5hiRiBtriEbyGngaI1l8a7a7hU2ezw&usqp=CAU"
            alt="content"
          />
        </div>

        <div className="child">
          <div className="card_title text-white"> Crocodile finds the body of a drowned child </div>
          <img
            className="child-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX7zQF5hiRiBtriEbyGngaI1l8a7a7hU2ezw&usqp=CAU"
            alt="content"
          />
        </div>

        <div className="child">
          <div className="card_title text-white"> Crocodile finds the body of a drowned child </div>
          <img
            className="child-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX7zQF5hiRiBtriEbyGngaI1l8a7a7hU2ezw&usqp=CAU"
            alt="content"
          />
        </div>

        <div className="child">
          <div className="card_title text-white"> Crocodile finds the body of a drowned child </div>
          <img
            className="child-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX7zQF5hiRiBtriEbyGngaI1l8a7a7hU2ezw&usqp=CAU"
            alt="content"
          />
        </div>

        <div className="child">
          <div className="card_title text-white"> Crocodile finds the body of a drowned child </div>
          <img
            className="child-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX7zQF5hiRiBtriEbyGngaI1l8a7a7hU2ezw&usqp=CAU"
            alt="content"
          />
        </div>

        <div className="child">
          <div className="card_title text-white"> Crocodile finds the body of a drowned child </div>
          <img
            className="child-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX7zQF5hiRiBtriEbyGngaI1l8a7a7hU2ezw&usqp=CAU"
            alt="content"
          />
        </div>
      </div>
      <div className="left" onClick={() => rightScroll()}>
        <img className="left-arrow text-white" alt="left-arrow" src={Rightarrow} />
      </div>
    </div>
  );
};

export default Slider;
