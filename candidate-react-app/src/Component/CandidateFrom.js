import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { candidateAction } from "../store/candidate-State";
import api from "../axios/axiosConfig";
import { toastAction } from "../store/toast-State";

const CandidateForm = () => {
  const dispatch = useDispatch();
  const [fullname, setFullname] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [address, setAddress] = useState("");

  const fullNameChangeHandler = (event) => {
    setFullname(event.target.value);
  };

  const mobileChangeHandler = (event) => {
    setMobile(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const ageChangeHandler = (event) => {
    if (event.target.value === "") {
      return;
    }
    setAge(parseInt(event.target.value));
  };

  const addressChangeHandler = (event) => {
    setAddress(event.target.value);
  };

  const candidateFormSubmitHandler = (event) => {
    event.preventDefault();

    api
      .post(`/`, {
        fullname,
        mobile,
        email,
        age,
        address,
      })
      .then((res) => {
        dispatch(candidateAction.addCandidate(res.data));
        dispatch(
          toastAction.showToast({
            isOperationSucessfull: true,
            msg: "Candidate Created Successfully",
          })
        );
      })
      .catch((error) => {
        console.log(error);
        dispatch(
          toastAction.showToast({
            isOperationSucessfull: false,
            msg: "Something Went Wrong while adding Candidate",
          })
        );
      });

    setFullname("");
    setMobile("");
    setEmail("");
    setAge("");
    setAddress("");
  };
  return (
    <React.Fragment>
      <Form onSubmit={candidateFormSubmitHandler}>
        <Form.Group className="mb-3" controlId="formBasicFullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Full name"
            value={fullname}
            onChange={fullNameChangeHandler}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicMobile">
          <Form.Label>Mobile</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="Mobile"
            value={mobile}
            onChange={mobileChangeHandler}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={emailChangeHandler}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAge">
          <Form.Label>Age</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="Age"
            value={age}
            onChange={ageChangeHandler}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Address"
            value={address}
            onChange={addressChangeHandler}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </React.Fragment>
  );
};

export default CandidateForm;
