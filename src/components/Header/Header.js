import React from 'react'
import {Navbar, Nav} from 'react-bootstrap';

export default function Header() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <div className="container"> {/* added container to add space on sides */}
                    <Navbar.Brand href="/">React Projects</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ml-auto">
                                    <Nav.Link href="/">Home</Nav.Link>
                                    <Nav.Link href="/todo">Todo</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                </div>
            </Navbar>   
        </div>
    )
}
