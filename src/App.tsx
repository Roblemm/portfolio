import React from 'react';
import './styles/App.css';


// Import react-router-dom for routing
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Import the pages
import Home from './pages/Home';
import Business from './pages/Business';
import Technology from './pages/Technology';

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';


// Import the required components from react-bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  return (
    <Router>
      <Navbar bg="dark" expand="lg" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/portfolio">itsjath</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/portfolio/">Home</Nav.Link>
              <Nav.Link as={Link} to="/portfolio/business">Business</Nav.Link>
              <Nav.Link as={Link} to="/portfolio/technology">Technology</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container fluid className="custom-container">
        <Routes>
          <Route path="/portfolio/" element={<Home />} />
          <Route path="/portfolio/business" element={<Business />} />
          <Route path="/portfolio/technology" element={<Technology />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
