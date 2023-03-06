import mesActions from "../redux/ActionTypes";
export const saveEmployee = (employee) => {
  return {
    type: mesActions.SAVE_EMP,
    payload: employee,
  };
};

export const deleteEmployee = (employee) => {
  return {
    type: mesActions.DELETE_EMP,
    payload: employee,
  };
};

export const UpdateEmployee = (employee) => {
  return {
    type: mesActions.UPDATE_EMP,
    payload: employee,
  };
};

export const AddEmployee = (employee) => {
  return {
    type: mesActions.ADD_EMP,
    payload: employee,
  };
};

export default saveEmployee;
