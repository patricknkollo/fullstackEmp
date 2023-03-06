import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteEmployee } from "../redux/Actions";

function DeleteIdFormat(props) {
  const dispatch = useDispatch();
  const [id, setId] = useState();
  const deleteEmpData = (e) => {
    e.preventDefault();
    dispatch(deleteEmployee({ id: id }));
  };

  return (
    <div>
      <form
        className="delete-employee-form"
        onSubmit={(e) => {
          deleteEmpData(e);
        }}
      >
        <input
          className="employee-id"
          placeholder="id"
          type="text"
          required={true}
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
        ></input>
        <button type="submit">delete</button>
      </form>
    </div>
  );
}

export default DeleteIdFormat;
