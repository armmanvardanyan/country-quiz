import React, { useContext, useState } from "react";
import classes from "./Auth.module.scss";
import { Form, Button } from "react-bootstrap";
import { AuthContext } from "../../context/auth/AuthContext";

export const Auth = () => {
  const { checkForm, state } = useContext(AuthContext);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onLogin = (e) => {
    e.preventDefault();
    checkForm(form);
  };
  return (
    <div className={classes.Auth}>
      <div>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, [e.target.name]: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={(e) =>
                setForm({ ...form, [e.target.name]: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Text className="text-danger text-bold">
              {state.error && state.error.split("_").join(" ").toLowerCase()}
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit" onClick={onLogin}>
            Sign In
          </Button>
        </Form>
      </div>
    </div>
  );
};
