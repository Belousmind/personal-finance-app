import { AppDispatch } from "./store";
import { setBalance } from "./balance/balanceSlice";
import { setPots } from "./pots/potsSlice";

import data from "../../data.json";

export const initApp = () => (dispatch: AppDispatch) => {
  dispatch(setBalance(data.balance));
  dispatch(setPots(data.pots));
};
