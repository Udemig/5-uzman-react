import { useState } from "react";

const Counter = () => {
  let counter = 0;

  const increase = () => {
    counter++;
    console.log(counter);
  };
  const decrease = () => {
    counter--;
    console.log(counter);
  };

  console.log(counter);

  return (
    <div>
      <div className="counter">
        <button onClick={() => decrease()}>-</button>
        <span>{counter} </span>
        <button onClick={() => increase()}>+</button>
      </div>
    </div>
  );
};

export default Counter;
