import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { candidateAction } from "../store/redux-store";
import axios from "axios";

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
    setAge(parseInt(event.target.value));
  };

  const addressChangeHandler = (event) => {
    setAddress(event.target.value);
  };

  const candidateFormSubmitHandler = (event) => {
    event.preventDefault();

    axios
      .post(`http://localhost:49743/api/Candidate/`, {
        fullname,
        mobile,
        email,
        age,
        address,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
    //dispatch(candidateAction.addCandidate(formData));

    setFullname("");
    setMobile("");
    setEmail("");
    setAge("");
    setAddress("");
  };
  return (
    <Form onSubmit={candidateFormSubmitHandler}>
      <Form.Group className="mb-3" controlId="formBasicFullName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Full name"
          value={fullname}
          onChange={fullNameChangeHandler}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicMobile">
        <Form.Label>Mobile</Form.Label>
        <Form.Control
          type="number"
          placeholder="Mobile"
          value={mobile}
          onChange={mobileChangeHandler}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
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
          type="number"
          placeholder="Age"
          value={age}
          onChange={ageChangeHandler}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control
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
  );
};

export default CandidateForm;
