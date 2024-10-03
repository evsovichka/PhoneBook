import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { selectIsLoading, selectUser } from "../../redux/auth/selectors";
import style from "./UserMenu.module.css";

export default function UserMenu() {
  const username = useSelector(selectUser);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  return (
    <div className={style.menu}>
      <p> Welcome, {username.name} !</p>
      <button
        className={style.btn}
        type="button"
        disabled={isLoading}
        onClick={() => dispatch(logout())}
      >
        Logout
      </button>
    </div>
  );
}
