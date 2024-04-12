import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup";
import css from "./LoginForm.module.css";
// import { useDispatch } from "react-redux";

const init = {
  email: "",
  password: "",
};

const LoginForm = ({ onLogin }) => {
  //   const dispatch = useDispatch();
  const nameId = useId();
  const numberId = useId();

  const RigisterSchema = object().shape({
    email: string().email("Must be a valid email").required("Required"),
    password: string().min(8, "Too Short!").required("Required"),
  });

  const handleSubmite = (value, actions) => {
    onLogin(value);

    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={init}
        onSubmit={handleSubmite}
        validationSchema={RigisterSchema}
      >
        <Form className={css.form}>
          <label htmlFor={nameId}>Email</label>
          <Field
            className={css.formInput}
            type="text"
            name="email"
            id={nameId}
            placeholder="danilyanishevskiy@gmail.com"
          />
          <span className={css.error}>
            <ErrorMessage name="email" as="span" />
          </span>
          <label htmlFor={numberId}>Password</label>
          <Field
            className={css.formInput}
            type="password"
            name="password"
            id={numberId}
            placeholder="password"
          />
          <span className={css.error}>
            <ErrorMessage name="password" as="span" />
          </span>

          <button className={css.btnAdd} type="submit">
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
