import React from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Headshot from '../img/casual-headshot(1).jpg';
import '../index.css';

const Home = () => {
  return (
    <Container className="col-xxl-8 px-4 py-5 my-5">
      <Row className="align-items-center g-5 py-5" id="scrollspyHeading1">
        <Col col={10} sm={4} lg={6} >
          <Image src={Headshot} className="rounded-4 d-block mx-lg-auto img-fluid" alt="Headshot" loading="lazy" id="headshot"/>
        </Col>
        <Col md={6} lg={6} xxl={6}>
          <h1 className="display-5 fw-bold lh-1 mb-3">hi, I'm Joe</h1>
          <p>I'm a front end software developer living in the Atlanta, 
            Georgia area. I attended Penn State University and have a degree in Human Development and Family Studies. 
            I have been working in the social services field for several years because I have a passion for understanding 
            the issues that people and families face, helping them to empower themselves to overcome obstacles and reach their 
            goals, and to ultimately change their lives for the better.</p>
          <p>It's kind of a long story (I'd love to tell you about) but in 2018, after looking for a career change, speaking 
            with some software developer friends, and reading about programs that were teaching military veterans (like me) to code as a 
            second career, I began teaching myself to code via different online tutorial sites. The nostalgia I felt from using 
            HTML and CSS to trick out my Xanga in junior high and my MySpace in the early 2000's was real! I realized that I loved the 
            challenge and creativity involved in using software development to help people and companies reach their goals in new 
            and constantly evolving ways. I also attended and graduated from the six month, full stack flex bootcamp program at DigitalCrafts 
            in Atlanta in August of 2018.</p>
          <p>Since DigitalCrafts I have had three beautiful kids with my wife, worked full-time, and navigated a years-long 
            pandemic (do you feel me?), all while looking for my first professional software development position. I am 
            constantly in front of a monitor working to deepen my front end skills and general MERN stack knowledge with JavaScript, 
            HTML, CSS, NodeJS, JQuery, ExpressJS, MongoDB, and React with online tutorials and building my own projects.</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <Button href="https://www.dropbox.com/s/zp351mc65xydpgc/Joseph%20Scott%20Resume.pdf?dl=0" variant="outline-light btn-lg px-4">my resume</Button>
            <Button href="https://www.linkedin.com/in/j-b-scott/" variant="outline-light btn-lg px-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
              </svg>
            </Button>
            <Button href="https://github.com/Joseph-Scott" variant="outline-light btn-lg px-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
            </Button>
            <Button variant="outline-light btn-lg px-4" href="mailto: joseph.b.scott.0@gmail.com" id="email">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
            </svg>
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;