import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import * as Yup from "yup";

const initialValues = {
  email: "",
  password: "",
};

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Not valid").required("Required"),
  password: Yup.string().min(4, "Too short").max(20, "Too long"),
});

export default function LoginForm() {
  const id = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={loginSchema}
    >
      <Form>
        <div>
          <label htmlFor={`email-${id}`}>Email</label>
          <Field type="email" name="email" id={`email-${id}`} />
          <ErrorMessage name="email" component="span" />
        </div>
        <div>
          <label htmlFor={`password-${id}`}>Password</label>
          <Field type="password" name="password" id={`password-${id}`} />
          <ErrorMessage name="password" component="span" />
        </div>
        <button type="submit">Log in</button>
      </Form>
    </Formik>
  );
}
