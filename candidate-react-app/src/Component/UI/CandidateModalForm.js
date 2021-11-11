import { Modal, Button, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { candidateModalAction } from "../../store/CandidateModal-State";
import { toastAction } from "../../store/toast-State";
import { candidateAction } from "../../store/candidate-State";
import { useEffect, useState } from "react";
import api from "../../axios/axiosConfig";

const CandidateModalForm = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.candidateModal.show);
  const candidateId = useSelector((state) => state.candidateModal.candidateId);

  const [fullname, setFullname] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (!show) {
      return;
    }
    api
      .get(`/${candidateId}`)
      .then((res) => {
        const { fullname, mobile, email, age, address } = res.data;
        setFullname(fullname);
        setMobile(mobile);
        setEmail(email);
        setAge(age);
        setAddress(address);
      })
      .catch((err) => console.log(err));
  }, [candidateId, show]);

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
      .put(`/${candidateId}`, {
        id: candidateId,
        fullname,
        mobile,
        email,
        age,
        address,
      })
      .then((res) => {
        if (res.status === 201) {
          dispatch(candidateAction.addCandidate(res.data));
          dispatch(
            toastAction.showToast({
              isOperationSucessfull: true,
              msg: "Candidate Updated Successfully",
            })
          );

          dispatch(candidateModalAction.hideModal());
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(
          toastAction.showToast({
            isOperationSucessfull: false,
            msg: "Something Went Wrong while Updating Candidate",
          })
        );
      });

    setFullname("");
    setMobile("");
    setEmail("");
    setAge("");
    setAddress("");
  };

  const handleClose = () => {
    dispatch(candidateModalAction.hideModal());
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Candidate Data</Modal.Title>
      </Modal.Header>
      <Modal.Body>
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

          <Button
            variant="secondary"
            onClick={handleClose}
            style={{ margin: "1em" }}
          >
            Close
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default CandidateModalForm;
