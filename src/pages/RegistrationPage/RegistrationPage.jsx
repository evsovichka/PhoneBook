import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import style from "./RegistrationPage.module.css";

export default function RegistrationPage() {
  return (
    <div className={style.section}>
      <RegistrationForm />
    </div>
  );
}
