import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup";
import css from "./RegistrationForm.module.css";
// import { useDispatch } from "react-redux";

const init = {
  name: "",
  email: "",
  password: "",
};

const RegistrationForm = ({ onRegister }) => {
  //   const dispatch = useDispatch();
  const nameId = useId();
  const numberId = useId();

  const RigisterSchema = object().shape({
    name: string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: string().email("Must be a valid email").required("Required"),
    password: string().min(8, "Too Short!").required("Required"),
  });

  const handleSubmit = (value, actions) => {
    onRegister(value);

    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={init}
        onSubmit={handleSubmit}
        validationSchema={RigisterSchema}
      >
        <Form className={css.form}>
          <label htmlFor={nameId}>Name</label>
          <Field
            className={css.formInput}
            type="text"
            name="name"
            id={nameId}
            placeholder="Danulo Yanishevskiy"
          />
          <span className={css.error}>
            <ErrorMessage name="name" as="span" />
          </span>

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
            registration
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
