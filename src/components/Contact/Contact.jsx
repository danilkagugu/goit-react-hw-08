import css from "./Contact.module.css";
import { IoPersonSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ id, number, name }) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => dispatch(deleteContact(id));
  return (
    <>
      <div className={css.contactInfo}>
        <div className={css.name}>
          <IoPersonSharp className={css.iconPerson} />
          <p>{name}</p>
        </div>
        <div className={css.number}>
          <FaPhoneAlt className={css.iconPhone} />
          <p>{number}</p>
        </div>
      </div>
      <button
        className={css.btnDelete}
        type="sumbit"
        onClick={() => handleDelete(id)}
        id={id}
      >
        Delete
      </button>
    </>
  );
};

export default Contact;
