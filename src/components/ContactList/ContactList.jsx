import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
// import {
//   selectError,
//   selectFilteredContacts,
//   selectLoading,
// } from "../../redux/contactsSlice";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contacts/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";

const ContactList = () => {
  const selectContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      {isLoading && <Loader />}
      {isError && <Error />}
      <ul className={css.listEl}>
        {selectContacts.length > 0 &&
          selectContacts.map((item) => (
            <li className={css.itemList} key={item.id}>
              <Contact name={item.name} number={item.number} id={item.id} />
            </li>
          ))}
      </ul>
    </>
  );
};

export default ContactList;
