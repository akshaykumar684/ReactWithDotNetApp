import { Modal, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { candidateModalAction } from "../../store/CandidateModal-State";
import { useEffect } from "react";
import api from "../../axios/axiosConfig";
const CandidateModalForm = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.candidateModal.show);
  const candidateId = useSelector((state) => state.candidateModal.candidateId);

  useEffect(() => {
    if (!show) {
      return;
    }
    api
      .get(`/${candidateId}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, [candidateId, show]);

  const handleClose = () => {
    dispatch(candidateModalAction.hideModal());
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CandidateModalForm;
