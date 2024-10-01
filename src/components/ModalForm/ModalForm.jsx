import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import ReactModal from "react-modal";
import { useDispatch } from "react-redux";
import { updateContact } from "../../redux/contacts/operations";
import { closeModal, openModal } from "../../redux/contacts/slice";
import * as Yup from "yup";
const initialValues = {
  id: "",
  name: "",
  number: "",
};

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
  const id = useId();
  const handleSubmit = (value, actions) => {
    // dispatch(openModal());
    actions.resetForm();
    // dispatch(closeModal());
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
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={updateFormSchema}
      >
        <Form>
          <div>
            <label htmlFor={`name-${id}`}>Name</label>
            <Field type="text" name="name" id={`name-${id}`} />
            <ErrorMessage name="name" component="span" />
          </div>
          <div>
            <label htmlFor={`number-${id}`}>Number</label>
            <Field type="text" name="number" id={`number-${id}`} />
            <ErrorMessage name="number" component="span" />
          </div>
          <button type="submit">Update</button>
        </Form>
      </Formik>
    </ReactModal>
  );
}
