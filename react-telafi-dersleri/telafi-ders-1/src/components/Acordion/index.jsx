import React, { useState } from "react";
import "./style.css";
const Accordion = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="accordion-container">
      <div className="top">
        <h1>Başlık</h1>
        <button onClick={() => setIsShow(!isShow)}>+</button>
      </div>
      {isShow && (
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            quos eaque totam
          </p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
