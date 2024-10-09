import Contact from "../Contact/Contact";
import Notification from "../Notification/Notification";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice.js";
import { selectFilter } from "../../redux/filtersSlice.js";
import s from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const selectedContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.trim().toLowerCase())
  );

  return (
    <ul className={s.list}>
      {selectedContacts.map((item) => (
        <Contact key={item.id} {...item} />
      ))}
      {contacts.length === 0 && (
        <Notification text="No contacts in the phonebook" />
      )}
      {selectedContacts.length === 0 && contacts.length !== 0 && (
        <Notification text="Contact not found" />
      )}
    </ul>
  );
};

export default ContactList;
