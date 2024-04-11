import React, { useState, createContext } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme === 'dark' ? 'dark-mode' : ''}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
