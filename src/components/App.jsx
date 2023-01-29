import { useState, useEffect } from 'react';
import { Box } from './Box/Box.styled';
import { Title } from './Title/Title';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';

import { nanoid } from 'nanoid';

// const INITIAL_STATE = {
//   contacts: [],
//   filter: '',
      
// };

const INITIAL_CONTACTS = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const Titles = {
  form: 'Phonebook',
  contacts: 'Contacts',
};

const getInitialContacts = () => {
  const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
     if (parsedContacts) {
        return parsedContacts;
     } else {
      return INITIAL_CONTACTS;
     }
    };

    export const App = ()  => {
      const [contacts, setContacts] = useState(getInitialContacts);
      const [filter, setFilter] = useState('');
    
      useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts));
      }, [contacts]);

      const addContact = ({ name, number}) => {
        if (contacts.find(contact => contact.name === name)) {
          return;
        }
      
        setContacts(prevContacts => [
          ...prevContacts, { id: nanoid(), name, number},
        ]);
      };

      const deleteContact = id => {
        setContacts(prevContacts =>
          prevContacts.filter(contact => contact.id !== id)
          );
      };

      const filterContacts = e => {
        setFilter(e.target.value);
      };
           
      let visibleContacts = contacts.filter
      (contact => contact.name.toLowerCase().includes(filter.toLowerCase())
      );

       return (
      <Box>

        <Title title={Titles.form} />
        <ContactForm onSubmit={addContact} />
        <Title title={Titles.contacts} />
        <Filter filter={filter} onFilterInput={filterContacts} />
        <ContactsList contacts={visibleContacts}
        onDelete={deleteContact}     
        />
      </Box>
    );
  };

