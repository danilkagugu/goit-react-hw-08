// import css from "./App.module.css";
// import ContactForm from "../ContactForm/ContactForm";
// import SearchBox from "../SearchBox/SearchBox";
// import ContactList from "../ContactList/ContactList";
import { useDispatch } from "react-redux";
import { Suspense, lazy, useEffect } from "react";
import Layout from "../Layout/Layout";
import { Route, Routes } from "react-router-dom";
import Loader from "../Loader/Loader";
import { refreshUser } from "../../redux/auth/operations";
import RestrictedRoute from "../../pages/RestrictedRoute/RestrictedRoute";
import PrivateRoute from "../../pages/PrivateRoute/PrivateRoute";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const RegistrationFormPage = lazy(() =>
  import("../../pages/RegistrationFormPage/RegistrationFormPage")
);
const LoginFormPage = lazy(() =>
  import("../../pages/LoginFormPage/LoginFormPage")
);
const ContactsPage = lazy(() =>
  import("../../pages/ContactsPage/ContactsPage")
);

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(fetchContacts());
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <div>
      <Layout>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <ContactsPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/register"
              element={
                <RestrictedRoute>
                  <RegistrationFormPage />
                </RestrictedRoute>
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute>
                  <LoginFormPage />
                </RestrictedRoute>
              }
            />
          </Routes>
        </Suspense>
      </Layout>
    </div>
  );
}

export default App;
// <div className={css.container}>
//   <h1>Phonebook</h1>
//   <ContactForm />
//   <SearchBox />
//   <ContactList />
// </div>
