import CandidateFrom from "./Component/CandidateFrom";
import CandidateList from "./Component/CandidateList";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function App() {
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
