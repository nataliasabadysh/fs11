import React, { createContext, useState, useCallback } from "react";

export const ThemeContext = createContext(); // Provide, Consumer

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [name, setName] = useState("Best App");

  const swithTheme = useCallback((property) => {
    if (property !== "light") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, swithTheme, name }}>
      {children}
    </ThemeContext.Provider>
  );
};
