import Container from "react-bootstrap/Container";
import TheHeader from "./TheHeader";
import { type ReactNode } from "react";

export default function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <TheHeader />
      <Container className="pt-4">{children}</Container>
    </>
  );
}
