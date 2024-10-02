import { Link } from "react-router-dom";
import style from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={style.pageBox}>
      <div className={style.title}>
        <h3>Welcome to My Phone Book</h3>
        <p>Stay connected with friends and family</p>
      </div>
      <div className={style.list}>
        <b>What can you do with our contact book?</b>
        <ul>
          <li>Add new contacts</li>
          <li>Edit and delete existing contacts</li>
          <li>Search for contacts by name or phone number</li>
        </ul>
      </div>
      <div className={style.wraplink}>
        <b>Get started with our contact book today!</b>
        <Link className={style.link} to="/contacts">
          Go to your contacts
        </Link>
      </div>
    </div>
  );
}
