import { useContext } from "react";
import { LoanContext } from "../context/LoanContext";
import LoanDetails from "../components/LoanDetails";

const LoanList = () => {
  const { loans } = useContext(LoanContext);
  return loans.length ? (
    <table className="loanList">
      <tbody>
        <tr>
          <th>
            <h3>Name</h3>
          </th>
          <th>
            <h3>Description</h3>
          </th>
          <th>
            <h3>Date</h3>
          </th>
          <th>
            <h3>Time</h3>
          </th>
          <th>
            <h3>Options</h3>
          </th>
        </tr>
        {loans.map((loan) => {
          return <LoanDetails loan={loan} key={loan.id} />;
        })}
      </tbody>
    </table>
  ) : (
    <div> Nothing to see here... </div>
  );
};

export default LoanList;
