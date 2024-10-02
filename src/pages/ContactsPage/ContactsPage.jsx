import { useEffect } from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import { fetchContacts } from "../../redux/contacts/operations";
import { useDispatch, useSelector } from "react-redux";
import SearchBox from "../../components/SearchBox/SearchBox";
import {
  selectContacts,
  selectMessage,
  selectModalIsOpen,
} from "../../redux/contacts/selectors";
import ModalForm from "../../components/ModalForm/ModalForm";
import toast from "react-hot-toast";
import ConfirmModal from "../../components/ConfirmModal/ConfirmModal";
import { clearMessage } from "../../redux/contacts/slice";

export default function ContactsPage() {
  const contactlist = useSelector(selectContacts);
  const modalIsOpen = useSelector(selectModalIsOpen);
  const message = useSelector(selectMessage);

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
    <div>
      <ContactForm />
      {contactlist.length > 2 && <SearchBox />}
      <ContactList />
      {modalIsOpen === "openForm" && <ModalForm />}
      {modalIsOpen === "openConfirm" && <ConfirmModal />}
    </div>
  );
}
