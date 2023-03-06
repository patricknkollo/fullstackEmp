import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { saveEmployee } from "../redux/Actions";

function MitarbeiterListing() {
  const employees = useSelector((state) => state);
  const dispatch = useDispatch();
  const getAllEmployees = () => {
    const response = axios
      .get("http://localhost:8080/api/controller/employee/employees")
      .then((res) => {
        dispatch(saveEmployee(res.data));
        console.log(res);
      })
      .catch(console.error());
    console.log(response);
    // dispatch(saveEmployee(response.data));
  };

  useEffect(() => {
    getAllEmployees();
  }, []);
  console.log("employees:...", employees);
  return (
    <div>
      <div>
        <div>employees listing</div>
      </div>
    </div>
  );
}

export default MitarbeiterListing;
