import style from "./UserMenu.module.css";
export default function UserMenu() {
  return (
    <div className={style.menu}>
      <p> Welcome, username</p>
      <button type="button">Logout</button>
    </div>
  );
}
