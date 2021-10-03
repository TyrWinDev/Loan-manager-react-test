import { createContext, useReducer, useEffect } from "react";
import { loanReducer } from "../reducers/loanReducer";

export const LoanContext = createContext();

const LoanContextProvider = (props) => {
  const [loans, dispatch] = useReducer(loanReducer, [], () => {
    const localData = localStorage.getItem("loans");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("loans", JSON.stringify(loans));
  }, [loans]);
  return (
    <LoanContext.Provider value={{ loans, dispatch }}>
      {props.children}
    </LoanContext.Provider>
  );
};

export default LoanContextProvider;
