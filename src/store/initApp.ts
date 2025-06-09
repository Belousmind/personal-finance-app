import { AppDispatch } from "./store";
import { setBalance } from "./balance/balanceSlice";
import { setPots } from "./pots/potsSlice";
import { setBudgets } from "./budgets/budgetsSlice";

import data from "../../data.json";

export const initApp = () => (dispatch: AppDispatch) => {
  dispatch(setBalance(data.balance));
  dispatch(setPots(data.pots));
  dispatch(
    setBudgets({
      budgets: data.budgets,
      transactions: data.transactions,
    })
  );
};
