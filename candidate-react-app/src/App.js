import { useEffect } from "react";
import { useDispatch } from "react-redux";
import CandidateFrom from "./Component/CandidateFrom";
import CandidateList from "./Component/CandidateList";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { candidateAction } from "./store/redux-store";
import api from "./axios/axiosConfig";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    api
      .get(`/`)
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
          dispatch(candidateAction.initializeCandidateData(res.data));
        }
      })
      .catch((error) => console.log(error));
  }, [dispatch]);
  return (
    <div>
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
