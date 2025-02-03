import React, { createContext, useContext, useState } from 'react';

// Create the ThemeContext
const ThemeContext = createContext();

// Custom hook to use ThemeContext easily
export const useTheme = () => useContext(ThemeContext);

// ThemeProvider Component to wrap the app
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle theme
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
