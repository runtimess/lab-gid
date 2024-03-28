import { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import DefaultLayout from "@/shared/ui/DefaultLayout";

LabWorkApprovePage.getInitialProps = async (ctx) => {
  const user = await fetch(
    `http://localhost:3000/api/labwork/approve?id=${2}`
  ).then((res) => res.json());

  return {
    user,
  };
};

export default function LabWorkApprovePage({ user }) {
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
          <h3>
            Ответ студента: <span title={user.email}>{`${user.firstName} ${user.lastName}`}</span>
          </h3>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="formFileMultiple" className="mb-3">
              <Form.Label>Материалы</Form.Label>
              <ul>
                <li>sol.pdf</li>
              </ul>
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Комментарий</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Введите комментарий"
                rows={10}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="role">
              <Form.Label>Оценка</Form.Label>
              <Form.Select defaultValue={""} required>
                <option value="" disabled>
                  Выберите оценку
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Оценка не выбрана
              </Form.Control.Feedback>
            </Form.Group>
            <Button className="w-100" type="submit">
              Принять
            </Button>
          </Form>
        </Col>
      </Row>
    </DefaultLayout>
  );
}
