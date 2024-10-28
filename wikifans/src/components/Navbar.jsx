import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.nav_container}>
      <NavLink to="/" className={styles.brand}>
        WikiFans
      </NavLink>
      <ul className={styles.list_container}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
