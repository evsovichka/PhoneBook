import ReactModal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import {
  selectModalIsOpen,
  selectUpdateContact,
} from "../../redux/contacts/selectors";
import { closeModal } from "../../redux/contacts/slice";
import { deleteContact } from "../../redux/contacts/operations";

export default function ConfirmModal() {
  const { id, name, number } = useSelector(selectUpdateContact);
  const dispatch = useDispatch();
  const modalIsOpen = useSelector(selectModalIsOpen);

  const handleDelete = () => {
    dispatch(deleteContact(id));
    dispatch(closeModal());
  };

  return (
    <ReactModal
      isOpen={true}
      ariaHideApp={false}
      onRequestClose={() => dispatch(closeModal())}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      style={{
        overlay: { backgroundColor: "rgba(60, 60, 60, 0.9)" },
      }}
    >
      <p>
        Are you sure you want to delete <b>{name}</b>?
      </p>
      <div>
        <button onClick={handleDelete} type="button">
          Delete
        </button>
        <button onClick={() => dispatch(closeModal())} type="button">
          Cansel
        </button>
      </div>
    </ReactModal>
  );
}
