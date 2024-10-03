import style from "./Contact.module.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { RiContactsBook3Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { choseContact, openModal } from "../../redux/contacts/slice";

export default function Contact({ contact: { name, number, id } }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(choseContact({ id, number, name }));
    dispatch(openModal("openConfirm"));
  };

  const handleOpenModal = () => {
    dispatch(choseContact({ id, number, name }));
    dispatch(openModal("openForm"));
  };
  return (
    <div className={style.contact}>
      <div className={style.contactData}>
        <div className={style.field}>
          <RiContactsBook3Fill size={20} />
          <p className={style.name}>{name}</p>
        </div>
        <div className={style.field}>
          <BsFillTelephoneFill />
          <p>{number}</p>
        </div>
      </div>
      <div className={style.btnwrap}>
        <button onClick={handleOpenModal} className={style.btn}>
          Update
        </button>
        <button onClick={handleDelete} className={style.btn}>
          Delete
        </button>
      </div>
    </div>
  );
}
