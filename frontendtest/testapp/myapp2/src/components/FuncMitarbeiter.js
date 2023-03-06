import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddEmployee } from "../redux/Actions";

function FuncMitarbeiter(props) {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [heures, setHeures] = useState([]);

  const dispatch = useDispatch();

  const saveEmployeeData = (e) => {
    e.preventDefault();
    dispatch(
      AddEmployee({
        name: nom,
        firstname: prenom,
        email: email,
        password: password,
      })
    );
  };

  return (
    <div>
      <div>
        <div className="div-form">
          <form
            className="employee-form"
            onSubmit={(e) => {
              saveEmployeeData(e);
            }}
          >
            <label className="label-name">name: *</label>
            <br></br>
            <input
              className="employee-name"
              placeholder="name"
              type="text"
              required={true}
              value={nom}
              onChange={(e) => {
                setNom(e.target.value);
              }}
            ></input>

            <br></br>
            <label>firstname: *</label>
            <br></br>
            <input
              className="employee-firstname"
              placeholder="vorname"
              type="text"
              required={true}
              value={prenom}
              onChange={(e) => {
                setPrenom(e.target.value);
              }}
            ></input>

            <br></br>
            <label>email: *</label>
            <br></br>
            <input
              className="employee-email"
              placeholder="max@email.com"
              type="text"
              required={true}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>

            <br></br>
            <label>password: *</label>
            <br></br>
            <input
              className="employee-password"
              type="password"
              required={true}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>

            <br></br>
            <button className="btn-save" type="submit">
              save
            </button>
          </form>
          <div className="state-values">
            <p>
              {nom} ... {prenom} ... {email} ... {password}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FuncMitarbeiter;
