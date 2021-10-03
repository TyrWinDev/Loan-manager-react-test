import { useContext, useState } from "react";
import { LoanContext } from "../context/LoanContext";

const NewLoanForm = () => {
  const { dispatch } = useContext(LoanContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_LOAN",
      loan: {
        name,
        description,
        date,
        time
      }
    });
    setName("");
    setDescription("");
    setDate("");
    setTime("");
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form-input">
        <label>Name (String)</label>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-input">
        <label>Description (String)</label>
        <input
          type="text"
          placeholder="Enter Loan Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div className="form-input">
        <label>Date (Date)</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div className="form-input">
        <label>Time (String)</label>
        <input
          type="time"
          placeholder="Enter Time of Loan"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
      </div>
      <div className="btn-container">
        <input className="btn" type="submit" value="Add Loan" />
      </div>
    </form>
  );
};

export default NewLoanForm;
