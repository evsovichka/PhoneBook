import { NavLink } from "react-router-dom";
import style from "./AuthNav.module.css";

export default function AuthNav() {
  return (
    <ul className={style.nav}>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
      <li>
        <NavLink to="/login">Log In</NavLink>
      </li>
    </ul>
  );
}
