// import css from "./App.module.css";
// import ContactForm from "../ContactForm/ContactForm";
// import SearchBox from "../SearchBox/SearchBox";
// import ContactList from "../ContactList/ContactList";
import { useDispatch, useSelector } from "react-redux";
import { Suspense, lazy, useEffect } from "react";
import Layout from "../Layout/Layout";
import { Route, Routes } from "react-router-dom";
import Loader from "../Loader/Loader";
import { refreshUser } from "../../redux/auth/operations";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import RestrictedRoute from "../RestrictedRoute/RestrictedRoute";
import { selectIsRefreshing } from "../../redux/auth/selectors";

const HomePage = lazy(() => import("../../pages/HomePage"));
const RegistrationPage = lazy(() => import("../../pages/RegistrationPage"));
const LoginPage = lazy(() => import("../../pages/LoginPage"));
const ContactsPage = lazy(() => import("../../pages/ContactsPage"));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <div>
      <Layout>
        <Suspense fallback={<Loader />}>
          {isRefreshing ? (
            <span>Please, wait...</span>
          ) : (
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
                    <RegistrationPage />
                  </RestrictedRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <RestrictedRoute>
                    <LoginPage />
                  </RestrictedRoute>
                }
              />
            </Routes>
          )}
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
