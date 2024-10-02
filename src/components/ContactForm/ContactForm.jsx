import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import style from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

const initialValues = {
  id: "",
  name: "",
  number: "",
};

const AddFormSchema = Yup.object().shape({
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

export default function ContactForm() {
  const dispatch = useDispatch();
  const id = useId();

  const handleSubmit = (value, actions) => {
    dispatch(addContact(value));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={AddFormSchema}
    >
      <Form className={style.form}>
        <div className={style.formField}>
          <label className={style.label} htmlFor={`name-${id}`}>
            Name
          </label>
          <Field
            className={style.input}
            type="text"
            name="name"
            id={`name-${id}`}
            placeholder="Enter name"
          />
          <ErrorMessage name="name" component="span" />
        </div>
        <div className={style.formField}>
          <label className={style.label} htmlFor={`number-${id}`}>
            Number
          </label>
          <Field
            className={style.input}
            type="text"
            name="number"
            id={`number-${id}`}
            placeholder="Enter number"
          />
          <ErrorMessage name="number" component="span" />
        </div>
        <button className={style.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
