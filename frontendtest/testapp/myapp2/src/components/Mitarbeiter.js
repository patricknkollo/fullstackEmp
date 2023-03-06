import React, { Component } from "react";
//import { useDispatch } from "react-redux";
import "./Mitarbeiter.css";
//import { saveEmployee } from "./redux/Actions";

class Mitarbeiter extends Component {
  constructor() {
    super();
    this.state = {
      nom: "",
      prenom: "",
      email: "",
      password: "",
      heures: [],
    };
  }
  saveEmployeeData1(e) {
    e.preventDefault();
    console.log(this.state);
  }

  saveEmployeeData(e) {
    //const dispatch = useDispatch();
    //dispatch(saveEmployee());
  }

  render() {
    return (
      <div>
        <div className="div-form">
          <form
            className="employee-form"
            onSubmit={(e) => {
              this.saveEmployeeData(e);
            }}
          >
            <label className="label-name">name: *</label>
            <br></br>
            <input
              className="employee-name"
              type="text"
              required={true}
              value={this.state.nom}
              onChange={(e) => {
                this.setState({ nom: e.target.value });
              }}
            ></input>

            <br></br>
            <label>firstname: *</label>
            <br></br>
            <input
              className="employee-firstname"
              type="text"
              required={true}
              value={this.state.prenom}
              onChange={(e) => {
                this.setState({ prenom: e.target.value });
              }}
            ></input>

            <br></br>
            <label>email: *</label>
            <br></br>
            <input
              className="employee-email"
              type="text"
              required={true}
              value={this.state.email}
              onChange={(e) => {
                this.setState({ email: e.target.value });
              }}
            ></input>

            <br></br>
            <label>password: *</label>
            <br></br>
            <input
              className="employee-password"
              type="password"
              required={true}
              value={this.state.password}
              onChange={(e) => {
                this.setState({ password: e.target.value });
              }}
            ></input>

            <br></br>
            <button className="btn-save" type="submit">
              save
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Mitarbeiter;
