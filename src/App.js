import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Jobs from './Jobs';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar bg="light" variant="light">
                <Container>
                    <Nav className="me-auto">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/jobs" className="nav-link">Jobs</Link>
                        <Link to="/about" className="nav-link">About</Link>
                    </Nav>
                </Container>
            </Navbar>

      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="about" element={ <About /> } />
        <Route path="Jobs" element={ <Jobs /> } />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
