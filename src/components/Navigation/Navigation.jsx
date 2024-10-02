import { NavLink } from "react-router-dom";
import style from "./Navigation.module.css";
import clsx from "clsx";
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
