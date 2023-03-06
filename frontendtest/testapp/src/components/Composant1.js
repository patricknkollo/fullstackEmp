import React, { useState } from "react";

const divPatrick = (
  <div className="card">
    <h2>patrick</h2>
  </div>
);
const divNkollo = (
  <div className="card">
    <h1>Nkollo</h1>
  </div>
);

function Composant1({ counttree }) {
  const [afficher, setAfficher] = useState(true);
  const [persons, setPersons] = useState([
    { id: 1, prenom: "patrick", nom: "nkollo" },
    { id: 2, prenom: "dauphine", nom: "nkollo" },
    { id: 3, prenom: "rosine", nom: "enangue" },
    { id: 4, prenom: "saddrack", nom: "ndjangue" },
    { id: 5, prenom: "georges", nom: "tchane" },
  ]);

  const changeComposante = (e) => {
    e.preventDefault();
    setAfficher(!afficher);
  };

  const increCounttree = () => {
    return this.counttree + 1;
  };

  return (
    <div>
      <button
        type="submit"
        className="btn btn-succes"
        onClick={changeComposante}
      >
        {!afficher && divPatrick}
        {afficher && divNkollo}
      </button>

      {afficher && divPatrick}
      {!afficher && divNkollo}
      {afficher && (
        <table>
          {persons.map((person) => (
            <tr>
              <td>{person.id}</td>
              <td>{person.nom}</td>
              <td>{person.prenom}</td>
            </tr>
          ))}
        </table>
      )}
      <button onClick={() => increCounttree}>setcount3</button>
    </div>
  );
}

export default Composant1;
