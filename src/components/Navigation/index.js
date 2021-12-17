import { NavLink, Link } from "react-router-dom";
import { NavStyled } from "./styles";
import styles from "./styles.module.css";

export const Navigation = () => {

  return (
    <NavStyled>
            <NavLink
              exact
              to="/todos" // href
              activeClassName="selected"
              className="link"
            >
              Todo page
            </NavLink>

            <NavLink
              exact
              to="/dashboard" // href
              activeClassName="selected"
              className="link"
            >
              Dashboard
            </NavLink>    
            
          </NavStyled>
  );
};
