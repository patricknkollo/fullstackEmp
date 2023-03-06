import { createStore } from "redux";
import { combReducer } from "./index";

export const store = createStore(
  combReducer,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
