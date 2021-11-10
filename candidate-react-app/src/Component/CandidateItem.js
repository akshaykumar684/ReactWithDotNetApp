const CandidateItem = (props) => {
  return (
    <tr>
      <td>{props.index}</td>
      <td>{props.fullname}</td>
      <td>{props.mobile}</td>
      <td>{props.age}</td>
      <td>{props.email}</td>
      <td>{props.address}</td>
    </tr>
  );
};

export default CandidateItem;
