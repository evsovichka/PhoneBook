import ReactModal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import {
  selectModalIsOpen,
  selectUpdateContact,
} from "../../redux/contacts/selectors";
import { closeModal } from "../../redux/contacts/slice";
import { deleteContact } from "../../redux/contacts/operations";
import style from "./ConfirmModal.module.css";

export default function ConfirmModal() {
  const { id, name } = useSelector(selectUpdateContact);
  const dispatch = useDispatch();
  const modalIsOpen = useSelector(selectModalIsOpen);

  const handleDelete = () => {
    dispatch(deleteContact(id));
    dispatch(closeModal());
  };

  return (
    <ReactModal
      isOpen={modalIsOpen === "openConfirm"}
      ariaHideApp={false}
      onRequestClose={() => dispatch(closeModal())}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      className={style.modalContent}
      style={{
        overlay: {
          backgroundColor: "rgba(60, 60, 60, 0.9)",
          display: "flex",
          justifyContent: "center",
        },
      }}
    >
      <div className={style.box}>
        <p>
          Are you sure you want to delete <b>{name}</b>?
        </p>
        <div className={style.btnWrap}>
          <button className={style.btn} onClick={handleDelete} type="button">
            Delete
          </button>
          <button
            className={style.btn}
            onClick={() => dispatch(closeModal())}
            type="button"
          >
            Cansel
          </button>
        </div>
      </div>
    </ReactModal>
  );
}
