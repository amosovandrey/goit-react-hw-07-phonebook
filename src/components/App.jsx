import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addContact,
  deleteContact,
  selectContacts,
} from '../redux/contactsSlice';
import { selectFilter, setFilter } from '../redux/filterSlice';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import Section from './Section/Section';

import css from './App.module.css';

function App() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onAddContact = newContact => {
    dispatch(addContact(newContact));
  };

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const changeFilter = evt => {
    dispatch(setFilter(evt.currentTarget.value));
  };

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <div className={css.wrapper}>
      <Section title="Phonebook">
        <ContactForm contacts={contacts} onAddContact={onAddContact} />
      </Section>

      <Section title="Contacts">
        <Filter value={filter} onChange={changeFilter} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={onDeleteContact}
        />
      </Section>
    </div>
  );
}

export default App;
