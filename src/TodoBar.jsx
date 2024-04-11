

import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const TodoBar = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div className="todo-bar">
      <button onClick={() => toggleTheme('light')}>Light Theme</button>
      <button onClick={() => toggleTheme('dark')}>Dark Theme</button>
    </div>
  );
};

export default TodoBar;
