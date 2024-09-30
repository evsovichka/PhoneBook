import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import style from "./AppBar.module.css";

export default function AppBar() {
  return (
    <header className={style.header}>
      <Navigation />
      <UserMenu />
      <AuthNav />
    </header>
  );
}
