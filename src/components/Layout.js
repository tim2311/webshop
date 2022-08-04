import { Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const Layout = () => {
  return (
    <div>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Trosevain Tech Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/ProductsDisplay">Products</Nav.Link>
            <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/ShoppingCart">Shopping Cart</Nav.Link>
            <NavDropdown title="Account" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="LogIn">Log In</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="CreateAccount">Create Account</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Log Out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet />
    </div>
    
  )
};

export default Layout;
