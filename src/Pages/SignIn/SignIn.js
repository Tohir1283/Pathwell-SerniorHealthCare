import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import { useLocation, useHistory, Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "@firebase/auth";

const SignIn = () => {
  const [receivedEmail, setReceivedEmail] = useState("");
  const [receivedPassword, setReceivedPassword] = useState("");
  const { signInUsingGoogle, setUser, setLoggedInUser, setIsLoading } =
    useAuth();
  const location = useLocation();
  const history = useHistory();
  const auth = getAuth();
  // console.log(location.state?.from);
  const redirect_url = location.state?.from || "/home";

  const handleGoogleLogin = () => {
    setIsLoading(true);
    signInUsingGoogle()
      .then((result) => {
        setUser(result.user);
        history.push(redirect_url);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const getEmail = (e) => {
    // console.log("email got", e.target.value);
    setReceivedEmail(e.target.value);
  };
  const getPassword = (e) => {
    // console.log("password got", e.target.value);
    setReceivedPassword(e.target.value);
  };

  const handlePasswordSignIN = (e) => {
    e.preventDefault();
    console.log(receivedEmail, receivedPassword, "user");
    signInWithEmailAndPassword(auth, receivedEmail, receivedPassword)
      .then((result) => {
        const { displayName, email } = result.user;
        console.log("clicked", result.user);
        const signedInUser = { name: displayName, email: email };
        setUser(result.user);
        history.push(redirect_url);
        setLoggedInUser(signedInUser);
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
              required
              onBlur={getEmail}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              required
              onBlur={getPassword}
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formBasicCheckbox"
          ></Form.Group>
          <Button variant="info" type="submit" onClick={handlePasswordSignIN}>
            sign in
          </Button>{" "}
          <Button variant="info" onClick={handleGoogleLogin}>
            sign in with Google
          </Button>
        </Form>

        <br />
        <h5 style={{ color: "coral" }}>
          Haven't Registered? <Link to="/register">Click Here</Link>
        </h5>
      </div>
    </div>
  );
};

export default SignIn;
