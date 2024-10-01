import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import style from "./UserMenu.module.css";
import { selectUser } from "../../redux/auth/selectors";

export default function UserMenu() {
  const username = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <div className={style.menu}>
      <p> Welcome, {username.name}</p>
      <button type="button" onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
}
