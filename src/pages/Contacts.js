import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/contacts/operations";
import { selectContactsState } from "redux/contacts/selectors";
import { ContactList } from "components/ContactList/ContactList";
import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";

export default function Contacts() {
    const dispatch = useDispatch();
    const { isLoading, error } = useSelector(selectContactsState);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <div>
            <title>Contacts</title>
            <h1>Phonebook</h1>
            <ContactForm />

            <h2>Contacts</h2>
            <Filter />
            <ContactList />

            {isLoading && <p>Loading contacts...</p>}
            {error && <p>{error}</p>}
        </div>
    )
}