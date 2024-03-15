import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
const Navigate = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <NavLink to="/" className="nav-link fs-4 fw-bold">
            SSO
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto d-flex justify-content-between align-items-center col">
              <div className="d-flex col">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
                <NavLink className="nav-link" to="/user">
                  User
                </NavLink>
              </div>
              <NavDropdown title="Account" id="basic-nav-dropdown">
                <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
                <NavDropdown.Item href="/changePassword">
                  ChangePassword
                </NavDropdown.Item>

                <NavDropdown.Item href="/infoAccount">
                  Infomation
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigate;
