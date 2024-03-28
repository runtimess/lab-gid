import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";
import { useContext, useEffect } from "react";
import { AppContext } from "@/store/appContext";

function TheHeader() {
  const { user } = useContext(AppContext);
  const isProfessor = user?.role === "professor";

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} href="/">
          Лаб Гид
        </Navbar.Brand>
        <Nav className="me-auto">
          <NavDropdown title="Лабораторные работы">
            <NavDropdown.Item as={Link} href="/labwork/list">
              Список
            </NavDropdown.Item>
            <NavDropdown.Divider />

            {isProfessor && (
              <NavDropdown.Item as={Link} href="/labwork/create">
                Создать
              </NavDropdown.Item>
            )}
          </NavDropdown>
        </Nav>

        <Form className="d-flex">
          <Nav className="me-auto">
            {!user && (
              <>
                <Nav.Link as={Link} href="/auth/sign-in">
                  Войти
                </Nav.Link>
                <Nav.Link as={Link} href="/auth/sign-up">
                  Зарегистрироваться
                </Nav.Link>
              </>
            )}
            {user && (
              <Nav.Link as={Link} href="/auth/sign-up">
                Выйти
              </Nav.Link>
            )}
          </Nav>
        </Form>
      </Container>
    </Navbar>
  );
}

export default TheHeader;
