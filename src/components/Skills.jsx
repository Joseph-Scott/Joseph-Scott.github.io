import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import JavaScript from '../img/javascript.png';
import Html5 from '../img/html5.png';
import Css3 from '../img/css3.png';
import Github from '../img/github.png';
import NOde from '../img/node.png';
import REact from '../img/react.png';
import '../index.css';


const Skills = () => {
  return (
    <Container className="px-4 py-4 my-5">
      <Row className="my-5">
        <h1 className="display-5 fw-bold lh-1 mb-3">skills</h1>
        <p className="fw-bold">|| these are the main technologies I've worked with</p>
      </Row>
      <Row className="row-cols-3">
        <Col>
          <Card className="h-100">
            <Card.Img className="" variant="top" src={JavaScript} />
            <Card.Body>
              <Card.Text className="">
                JAVASCRIPT
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Img variant="top" src={Html5} />
            <Card.Body>
              <Card.Text>
                HTML
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Img variant="top" src={Css3} />
            <Card.Body>
              <Card.Text>
                CSS
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Img variant="top" src={Github} />
            <Card.Body>
              <Card.Text>
                GITHUB
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Img variant="top" src={NOde} />
            <Card.Body>
              <Card.Text>
                NODE JS
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Img variant="top" src={REact} />
            <Card.Body>
              <Card.Text>
                REACT
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;