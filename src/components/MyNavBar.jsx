import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/tvm-header-logo-removebg-preview.png";

import { Link, NavLink } from "react-router-dom";

function MyNavBar() {
  return (
    <Navbar className="navbar text-bg-dark" expand="lg">
      <Container>
        <Link to="/">
          <Navbar.Brand className="text-white">
            <img src={logo} alt="" />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink
              activeClassName="active"
              className="nav-link text-white "
              to="/"
            >
              Home
            </NavLink>

            <NavLink
              activeClassName="active"
              className="nav-link text-white"
              to="/tvShows"
            >
              Tv Shows
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavBar;
