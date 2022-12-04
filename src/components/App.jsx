import { useEffect, lazy } from "react";
import { useDispatch } from 'react-redux';
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';
// import { useDispatch, useSelector } from "react-redux";
// import { fetchContacts } from "redux/operations";
// import { selectContactsState } from "redux/contacts/selectors";
// import ContactForm from "./ContactForm";
// import ContactList from "./ContactList";
// import Filter from "./Filter"

const HomePage = lazy(() => import("pages/Home"));
const LoginPage = lazy(() => import("pages/Login"));
const RegisterPage = lazy(() => import("pages/Register"));
const ContactsPage = lazy(() => import("pages/Contacts"));

export function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />}></Route>
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
        {/* <Route path="login" element={<LoginPage />}></Route>
        <Route path="register" element={<RegisterPage />}></Route>
        <Route path="contacts" element={<ContactsPage />}></Route> */}
        <Route path="*" element={<HomePage />}></Route>
      </Route>
    </Routes>
  );
};
