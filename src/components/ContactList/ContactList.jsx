import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

import style from "./ContactList.module.css";

export default function ContactList() {
  const filterContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={style.contactList}>
      {filterContacts.map((contact) => {
        return (
          <li className={style.contactItem} key={contact.id}>
            {<Contact contact={contact} />}
          </li>
        );
      })}
    </ul>
  );
}
