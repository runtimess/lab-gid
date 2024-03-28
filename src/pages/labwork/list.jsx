import { useState } from "react";
import { Card, Tab, Tabs } from "react-bootstrap";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import DefaultLayout from "@/shared/ui/DefaultLayout";

export default function LabWorkListPage({ name }) {
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
      <h1>Лабораторные работы</h1>
      {name}
      <div
        style={{
          display: "flex",
          flexFlow: "column",
          gap: "16px",
        }}
      >
        <Card>
          <Card.Header>
            <Row className="justify-content-between">
              <h5 className="m-0">Лабораторная работа #1</h5>
              <div>21.06.2024</div>
            </Row>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <div
              style={{
                textAlign: "right",
              }}
            >
              <Button as={Link} variant="primary" href={`/labwork/view/?id=1`}>
                Просмотр
              </Button>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            <Row className="justify-content-between">
              <h5 className="m-0">Лабораторная работа #1</h5>
              <div>21.06.2024</div>
            </Row>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <div
              style={{
                textAlign: "right",
              }}
            >
              <Button as={Link} variant="primary" href={`/labwork/view/?id=1`}>
                Просмотр
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </DefaultLayout>
  );
}

export const getServerSideProps = async () => {
  return {
    props: {
      name: "test",
    },
  };
};
