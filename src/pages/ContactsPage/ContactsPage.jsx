import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import { fetchContacts } from "../../redux/contacts/operations";
import SearchBox from "../../components/SearchBox/SearchBox";
import {
  selectContacts,
  selectIsLoading,
  selectMessage,
} from "../../redux/contacts/selectors";
import ModalForm from "../../components/ModalForm/ModalForm";
import ConfirmModal from "../../components/ConfirmModal/ConfirmModal";
import { clearMessage } from "../../redux/contacts/slice";
import Loader from "../../components/Loader/Loader";
import style from "./ContactsPage.module.css";

export default function ContactsPage() {
  const contactlist = useSelector(selectContacts);
  const message = useSelector(selectMessage);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    if (message) {
      toast.success(`${message}`, {
        style: {
          border: "1px solid #713200",
          padding: "16px",
          color: "#713200",
        },
        iconTheme: {
          primary: "#713200",
          secondary: "#FFFAEE",
        },
      });
      dispatch(clearMessage());
    }
  }, [message, dispatch]);

  return (
    <div className={style.pageBox}>
      {isLoading && <Loader />}
      <h3 className={style.title}>Phone Book</h3>
      <div className={style.wrap}>
        <ContactForm />
        <div className={style.listWrap}>
          {contactlist.length > 2 && <SearchBox />}
          <ContactList />
        </div>
      </div>
      <ModalForm />
      <ConfirmModal />
    </div>
  );
}
