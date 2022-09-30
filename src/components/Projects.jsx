import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ColorGame from '../img/color-game.png';
import Keeper from '../img/keeper.png';
import YelpCamp from '../img/yelp-camp.png';
import '../index.css'


const Projects = () => {
  return (
    <Container className="col-xxl-8 py-5 my-4" id="scrollspyHeading3">
      <Row className="my-5">
        <h1 className="display-5 fw-bold lh-1 mb-3">projects</h1>
        <p className="fw-bold">|| this is some of my work</p>
      </Row>
      <Row className="d-flex row-cols-1 row-cols-md-2 g-3 gx-5 gy-5">
        <Col lg={6}>
          <Card className="card h-100">
            <Card.Img variant="top" src={ColorGame} />
            <Card.Body>
              <Card.Title className="fw-bold">The Great RGB Color Game</Card.Title>
              <Card.Text>
                The Great RGB Color Game is single page RGB color palette guessing game 
                that uses Javascript, HTML, and pure CSS styling in order to demonstrate 
                DOM manipulation and event handling.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="gap-2 d-md-flex justify-content-md-start">
              <Button href="https://great-rgb-color-game.netlify.app/" variant="outline-light btn-lg px-4">demo</Button>
              <Button href="https://github.com/Joseph-Scott/Color-Game" variant="outline-light btn-lg px-4">github</Button>
            </Card.Footer>
          </Card>
        </Col>
        <Col lg={6}>
          <Card className="card h-100">
            <Card.Img variant="top" src={Keeper} />
            <Card.Body>
              <Card.Title className="fw-bold">Keeper</Card.Title>
              <Card.Text>
                The Keeper app is a single page React app for keeping notes that uses pure CSS styling and focuses on 
                using props, hooks, conditional rendering, managing complex state, and managing component trees.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="gap-2 d-md-flex justify-content-md-start">
              <Button href="https://keeper-app-js.netlify.app/" variant="outline-light btn-lg px-4">demo</Button>
              <Button href="https://github.com/Joseph-Scott/Keeper-App" variant="outline-light btn-lg px-4">github</Button>
            </Card.Footer>
          </Card>
        </Col>
        <Col className="mx-auto">
          <Card className="card h-100">
            <Card.Img variant="top" src={YelpCamp} />
            <Card.Body>
              <Card.Title className="fw-bold">YelpCamp</Card.Title>
              <Card.Text>
                YelpCamp is a Yelp-like reviews site for Georgia campgrounds that uses HTML, Javascript,
                CSS and Bootstrap for styling, Flash messaging, Node.js with Express.js for handling routes 
                and views (with EJS templating), Passport for authentication, and MongoDB for database with 
                Mongoose for data modeling
              </Card.Text>
              <Card.Footer className="gap-2 d-md-flex justify-content-md-start">
                <Button href="https://yelp-camp-joe.herokuapp.com/" variant="outline-light btn-lg px-4">demo</Button>
                <Button href="https://github.com/Joseph-Scott/YelpCamp" variant="outline-light btn-lg px-4">github</Button>
              </Card.Footer>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;