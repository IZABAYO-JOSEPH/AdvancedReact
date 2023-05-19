import React, { useState } from "react";
const UsestateGotcha = () => {
  const [value, setvalue] = useState(0);
  const handleClick = () => {
    setTimeout(() => {
      console.log("clicked the button");
      setvalue((currentState) => {
        return currentState + 1;
      });
    }, 3000);
  };
  return (
    <div>
      <h4>rendering actual current state of useState</h4>
      <h1>{value}</h1>
      <button className="btn" onClick={handleClick}>
        Increase
      </button>
    </div>
  );
};
export default UsestateGotcha;
