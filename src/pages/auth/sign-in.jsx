import Head from "next/head";
import Link from "next/link";

import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

import { Container } from "react-bootstrap";
import TheHeader from "@/shared/ui/TheHeader";
import DefaultLayout from "@/shared/ui/DefaultLayout";
import { useRouter } from "next/router";

export default function SignIn() {
  const router = useRouter();
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    event.preventDefault();
    event.stopPropagation();
    setValidated(true);

    if (!form.checkValidity()) {
      return;
    }

    const email = form.email.value;
    const password = form.password.value;

    fetch("/api/signin", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        document.cookie = `Auth=${1};path=/`;

        window.location.href = "/";
      });
  };

  return (
    <>
      <DefaultLayout>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Введите Email" required />
            <Form.Control.Feedback type="invalid">
              Invalid Email
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Пароль</Form.Label>
            <Form.Control
              type="password"
              placeholder="Введите пароль"
              required
            />
            <Form.Control.Feedback type="invalid">
              Invalid Password
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Запомнить" />
          </Form.Group>
          <Button className="w-100" type="submit">
            Войти в систему
          </Button>
        </Form>
      </DefaultLayout>
    </>
  );
}
