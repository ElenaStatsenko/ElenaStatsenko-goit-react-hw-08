import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import { Layout } from "../Layout";
import { HomePage } from "../../pages/HomePage/HomePage";
import { RegisterPage } from "../../pages/RegistrationPage/RegistrationPage";
import { LoginPage } from "../../pages/LoginPage/LoginPage";
import { ContactsPage } from "../../pages/ContactsPage/ContactsPage";
import { fetchContacts } from "../../redax/contacts/operations";
import { selectGetIsLoading } from "../../redax/contacts/slice";
import { selectGetError } from "../../redax/contacts/slice";

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectGetIsLoading);
  const error = useSelector(selectGetError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Layout>
        <Routes>
     
        <Route path= "/" element={<HomePage />} />
        <Route path ="/register" element= {<RegisterPage />} />
        <Route path ="/login" element = {<LoginPage />} />
        <Route path ="/contacts" element ={<ContactsPage />} />
        </Routes>
      </Layout>
      <h1>Phonebook</h1>

      <ContactForm />
      <SearchBox />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </div>
  );
}

   