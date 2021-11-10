import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import CandidateItem from "./CandidateItem";

const CandidateList = () => {
  const candidateData = useSelector((state) => state.candidate);
  console.log(candidateData);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Mobile</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {candidateData.map((candidate, index) => (
          <CandidateItem
            key={index}
            index={index + 1}
            fullname={candidate.fullName}
            mobile={candidate.mobile}
            age={candidate.age}
          />
        ))}
      </tbody>
    </Table>
  );
};

export default CandidateList;
