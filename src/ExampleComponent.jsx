import React, { useRef } from "react";

const ExampleComponent = () => {
  // Создаем ref с помощью хука useRef
  const inputRef = useRef(null);
  const phoneRef = useRef(null);
  const checkRef = useRef(null);

  const handleClick = () => {
    // Используем ref для доступа к DOM элементу
    inputRef.current.focus();
  };
  const handleClickPhone = () => {
    // Используем ref для доступа к DOM элементу
    phoneRef.current.style.background="red";
  };
  const handleClickCheck = () => {
    // Используем ref для доступа к DOM элементу
    checkRef.current.checked=true;
  };

  return (
    <div slyle={{ display: "flex", flexDirection: "column" }}>
      {/* Привязываем ref к input элементу */}
      <input type='text' ref={inputRef} />
      <input type='phone' ref={phoneRef} />
      <input type='checkbox' ref={checkRef} />
      <button onClick={handleClick}>Focus Input</button>
      <button onClick={handleClickPhone}>Phone</button>
      <button onClick={handleClickCheck}>checkbox</button>
    </div>
  );
};

export default ExampleComponent;
