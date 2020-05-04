import React from "react";
import { NavBar } from "../../components/NavBar/NavBar";
import { Container } from "react-bootstrap";

export const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <Container>{children}</Container>
    </div>
  );
};
