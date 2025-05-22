import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/auth/operations";
import { selectIsLoading } from "../../redux/auth/selectors";
import style from "./LoginForm.module.css";

const initialValues = {
  email: "",
  password: "",
};

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Not valid").required("Required"),
  password: Yup.string()
    .min(4, "Too short")
    .max(20, "Too long")
    .required("Required"),
});

export default function LoginForm() {
  const id = useId();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };

  return (
    <section className={style.section}>
      <h3>Log In to Your Phonebook</h3>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={loginSchema}
      >
        <Form className={style.form}>
          <div className={style.formField}>
            <label className={style.label} htmlFor={`email-${id}`}>
              Email
            </label>
            <Field
              className={style.input}
              type="email"
              name="email"
              id={`email-${id}`}
              placeholder="Enter your email"
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
              placeholder="Enter your password"
            />
            <ErrorMessage name="password" component="span" />
          </div>
          <button className={style.btn} type="submit" disabled={isLoading}>
            Log in
          </button>
        </Form>
      </Formik>
    </section>
  );
}
