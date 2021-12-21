import { NavLink } from "react-router-dom";
import { ContainerStyle } from "./styles";
import styles from "./styles.module.css";

export const Navigation = () => {

  return (
        <ContainerStyle>
            <NavLink
              exact
              to="/"
              className={({ isActive })=> isActive ? styles.active_link: styles.inactive_link}
            >
              Todo page
            </NavLink>
            <NavLink
              exact
              to="/dashboard"
              className={({ isActive })=> isActive ? styles.active_link: styles.inactive_link}
            >
              Dashboard
            </NavLink>    
            <NavLink
              exact
              to="/posts"
              className={({ isActive })=> isActive ? styles.active_link: styles.inactive_link}
            >
              Posts
            </NavLink>    
            
        </ContainerStyle>
  );
};
