import { Button } from "react-bootstrap";
import api from "../axios/axiosConfig";
import { useDispatch } from "react-redux";
import { candidateAction } from "../store/candidate-State";
import { candidateModalAction } from "../store/CandidateModal-State";
import { toastAction } from "../store/toast-State";
const CandidateItem = (props) => {
  const dispatch = useDispatch();
  const deleteCandidateHandler = () => {
    api
      .delete(`/${props.id}`)
      .then((res) => {
        if (res.status === 204) {
          dispatch(candidateAction.deleteCandidate(props.id));
          dispatch(
            toastAction.showToast({
              isOperationSucessfull: true,
              msg: "Candidate Deleted Successfully",
            })
          );
        }
      })
      .catch((res) => {
        dispatch(
          toastAction.showToast({
            isOperationSucessfull: false,
            msg: "Something Went wrong while deleting Candidate",
          })
        );
        console.log(res);
      });
  };

  const editCandidateHandler = () => {
    dispatch(candidateModalAction.showModal(props.id));
  };
  return (
    <tr>
      <td>{props.index}</td>
      <td>{props.fullname}</td>
      <td>{props.mobile}</td>
      <td>{props.age}</td>
      <td>{props.email}</td>
      <td>{props.address}</td>
      <td>
        <Button variant="danger" onClick={deleteCandidateHandler}>
          Delete
        </Button>
        <Button variant="primary" onClick={editCandidateHandler}>
          Edit
        </Button>
      </td>
    </tr>
  );
};

export default CandidateItem;
