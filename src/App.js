import NewLoanForm from "./components/LoanForm";
import LoanList from "./components/LoanList";
import LoanContextProvider from "./context/LoanContext";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <LoanContextProvider>
        <h1>Loan Manager </h1>
        <NewLoanForm />
        <LoanList />
      </LoanContextProvider>
    </div>
  );
}
