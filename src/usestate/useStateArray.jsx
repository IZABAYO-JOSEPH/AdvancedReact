import React from "react";
import { data } from "../data";
const UseStateArray = () => {
  const [ people, setPeaple]  = React.useState(data);
  const removeItem = (id)=>{
  const newpeople= people.filter((person)=>
 person.id !==id)
 setPeaple(newpeople)
    }
  const clearall = ()=>{
    setPeaple([])
  }
  return (
    <div>
      <h2>useState hook array example</h2>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            
            <h4>{name}</h4>
            <button type='button'onClick={()=>removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button type="button"style={{marginTop:'2rem'}}className="btn" onClick={()=>setPeaple([])}>clearAll</button>

    </div>
  );
};

export default UseStateArray;
