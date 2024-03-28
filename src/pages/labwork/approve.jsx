import { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import DefaultLayout from "@/shared/ui/DefaultLayout";

function FormExample() {
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
          <h3>Ответ студента: ali210599@gmail.com</h3>
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
              <Form.Select aria-label="Default select example" required>
                <option value="" disabled selected>
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

export default FormExample;
