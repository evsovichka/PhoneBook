import { NavLink } from "react-router-dom";
import clsx from "clsx";
import style from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
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
        {isLoggedIn && (
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
        )}
      </ul>
    </nav>
  );
}
