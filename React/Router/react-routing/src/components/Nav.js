import React from 'react'
import {Navbar,Form,FormControl,Button,NavDropdown,Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'
function NavbarLinks() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mr-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link><Link to="/">Home</Link></Nav.Link>
                        <Nav.Link><Link to="/about">About</Link></Nav.Link>
                      
                    </Nav>
                  
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavbarLinks
