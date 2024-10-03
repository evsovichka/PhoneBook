import { NavLink } from "react-router-dom";
import clsx from "clsx";
import style from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav>
      <ul className={style.nav}>
        <li>
          <NavLink
            className={(props) => {
              return clsx(style.link, props.isActive && style.activeLink);
            }}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(props) => {
              return clsx(style.link, props.isActive && style.activeLink);
            }}
            to="/contacts"
          >
            My contacts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
