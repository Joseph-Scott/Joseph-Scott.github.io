import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import JavaScript from '../img/javascript.png';
import Html5 from '../img/html5.png';
import Css3 from '../img/css3.png';
import GIt from '../img/git.png';
import NOde from '../img/node.png';
import REact from '../img/react.png';


const Skills = () => {
  return (
    <Container className=" px-4 py-4 my-5">
      <Row>
        <h1 className="display-5 fw-bold lh-1 mb-3">skills</h1>
        <p>|| these are the main technologies I've worked with</p>
      </Row>
      <Row xs={1} md={2} className="g-6">
        <Col>
          <Card>
            <Card.Img variant="top" src="../img/javascript.png" />
            <Card.Body>
              <Card.Text>
                JavaScript
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Text>
                HTML
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Text>
                CSS
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Text>
                Git
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Text>
                Node
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Text>
                React
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;