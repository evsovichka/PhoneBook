import LoginForm from "../../components/LoginForm/LoginForm";
import style from "./LoginPage.module.css";

export default function LoginPage() {
  return (
    <div className={style.pageBox}>
      <h3>Log In to Your Phonebook</h3>
      <LoginForm />
    </div>
  );
}
