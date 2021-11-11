import { useEffect } from "react";
import { useDispatch } from "react-redux";
import CandidateFrom from "./Component/CandidateFrom";
import CandidateList from "./Component/CandidateList";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { candidateAction } from "./store/candidate-State";
import api from "./axios/axiosConfig";
import { useSelector } from "react-redux";
import Toasts from "./Component/UI/Toast";

function App() {
  const dispatch = useDispatch();
  const toastData = useSelector((state) => state.toast);
  useEffect(() => {
    api
      .get(`/`)
      .then((res) => {
        if (res.status === 200) {
          dispatch(candidateAction.initializeCandidateData(res.data));
        }
      })
      .catch((error) => console.log(error));
  }, [dispatch]);
  return (
    <div>
      <Toasts Data={toastData} />
      <Container>
        <Row>
          <Col>
            <h1> Candidate Form</h1>
            <CandidateFrom />
          </Col>
          <Col>
            <h1> Candidate Lists</h1>
            <CandidateList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
