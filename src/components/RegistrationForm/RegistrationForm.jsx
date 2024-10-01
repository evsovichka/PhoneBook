import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const registrationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Short name")
    .max(50, "Long name")
    .required("Required"),
  email: Yup.string().email("Not valid").required("Required"),
  password: Yup.string().min(4, "Too short").max(16, "Too long"),
});

export default function RegistrationForm() {
  const id = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={registrationSchema}
    >
      <Form>
        <div>
          <label htmlFor={`name-${id}`}>Username</label>
          <Field type="text" name="name" id={`name-${id}`} />
          <ErrorMessage name="name" component="span" />
        </div>
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
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
