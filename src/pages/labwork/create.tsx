import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";
import { type FormEvent, useState } from "react";
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
          <Form.Group className="mb-3">
            <Form.Label>Название</Form.Label>
            <Form.Control type="text" placeholder="Введите название" required />
            <Form.Control.Feedback type="invalid">
              Invalid Password
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Описание</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Введите описание"
              required
              rows={10}
            />
            <Form.Control.Feedback type="invalid">
              Invalid Email
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formFileMultiple" className="mb-3">
            <Form.Label>Материалы</Form.Label>
            <Form.Control type="file" multiple required />
            <Form.Control.Feedback type="invalid">
              Invalid Материалы
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="role">
            <Form.Label>Участники</Form.Label>
            <Form.Select required multiple>
              <option value="" disabled selected>
                Выберите участников
              </option>
              <option value="1">ali210599@gmail.com</option>
              <option value="1">ali210599@gmail.com</option>
              <option value="1">ali210599@gmail.com</option>
              <option value="1">ali210599@gmail.com</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Invalid Role
            </Form.Control.Feedback>
          </Form.Group>
          <Button className="w-100" type="submit">
            Опубликовать
          </Button>
        </Form>
      </DefaultLayout>
    </>
  );
}
