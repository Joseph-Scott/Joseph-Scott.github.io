import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../index.css';

const Navigation = () => {
  return (
    <>
      <Navbar className="fixed-top" bg="black" variant="dark">
        <Container>
          <Nav className="m-auto">
            <Nav.Link href="#scrollspyHeading1">home</Nav.Link>
            <Nav.Link href="#scrollspyHeading2">skills</Nav.Link>
            <Nav.Link href="#scrollspyHeading3">projects</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
};

export default Navigation;