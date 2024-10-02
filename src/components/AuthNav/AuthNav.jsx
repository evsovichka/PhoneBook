import { NavLink } from "react-router-dom";
import style from "./AuthNav.module.css";
import clsx from "clsx";

export default function AuthNav() {
  return (
    <ul className={style.nav}>
      <li>
        <NavLink
          className={(props) => {
            return clsx(style.link, props.isActive && style.activeLink);
          }}
          to="/register"
        >
          Register
        </NavLink>
      </li>
      <li>
        <NavLink
          className={(props) => {
            return clsx(style.link, props.isActive && style.activeLink);
          }}
          to="/login"
        >
          Log In
        </NavLink>
      </li>
    </ul>
  );
}
