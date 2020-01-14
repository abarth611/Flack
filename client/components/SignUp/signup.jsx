import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Label,
  Form,
  FormGroup,
  Input,
  Container,
  Button,
  Alert
} from "reactstrap";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import Navigation from "../Navigation/navigation";

import "./signup.css";

function Signup({ history }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    if (confirmPassword === password) {
      dispatch({
        type: "LOAD_USER",
        operation: "CREATE",
        data: { username, password, email },
        navigation: "/",
        history
      });
    } else {
      console.log("hello there");
    }
  };
  return (
    <div className="Login">
      <Navigation />
      <Container>
        <div className="signupForm">
          <h2 className="mb-5 text-center">Sign-Up</h2>
          <Form>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="Enter Username"
                onChange={e => setUsername(e.target.value)}
                name="username"
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter Email"
                onChange={e => setEmail(e.target.value)}
                name="email"
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="********"
                onChange={e => setPassword(e.target.value)}
                name="password"
              />
            </FormGroup>
            <FormGroup>
              <Label for="confirmPassword">Confirm Password</Label>
              <Input
                id="confirm"
                type="password"
                placeholder="********"
                onChange={e => setConfirmPassword(e.target.value)}
                name="confirmPassword"
              />
            </FormGroup>
            <Button id="submit" onClick={() => handleSubmit()}>
              Submit
            </Button>
          </Form>
        </div>
        {user.error && <Alert color="danger">User already exists</Alert>}
      </Container>
    </div>
  );
}

Signup.propTypes = {
  history: PropTypes.func.isRequired
};

export default withRouter(Signup);
