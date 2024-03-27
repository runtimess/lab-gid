import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";

function TheHeader() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} href="/">
          Lab Gid
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} href="/approval">
            Approvals
          </Nav.Link>
        </Nav>

        <Form className="d-flex">
          <Nav className="me-auto">
            <Nav.Link as={Link} href="/sign-in">
              Sign In
            </Nav.Link>
            <Nav.Link as={Link} href="/sign-up">
              Sign Up
            </Nav.Link>
          </Nav>
        </Form>
      </Container>
    </Navbar>
  );
}

export default TheHeader;
