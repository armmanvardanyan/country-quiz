import React, { useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/auth/AuthContext";

export const NavBar = () => {
  const { setLoggedOut } = useContext(AuthContext);

  const logged = localStorage.getItem("token");

  let nav = (
    <>
      <Nav.Link as={NavLink} exact eventKey={1} to="/auth">
        Authentication
      </Nav.Link>
    </>
  );

  if (logged) {
    nav = (
      <>
        <Nav.Link as={NavLink} exact eventKey={1} to="/add-quiz">
          Add Quiz
        </Nav.Link>
        <Nav.Link as={NavLink} exact eventKey={2} to="/delete">
          Delete Quiz
        </Nav.Link>
        <Button
          variant="danger"
          style={{ color: "snow", fontWeight: "bolder" }}
          onClick={setLoggedOut}
        >
          Sign Out
        </Button>
      </>
    );
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand as={NavLink} exact to="/">
        Quiz List
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"> </Nav>
        <Nav>{nav}</Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
