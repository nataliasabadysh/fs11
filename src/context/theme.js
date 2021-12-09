import React, { createContext, useState, useCallback } from "react";

export const ThemeContext = createContext(); // Provide, Consumer

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const swithTheme = useCallback((property) => {
    if (property !== "light") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, swithTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
