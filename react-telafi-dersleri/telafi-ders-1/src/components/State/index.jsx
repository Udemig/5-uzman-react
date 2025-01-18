import React, { useState } from "react";
import "./style.css";
const State = () => {
  //   let counter = 0;

  //   const increaseCounter = () => {
  //     counter++;
  //     console.log(counter);
  //   };

  //   const decreaseCounter = () => {
  //     counter--;
  //     console.log(counter);
  //   };

  const [state, setState] = useState(0);
  return (
    <div className="container">
      <div className="counter-wrapper">
        <button onClick={() => setState(state + 1)} className="increase">
          Arttır
        </button>
        <span>{state}</span>
        <button onClick={() => setState(state - 1)} className="decrease">
          Azalt
        </button>
      </div>
    </div>
  );
};

export default State;
