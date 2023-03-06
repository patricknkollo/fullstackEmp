import React, { useReducer, useState } from "react";
import Composant1 from "./Composant1";

const initialState = {
  countone: 0,
  counttwo: 0,
  counttree: 0,
};

const monReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, countone: state.countone + 1 };
    case "decrement":
      return { ...state, countone: state.countone - 1 };

    case "increment2":
      return { ...state, counttwo: state.counttwo + 10 };
    case "decrement2":
      return { ...state, counttwo: state.counttwo - 10 };

    case "reinitialiser":
      return initialState;

    default:
      return state;
  }
};

function Count(props) {
  const [count, nkollo] = useReducer(monReducer, initialState);
  const [counttree, setCounttree] = useState(0);


  return (
    <div>
      <div>
        <h2>counttree</h2>
        {counttree}
        <br></br>
        <h1>{count.countone}</h1>
        <button
          className="btn btn-success"
          onClick={() => {
            nkollo({ type: "increment", value: 1 });
          }}
        >
          +
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            nkollo({ type: "decrement", value: 2 });
          }}
        >
          -
        </button>
      </div>
      <div>
        <h1>{count.counttwo}</h1>
        <button
          className="btn btn-success"
          onClick={() => {
            nkollo({ type: "increment2", value: 2 });
          }}
        >
          +
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            nkollo({ type: "decrement2", value: 2 });
          }}
        >
          -
        </button>
      </div>
      <div>
        <button
          className="btn btn-danger"
          onClick={() => {
            nkollo({ type: "reinitialiser" });
          }}
        >
          0
        </button>
      </div>
      <Composant1 counttree={counttree} />
    </div>
  );
}

export default Count;
