import style from "./ErrorMessage.module.css";

export default function ErrorMessage() {
  return (
    <p className={style.errorText}>
      Oops, something went wrong. Please try again.
    </p>
  );
}
