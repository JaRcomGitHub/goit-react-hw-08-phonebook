import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectContactsFiltered } from 'redux/contacts/selectors';
import { Contact } from "./Contact/Contact";
import css from './ContactList.module.css'

export function ContactList() {
    const contacts = useSelector(selectContactsFiltered);
    const dispatch = useDispatch();

    return contacts.length > 0 ? (
        <div className={css.contactListBlock}>
            <ul>
                {contacts.map(({ id, name, number }) => (
                    <Contact
                        key={id}
                        name={name}
                        number={number}
                        onDeleteContact={() => dispatch(deleteContact(id))}
                    /> 
                ))}
            </ul>
        </div>
    ) : (<p>contact list is empty</p>);
}
