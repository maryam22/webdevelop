import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar,Container,Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';

function Navigationlinks() {
    return (
        <Navbar bg="light" expand="lg">
        <Container fluid={true}>   
        <Navbar.Brand href="#">Portfolio v1.0</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link ><Link to="/">Home</Link></Nav.Link>
            <Nav.Link ><Link to="/projects">Projects</Link></Nav.Link>
            <Nav.Link ><Link to="/about">About</Link></Nav.Link>
            <Nav.Link ><Link to="/contact">Contact</Link></Nav.Link>
          </Nav>
     
        </Navbar.Collapse>
        </Container> 
      </Navbar>
    )
}

export default Navigationlinks
