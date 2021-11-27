import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  updateProfile,
} from "@firebase/auth";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Register.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogIn, setIsLogIn] = useState(false);
  const [error, setError] = useState("");
  const auth = getAuth();
  const { processLogIn, setIsLoading } = useAuth();
  const history = useHistory();
  const redirect_url = "/home";

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePassChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  // const setUserName = () => {
  //   console.log(name);
  //   updateProfile(auth.currentUser, { displayName: name }).then(() => {});
  // };

  // for email verification
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then((result) => {
      console.log(result);
    });
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    history.push(redirect_url);

    console.log(email, password);

    // for password validation
    if (password.length < 6) {
      setError("password must be at least 6 characters long.");
      return;
    }
    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError("password must contain 2 uppercase.");
      return;
    }

    isLogIn
      ? processLogIn(email, password)
      : registerNewuser(email, password, name);
  };

  const registerNewuser = (email, password, name) => {
    setIsLogIn(false);
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        setError("");
        verifyEmail();
        // setUserName(name);
        setIsLogIn(true);
        window.location.reload();
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div>
      <div className="registerForm">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onBlur={handleEmailChange}
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="Text"
              placeholder="Name"
              onBlur={handleNameChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onBlur={handlePassChange}
              required
            />
          </Form.Group>
          <h3 className="text-danger">{error}</h3>
          <Form.Group
            className="mb-3"
            controlId="formBasicCheckbox"
          ></Form.Group>
          <Button variant="info" type="submit" onClick={handleRegistration}>
            register
          </Button>
        </Form>

        <br />
        <h5 style={{ color: "coral" }}>
          Already Registered? <Link to="/signIn">Click Here</Link>
        </h5>
      </div>
    </div>
  );
};

export default Register;
