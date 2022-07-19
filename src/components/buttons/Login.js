import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Signup from "./Signup";


const Login = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button
        variant=""
        className="btn btn-outline-primary ms-auto"
        onClick={handleShow}
      ><i className="fa fa-user mx-1"></i>
        Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button
              variant="warning"
              className="btn-outline w-100 mb-2"
              type="submit"
            ><i className="fa fa-google mx-1"></i>
               Sign in with Google
            </Button>
            <Button
              variant="primary"
              className="btn-outline w-100 mb-2"
              type="submit"
            ><i className="fa fa-facebook mx-1"></i>
               Sign in with Facebook
            </Button>
            <Button
              variant="success"
              className="btn-outline w-100"
              type="submit"
            >
              Submit
            </Button>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Don't have a account</Form.Label>
              <Signup/>
            </Form.Group>
          </Form>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
};

export default Login;
