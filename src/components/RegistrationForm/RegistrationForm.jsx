import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup";
import css from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

const init = {
  name: "",
  email: "",
  password: "",
};

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const onRegister = (formData) => {
    dispatch(register(formData));
  };
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
    <div className={css.registrationContainer}>
      <Formik
        initialValues={init}
        onSubmit={handleSubmit}
        validationSchema={RigisterSchema}
      >
        <Form className={css.form}>
          <label className={css.labelForm}>
            Name
            <Field
              className={css.formInput}
              type="text"
              name="name"
              placeholder="Danulo Yanishevskiy"
            />
          </label>
          <span className={css.error}>
            <ErrorMessage name="name" as="span" />
          </span>

          <label className={css.labelForm}>
            Email
            <Field
              className={css.formInput}
              type="text"
              name="email"
              placeholder="danilyanishevskiy@gmail.com"
            />
          </label>
          <span className={css.error}>
            <ErrorMessage name="email" as="span" />
          </span>
          <label className={css.labelForm}>
            Password
            <Field
              className={css.formInput}
              type="password"
              name="password"
              placeholder="password"
            />
          </label>
          <span className={css.error}>
            <ErrorMessage name="password" as="span" />
          </span>

          <button className={css.btnRegistration} type="submit">
            Registration
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
