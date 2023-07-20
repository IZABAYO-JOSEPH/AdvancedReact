import React from "react";
import { data } from "../data";
import { useReducer } from "react";
import { CLEAR_LIST,REMOVE_ITEM,RESET_LIST } from "./actions";
import Reducer from "./reducer";
const defaultState = {
  people: data,
  isLoading: false,
};

const ReducerDemo = () => {
  const [state, dispatch] = useReducer(Reducer, defaultState);

  //   const [ people, setPeaple]  = React.useState(data);
  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } });
  };
  const clearall = () => {
    dispatch({ type: CLEAR_LIST });
  };
  const resetData = () => {
    dispatch({ type: RESET_LIST });
  };
  return (
    <div>
      <h2>useReducer hook demo</h2>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button type="button" onClick={() => removeItem(id)}>
              remove
            </button>
          </div>
        );
      })}
      {state.people.length < 1 ? (
        <button
          type="button"
          style={{ marginTop: "2rem" }}
          className="btn"
          onClick={resetData}
        >
          Reset
        </button>
      ) : (
        <button
          type="button"
          style={{ marginTop: "2rem" }}
          className="btn"
          onClick={clearall}
        >
          clearAll
        </button>
      )}
    </div>
  );
};

export default ReducerDemo;
