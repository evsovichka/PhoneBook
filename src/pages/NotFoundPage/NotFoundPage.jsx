import { Link } from "react-router-dom";
import style from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <div className={style.pageBox}>
      <b className={style.text}> This page was not found</b>
      <Link to="/" className={style.link}>
        Back to Home
      </Link>
    </div>
  );
}
