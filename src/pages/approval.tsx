import { type FormEvent, useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import DefaultLayout from "~/shared/ui/DefaultLayout";

function FormExample() {
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
    <DefaultLayout>
      <Row>
        <Col sm={8}>
          <h3>Laboratory Work</h3>
          <Tabs defaultActiveKey="description" className="mb-3">
            <Tab eventKey="description" title="Description">
              Tab content for Description
            </Tab>
            <Tab eventKey="desources" title="Resources">
              Tab content for Resources
            </Tab>
          </Tabs>
        </Col>
        <Col sm={4}>
          <h4>Members</h4>
          <ul>
            <li>ali210599@gmail.com</li>
            <li>ali210599@gmail.com</li>
            <li>ali210599@gmail.com</li>
          </ul>
        </Col>
      </Row>
    </DefaultLayout>
  );
}

export default FormExample;
