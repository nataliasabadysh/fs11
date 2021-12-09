// Core
import React, { useContext } from "react";
// Instruments
import { LayoutWrapper } from "./LayoutStyles";
import { ThemeContext } from "../../context/theme";

export const Layout = ({ children }) => {
  const context = useContext(ThemeContext);

  return (
    <LayoutWrapper >
      <div onClick={() => context.swithTheme(context.theme)}> {context.theme} </div>
      {children}
    </LayoutWrapper>
  );
};
