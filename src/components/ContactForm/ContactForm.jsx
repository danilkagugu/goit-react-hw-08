import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";
// import { addContact } from "../../redux/contactsSlice";

const init = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();
  const nameId = useId();
  const numberId = useId();

  const FeedbackSchema = object().shape({
    name: string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: string()
      .min(3, "Too Short!")
      .max(20, "Too Long!")
      .required("Required"),
  });

  const handleSubmit = (value, actions) => {
    dispatch(addContact(value));

    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={init}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
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

          <label htmlFor={numberId}>Number</label>
          <Field
            className={css.formInput}
            type="text"
            name="number"
            id={numberId}
            placeholder="548-78-91"
          />
          <span className={css.error}>
            <ErrorMessage name="number" as="span" />
          </span>

          <button className={css.btnAdd} type="submit">
            Add
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
