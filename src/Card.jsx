import React, { useState } from "react";
import "./card.css";

export const Card = ({ card, color }) => {
  const { name, price, speed, text } = card;
  

  const [isSelected, setIsSelected] = useState(false);

  const [value, setValue] = useState(name);
  


  function getValue(event) {
    const newValue = event.target.value;
    setValue(newValue);
  }


  return (
    <div className={`card ${color}`  }>
      {isSelected ? (
        <input
          type='text'
          onChange={getValue}
          value={value}
          onBlur={() => setIsSelected(false)}
        />
      ) : (
        <div className='name' onClick={() => setIsSelected(true)}>
          {value}
        </div>
      )}
      <div className='price'>{price}</div>
      <div className='speed'>{speed}</div>
      <div className='text'>{text}</div>
    </div>
  );
};
