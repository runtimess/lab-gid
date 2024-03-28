import Head from "next/head";
import Link from "next/link";

import { FormEvent, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

import { Container } from "react-bootstrap";
import TheHeader from "@/shared/ui/TheHeader";
import DefaultLayout from "@/shared/ui/DefaultLayout";

export default function SignUp() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;

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
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Confirmation Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter confirmation password"
              required
            />
            <Form.Control.Feedback type="invalid">
              Invalid Confirmation Password
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="role">
            <Form.Label>Role</Form.Label>
            <Form.Select aria-label="Default select example" required>
              <option value="" disabled selected>
                Select a role
              </option>
              <option value="1">Professor</option>
              <option value="1">Student</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Invalid Role
            </Form.Control.Feedback>
          </Form.Group>
          <Button className="w-100" type="submit">
            Sign Up
          </Button>
        </Form>
      </DefaultLayout>
    </>
  );
}
