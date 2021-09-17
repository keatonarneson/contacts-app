import { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';

import Contact from './ContactItem';

const Sidebar = () => {
  const { contacts, getContacts } = useContext(GlobalContext);

  useEffect(() => {
    getContacts();
  }, []);

  const clickHandler = e => {};

  return (
    <div className="sidebar-container">
      <div className="contacts-header-container">
        <h3>Contacts</h3>

        <button className="circle contacts-add">
          <div className="bar horizontal" />
          <div className="bar vertical" />
        </button>
      </div>

      <ul>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
