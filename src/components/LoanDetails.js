import { useContext } from "react";
import { LoanContext } from "../context/LoanContext";

const LoanDetails = ({ loan }) => {
  const { dispatch } = useContext(LoanContext);
  return (
    <tr>
      <td>{loan.name}</td>
      <td>{loan.description}</td>
      <td>{loan.date}</td>
      <td>{loan.time}</td>
      <td>
        <button
          type="submit"
          onClick={() => dispatch({ type: "REMOVE_LOAN", id: loan.id })}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default LoanDetails;
