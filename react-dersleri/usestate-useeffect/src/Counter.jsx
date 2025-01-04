import { useState, useEffect } from "react";

const Counter = () => {
  const [counter, setState] = useState(0);

  // Bileşenin ekrana gelmesi

  useEffect(() => {
    console.log(`Bileşen ekrana geldi 🤩`);
  }, []);

  // Bileşenin güncellenmesi

  useEffect(() => {
    console.log(`Bileşen güncellendi ⭐️`);
  }, [counter]);

  // Bileşenin ekrana kaldırılması

  useEffect(() => {
    return console.log(`Bileşen ekrandan kaldırıldı 👋🏻`);
  }, []);

  return (
    <div>
      <div className="counter">
        <button disabled={counter === 0} onClick={() => setState(counter - 1)}>
          -
        </button>
        <span>{counter} </span>
        <button onClick={() => setState(counter + 1)}>+</button>
      </div>
    </div>
  );
};

export default Counter;
