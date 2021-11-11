import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import CandidateItem from "./CandidateItem";

const CandidateList = () => {
  const candidateData = useSelector((state) => state.candidate.candidateData);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Mobile</th>
          <th>Age</th>
          <th>Email</th>
          <th>Address</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {candidateData.map((candidate, index) => (
          <CandidateItem
            key={index}
            id={candidate.id}
            index={index + 1}
            fullname={candidate.fullname}
            mobile={candidate.mobile}
            age={candidate.age}
            email={candidate.email}
            address={candidate.address}
          />
        ))}
      </tbody>
    </Table>
  );
};

export default CandidateList;
