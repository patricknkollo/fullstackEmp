import React from "react";
import { useSelector } from "react-redux";

function MitarbeiterState() {
  //const mitarbeiter = useSelector((state) => state.mitarbReducer.employees);
  const mitarbeiters = useSelector((state) => state.mitarbReducer.employees);
  const renderList = mitarbeiters.map((mitarbeiter) => {
    const { id, name, firstname, email, password } = mitarbeiter;
    return (
      <div className="something" key={id}>
        <div>
          <div className="div-mitarbeiterState-3">
            state mitarbeiter ________--------------------------------------
            {id}, {name}, {firstname}, {email}, {password}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="div-mitarbeiterState-1">
      my dear!!!!
      {renderList}
    </div>
  );
}

export default MitarbeiterState;
