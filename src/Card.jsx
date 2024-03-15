import React, { useState } from "react";
import "./card.css";

export const Card = ({ name,speed }) => {
 
  

  const [isSelected, setIsSelected] = useState(false);

  const [value, setValue] = useState(name);
  


  function getValue(event) {
    const newValue = event.target.value;
    setValue(newValue);
  }


  return (
    <div >
      {isSelected ? (
        <input
          type='text'
          onChange={getValue}
          value={value}
          onBlur={() => setIsSelected(false)}
        />
      ) : (
        <div className='name' onClick={() => setIsSelected(true)}>
          {name}
        </div>
      )}
      {/* <div className='price'>{price}</div> */}
      <div className='speed'>{speed}</div>
      {/* <div className='text'>{text}</div> */}
    </div>
  );
};
