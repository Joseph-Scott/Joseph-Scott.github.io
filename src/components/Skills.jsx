import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import JavaScript from '../img/javascript.png';
import Html5 from '../img/html5.png';
import Css3 from '../img/css3.png';
import Github from '../img/github.png';
import NOde from '../img/node.png';
import REact from '../img/react.png';
import '../index.css';


const Skills = () => {
  return (
    <Container className="px-4 py-4 my-2">
      <Row className="my-5">
        <h1 className="display-5 fw-bold lh-1 mb-3">skills</h1>
        <p className="fw-bold">|| these are the main technologies I've worked with</p>
      </Row>
      <Row sm={2} md={3} lg={3} className="">
        <Col>
          <Card className="h-100">
            <Card.Body>
              <Image className="img-fluid rounded mx-auto d-block" src={JavaScript} />
              <h5 className="d-flex justify-content-center pt-4">JAVASCRIPT</h5>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body>
              <Image className="img-fluid rounded mx-auto d-block" src={Html5} />
              <h5 className="d-flex justify-content-center pt-4">HTML</h5>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body>
              <Image className="img-fluid rounded mx-auto d-block" src={Css3} />
              <h5 className="d-flex justify-content-center pt-4">CSS</h5>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body>
              <Image className="img-fluid rounded mx-auto d-block" src={Github} />
              <h5 className="d-flex justify-content-center pt-4">GITHUB</h5>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body>
              <Image className="img-fluid rounded mx-auto d-block" src={NOde} />
              <h5 className="d-flex justify-content-center pt-4">NODE JS</h5>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body>
              <Image className="img-fluid rounded mx-auto d-block"  src={REact} />
              <h5 className="d-flex justify-content-center pt-4">REACT</h5>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;