import { useState } from "react";
import { Card, Tab, Tabs } from "react-bootstrap";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import DefaultLayout from "@/shared/ui/DefaultLayout";
import { labworks } from "@/db";

LabWorkListPage.getInitialProps = async () => {
  const labworkList = await fetch(
    "http://localhost:3000/api/labwork/list"
  ).then((res) => res.json());

  return {
    labworkList,
  };
};

export default function LabWorkListPage({ labworkList }) {
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
      <h3>Лабораторные работы</h3>
      <br />
      <div
        style={{
          display: "flex",
          flexFlow: "column",
          gap: "16px",
        }}
      >
        {labworkList.map((labwork) => (
          <Card key={labwork.id}>
            <Card.Header>
              <Row className="justify-content-between">
                <h5 className="m-0">{labwork.title}</h5>
              </Row>
            </Card.Header>
            <Card.Body>
              <Card.Text>{labwork.description}</Card.Text>
              <div
                style={{
                  textAlign: "right",
                }}
              >
                <Button
                  as={Link}
                  variant="primary"
                  href={`/labwork/view/?id=${labwork.id}`}
                >
                  Просмотр
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </DefaultLayout>
  );
}
