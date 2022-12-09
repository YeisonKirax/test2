import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavbarBT from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import './navbar.css';

export default function Navbar() {

  return (
    <NavbarBT id='basic-navbar-nav' bg='dark' variant='dark' expand="md">
      <Container>
        <NavbarBT.Brand href='/#'>
          <img src='https://react-bootstrap.github.io/logo.svg' width="30" height="30" className="d-inline-block align-top"
            alt="React Bootstrap logo"></img>
          <Link to='/about-us'>
            Restaurant
          </Link>
        </NavbarBT.Brand>

        <NavbarBT.Toggle aria-controls="basic-navbar-nav"></NavbarBT.Toggle>
        <NavbarBT.Collapse id='basic-navbar-nav'>
          <Nav>
            <Nav.Link>
              <Link to='/about-us'>
                Nosotros
              </Link>
            </Nav.Link>

            <Nav.Link>
              <Link to='/menu'>Menú
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/reservations">Reservaciones
              </Link>
            </Nav.Link>
          </Nav>
        </NavbarBT.Collapse>
      </Container>
    </NavbarBT>
  );
}