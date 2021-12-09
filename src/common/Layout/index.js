// Core
import { useContext } from "react";
// Instruments
import { LayoutWrapper } from "./LayoutStyles";
import { ThemeContext } from "../../context/theme";


export const Layout = ({ children, status="off" }) => {

  const { swithTheme, theme } = useContext(ThemeContext);

  // const statusStyle = theme === "light" ? { color:'green'}: { color: 'red'}
  return (
    <LayoutWrapper theme={theme}>
      <p onClick={() => swithTheme(theme)}> {theme} </p>
      {children}
    </LayoutWrapper>
  );
};
