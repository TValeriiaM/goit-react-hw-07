import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css"

export default function ContactList() {
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectNameFilter);
    const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
    );



    return (
        <ul className={css.contactsList}>
            {filteredContacts.map((contact) => (
                <li key={contact.id} className={css.contactItem}>
                    <Contact contact={contact}/>
                </li>))}
	
        </ul>
    );
}


