import Container from "react-bootstrap/Container";
import TheHeader from "./TheHeader";

export default function DefaultLayout({ children }) {
  return (
    <>
      <TheHeader />
      <Container className="pt-4">{children}</Container>
    </>
  );
}
