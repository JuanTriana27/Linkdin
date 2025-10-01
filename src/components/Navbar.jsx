// src/components/Navbar.js
import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import '../../src/styles/Navbar.css';

const CustomNavbar = () => {
    const [expanded, setExpanded] = useState(false);
    const location = useLocation();

    const handleToggle = () => setExpanded(!expanded);
    const closeNavbar = () => setExpanded(false);

    return (
        <Navbar expand="lg" fixed="top" className="custom-navbar" expanded={expanded}>
            <Container>
                <Navbar.Brand as={Link} to="/" className="brand-logo" onClick={closeNavbar}>
                    JT
                </Navbar.Brand>

                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    onClick={handleToggle}
                    className="custom-toggler"
                />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link
                            as={Link}
                            to="/"
                            className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
                            onClick={closeNavbar}
                        >
                            Inicio
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/trabajos"
                            className={location.pathname === '/trabajos' ? 'nav-link active' : 'nav-link'}
                            onClick={closeNavbar}
                        >
                            Trabajos
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default CustomNavbar;