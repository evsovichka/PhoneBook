import style from "./Contact.module.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { RiContactsBook3Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { openModal } from "../../redux/contacts/slice";

export default function Contact({ contact: { name, number, id } }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  const handleOpenModal = () => {
    dispatch(openModal());
  };
  return (
    <div className={style.contact}>
      <div className={style.contactDate}>
        <div className={style.name}>
          <RiContactsBook3Fill size={20} />
          <h2>{name}</h2>
        </div>
        <div className={style.number}>
          <BsFillTelephoneFill />
          <p>{number}</p>
        </div>
      </div>
      <div className={style.btnwrap}>
        <button onClick={handleDelete} className={style.btn}>
          Delete
        </button>
        <button onClick={handleOpenModal} className={style.btn}>
          Update
        </button>
      </div>
    </div>
  );
}
