import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const Signup = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <a className="mx-1 text-decoration-none" onClick={handleShow}>
        Sign up
      </a>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
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
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password again</Form.Label>
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
               Sign up with Google
            </Button>
            <Button
              variant="primary"
              className="btn-outline w-100 mb-2"
              type="submit"
            ><i className="fa fa-facebook mx-1"></i>
               Sign up with Facebook
            </Button>
            <Button
              variant="success"
              className="btn-outline w-100"
              type="submit"
            >
              Submit
            </Button>
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
    // <div>
    //     <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    //         Login
    //     </button>

    //     <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    //         <div class="modal-dialog">
    //             <div class="modal-content">
    //                 <div class="modal-header">
    //                     <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
    //                     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    //                 </div>
    //                 <div class="modal-body">
    //                     {/* <form>
    //                         <div class="mb-3">
    //                             <label for="exampleInputEmail1" class="form-label">Email address</label>
    //                             <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    //                                 <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    //                         </div>
    //                         <div class="mb-3">
    //                             <label for="exampleInputPassword1" class="form-label">Password</label>
    //                             <input type="password" class="form-control" id="exampleInputPassword1"/>
    //                         </div>
    //                         <div class="mb-3 form-check">
    //                             <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    //                                 <label class="form-check-label" for="exampleCheck1">Check me out</label>
    //                         </div>
    //                         <button type="submit" class="btn btn-primary">Submit</button>
    //                     </form> */}
    //                 </div>
    //                 <div class="modal-footer">
    //                     <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    //                     <button type="button" class="btn btn-primary">Save changes</button>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>
  );
};

export default Signup;
