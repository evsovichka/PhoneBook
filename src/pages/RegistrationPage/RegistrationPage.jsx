import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import style from "./RegistrationPage.module.css";

export default function RegistrationPage() {
  return (
    <div className={style.pageBox}>
      <h3>Create Your Phone Book Account</h3>
      <RegistrationForm />
    </div>
  );
}
