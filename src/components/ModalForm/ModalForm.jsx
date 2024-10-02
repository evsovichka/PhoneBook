import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import ReactModal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts, updateContact } from "../../redux/contacts/operations";
import { choseContact, closeModal } from "../../redux/contacts/slice";
import * as Yup from "yup";
import {
  selectModalIsOpen,
  selectUpdateContact,
} from "../../redux/contacts/selectors";

const updateFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short")
    .max(50, "Too long")
    .required("Required"),
  number: Yup.string()
    .test(
      "number-format",
      "Invalid number format (expected XXX-XX-XX)",
      (value) => {
        const regex = /^\d{3}-\d{2}-\d{2}$/;
        return regex.test(value);
      }
    )
    .required("Required"),
});

export default function ModalForm() {
  const dispatch = useDispatch();
  const FieldId = useId();
  const { id, name, number } = useSelector(selectUpdateContact);
  const modalIsOpen = useSelector(selectModalIsOpen);

  const handleSubmit = (value, actions) => {
    dispatch(updateContact({ contactId: id, credential: value }));
    dispatch(choseContact({}));
    dispatch(closeModal());
  };

  return (
    <ReactModal
      isOpen={modalIsOpen === "openForm"}
      ariaHideApp={false}
      onRequestClose={() => dispatch(closeModal())}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      style={{
        overlay: { backgroundColor: "rgba(60, 60, 60, 0.9)" },
      }}
    >
      <Formik
        initialValues={{
          name: name,
          number: number,
        }}
        onSubmit={handleSubmit}
        validationSchema={updateFormSchema}
      >
        <Form>
          <div>
            <label htmlFor={`name-${FieldId}`}>Name</label>
            <Field type="text" name="name" id={`name-${FieldId}`} />
            <ErrorMessage name="name" component="span" />
          </div>
          <div>
            <label htmlFor={`number-${FieldId}`}>Number</label>
            <Field type="text" name="number" id={`number-${FieldId}`} />
            <ErrorMessage name="number" component="span" />
          </div>
          <button type="submit">Update</button>
        </Form>
      </Formik>
    </ReactModal>
  );
}
