import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container className="p-3 border rounded bg-dark text-light">
      <h1 className="text-center header">Hey, It's Jath!</h1>
      <p className="text-center text-blurb">
        <p>I’m Jathniel Ahonsi, a driven entrepreneur, project manager, and developer with a passion for creating innovative solutions across business, marketing, and technology.</p>
        <p>This site showcases my journey, achievements, and the work I'm most proud of. Take a look around to learn more about the projects I've managed, the technology I've developed, and the strategies I've implemented to bring ideas to life.</p>
      </p>
      <Row>
        <Col className="text-center">
          <Link to="/Business" className="center">
            <Button size="lg" variant="secondary">Business and Marketing</Button>
          </Link>

        </Col>
        <Col className="text-center">
          <Link to="/Technology">
            <Button size="lg"  variant="secondary">Technology and Development</Button>
          </Link>

        </Col>
      </Row>
    </Container>
  );
}

export default Home;