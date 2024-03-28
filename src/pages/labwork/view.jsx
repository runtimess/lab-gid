import Link from "next/link";
import { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import DefaultLayout from "@/shared/ui/DefaultLayout";

LabWorkViewPage.getInitialProps = async (ctx) => {
  const labwork = await fetch(
    `http://localhost:3000/api/labwork/view?id=${1}`
  ).then((res) => res.json());

  return {
    labwork,
  };
};

export default function LabWorkViewPage({ labwork }) {
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
    <DefaultLayout>
      <Row>
        <Col sm={8}>
          <h3>{labwork.title}</h3>
          <Tabs defaultActiveKey="description" className="mb-3">
            <Tab eventKey="description" title="Описание">
              {labwork.description}
            </Tab>
            <Tab eventKey="resources" title="Материалы">
              Tab content for Материалы
            </Tab>
            <Tab eventKey="solution" title="Отправка ответа">
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group controlId="formFileMultiple" className="mb-3">
                  <Form.Label>Материалы</Form.Label>
                  <Form.Control type="file" multiple required />
                  <Form.Control.Feedback type="invalid">
                    Invalid Материалы
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="description">
                  <Form.Label>Комментарий</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Введите комментарий"
                    rows={10}
                  />
                </Form.Group>
                <Button className="w-100" type="submit">
                  Опубликовать
                </Button>
              </Form>
            </Tab>
          </Tabs>
        </Col>
        <Col sm={4}>
          <h4>Участники</h4>
          <ul>
            {labwork.students.map((student) => (
              <li key={student.id}>
                <Link href={`/labwork/approve?id=${student.id}`}>
                  {`${student.firstName} ${student.lastName}`} (Вы)
                </Link>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </DefaultLayout>
  );
}
