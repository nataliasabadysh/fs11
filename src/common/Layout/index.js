// Core
import { useContext } from "react";
// Instruments
import { LayoutWrapper } from "./LayoutStyles";
import { ThemeContext } from "../../context/theme";


export const Layout = ({ children, status="off" }) => {

  const { swithTheme, theme, name } = useContext(ThemeContext);

  // const statusStyle = theme === "light" ? { color:'green'}: { color: 'red'}
  return (
    <LayoutWrapper theme={theme}>
    {/* Heade  */}
      <p onClick={() => swithTheme(theme)}> {theme} </p>
      <h1>{name}</h1>
      {children}
      {/* // APP  */}

      {/* // <Footer /> */}
    </LayoutWrapper>
  );
};
