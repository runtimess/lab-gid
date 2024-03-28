import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";
import { FormEvent, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

import { Container } from "react-bootstrap";
import TheHeader from "~/shared/ui/TheHeader";
import DefaultLayout from "~/shared/ui/DefaultLayout";

export default function SignIn() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });
  const hello2 = api.user.hello.useQuery({ text: "from your application!" });

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    const form = event.currentTarget as HTMLFormElement;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <DefaultLayout>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
            <Form.Control.Feedback type="invalid">
              Invalid Email
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              required
            />
            <Form.Control.Feedback type="invalid">
              Invalid Password
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          <Button className="w-100" type="submit">
            Sign In
          </Button>
        </Form>
      </DefaultLayout>
    </>
  );
}
