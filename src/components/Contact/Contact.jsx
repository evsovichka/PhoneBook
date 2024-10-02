import style from "./Contact.module.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { RiContactsBook3Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { choseContact, openModal } from "../../redux/contacts/slice";
import toast from "react-hot-toast";

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
