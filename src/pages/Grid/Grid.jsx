import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Grid.css';

const Grid = () => {
  return (
    <div className="grid_wrapper mt-3 d-flex justify-content-center gap-2">
      <>
        <Row className="border-radius-3 w-100 mb-3">
          <Col className="text-white bg-dark news p-4 gap-1" sm={6} lg={7}>
            <h6 className="text-white pt-2">Top stories</h6>

            <Row>
              <Col className="text-white bg-dark" sm={12} lg={6}>
                <p className="text-white">
                  Zee News 74th Republic Day 2023: Self-Reliance, Sustainability
                </p>
              </Col>
              <Col className="text-white bg-dark" sm={12} lg={6}>
                <p className="text-white">
                  Zee News 74th Republic Day 2023: Self-Reliance, Sustainability
                </p>
              </Col>
              <Col className="text-white bg-dark" sm={12} lg={6}>
                <p className="text-white">
                  Zee News 74th Republic Day 2023: Self-Reliance, Sustainability
                </p>
              </Col>
              <Col className="text-white bg-dark" sm={12} lg={6}>
                <p className="text-white">
                  Zee News 74th Republic Day 2023: Self-Reliance, Sustainability
                </p>
              </Col>
            </Row>
          </Col>

          <Col className="text-white" sm={12} lg={5}>
            <div className="weather p-3">
              <p className="weather_title">WEATHER</p>
              <div className="d-flex justify-content-around">
                <h2 className="text-dark">
                  31<sup>0</sup>C
                </h2>
                <p className="text-dark">Mostly sunny</p>
              </div>
              <p className="text-align-center d-flex justify-content-center text-dark">
                see full forecast
              </p>
            </div>

            <div className="sports p-3 mt-2">
              <p className="weather_title text-white">CRICKET INTERNATIONALS</p>
              <div className="d-flex justify-content-around h-50">
                <div>
                  <p>SA</p>
                  <p>ENG</p>
                </div>
                <div>
                  <p>27 jan</p>
                  <p>4:30 pm</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </>
    </div>
  );
};

export default Grid;
