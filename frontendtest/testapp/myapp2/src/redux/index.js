import { combineReducers } from "redux";
import { mitarbeiterReducer } from "./reducers";

export const combReducer = combineReducers({
  mitarbReducer: mitarbeiterReducer,
});

export default combReducer;
