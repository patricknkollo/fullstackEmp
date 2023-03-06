import "./App.css";
import FuncMitarbeiter from "./components/FuncMitarbeiter";
import MitarbeiterListing from "./components/MitarbeiterListing";
import MitarbeiterState from "./components/MitarbeiterState";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DeleteIdFormat from "./components/DeleteIdFormat";
//import Mitarbeiter from "./components/Mitarbeiter";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <FuncMitarbeiter />
            </Route>
            <Route path="/about">
              <MitarbeiterState />
            </Route>
            <Route path="/dashboard">
              <MitarbeiterListing />
            </Route>
            <Route path="/delete">
              <DeleteIdFormat />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
