//import { SAVE_EMP, DELETE_EMP, UPDATE_EMP } from "ActionTypes";
import { mesActions } from "./ActionTypes";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  employees: [
    {
      id: 0,
      name: "nkollo",
      firstname: "patrick",
      email: "nkollopatrick@yahoo.fr",
      password: "enangros",
    },
    {
      id: 1,
      name: "emma",
      firstname: "nesthorette",
      email: "emmanesthor@yahoo.fr",
      password: "anani",
    },
    {
      id: 2,
      name: "doualla",
      firstname: "alexandre",
      email: "adoualla@yahoo.fr",
      password: "bell",
    },
  ],
};
export const mitarbeiterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case mesActions.SAVE_EMP:
      //do something
      return {
        ...state,
        employees: payload,
      };
    case mesActions.ADD_EMP:
      const newEmp = {
        id: uuidv4(),
        firstname: payload.firstname,
        name: payload.name,
        password: payload.password,
        email: payload.email,
      };
      // const addedEmp = [...state.employees, newEmp];
      const employees = [...state.employees, newEmp];
      return {
        ...state,
        employees,
        // addedEmp,
      };
    case mesActions.DELETE_EMP:
      const filteredState = state.employees.filter((emp) => emp.id !== payload);
      const filtered = [...state.employees, filteredState];
      return {
        ...state,
        filtered,
      };

    default:
      return state;
  }
};
export default mitarbeiterReducer;
