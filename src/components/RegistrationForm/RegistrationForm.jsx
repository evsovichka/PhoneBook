import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/auth/operations";
import * as Yup from "yup";
import style from "./RegistrationForm.module.css";
import { selectIsLoading } from "../../redux/auth/selectors";

const registrationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Short name")
    .max(50, "Long name")
    .required("Required"),
  email: Yup.string().email("Not valid").required("Required"),
  password: Yup.string()
    .min(4, "Too short")
    .max(20, "Too long")
    .required("Required"),
});

export default function RegistrationForm() {
  const id = useId();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={registrationSchema}
    >
      <Form className={style.form}>
        <div className={style.formField}>
          <label className={style.label} htmlFor={`name-${id}`}>
            Username
          </label>
          <Field
            className={style.input}
            type="text"
            name="name"
            id={`name-${id}`}
          />
          <ErrorMessage name="name" component="span" />
        </div>
        <div className={style.formField}>
          <label className={style.label} htmlFor={`email-${id}`}>
            Email
          </label>
          <Field
            className={style.input}
            type="email"
            name="email"
            id={`email-${id}`}
          />
          <ErrorMessage name="email" component="span" />
        </div>
        <div className={style.formField}>
          <label className={style.label} htmlFor={`password-${id}`}>
            Password
          </label>
          <Field
            className={style.input}
            type="password"
            name="password"
            id={`password-${id}`}
          />
          <ErrorMessage name="password" component="span" />
        </div>
        <button className={style.btn} type="submit" disabled={isLoading}>
          Register
        </button>
      </Form>
    </Formik>
  );
}
