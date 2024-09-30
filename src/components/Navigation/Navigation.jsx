import { NavLink } from "react-router-dom";
import style from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav>
      <ul className={style.nav}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/contacts">My contacts</NavLink>
        </li>
      </ul>
    </nav>
  );
}
