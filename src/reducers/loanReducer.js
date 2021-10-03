import { v1 as uuidv1 } from "uuid";

export const loanReducer = (state, action) => {
  switch (action.type) {
    case "ADD_LOAN":
      return [
        ...state,
        {
          name: action.loan.name,
          description: action.loan.description,
          date: action.loan.date,
          time: action.loan.time,
          id: uuidv1()
        }
      ];
    case "REMOVE_LOAN":
      return state.filter((loan) => loan.id !== action.id);
    default:
      return state;
  }
};
