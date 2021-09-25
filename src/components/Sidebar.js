import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

import ContactItem from './ContactItem';

const Sidebar = ({
  setValueFirst,
  setValueLast,
  setEmailArray,
  setValueEmail,
  activeIndex,
  setActiveIndex,
}) => {
  const { contacts, setSelectedContact, loading } = useContext(GlobalContext);

  const clickHandler = () => {
    setValueEmail('');
    setEmailArray([]);
    setValueFirst('');
    setValueLast('');
    setSelectedContact({});
    setActiveIndex(-1);
  };

  return (
    <div className="sidebar-container scroll-bar">
      <div className="contacts-header-container">
        <h3>Contacts</h3>

        <button className="circle contacts-add" onClick={clickHandler}>
          <div className="bar horizontal" />
          <div className="bar vertical" />
        </button>
      </div>

      {loading ? (
        <div className="loader" />
      ) : (
        <ul>
          {contacts &&
            contacts.map((contact, index) => (
              <ContactItem
                key={index}
                contact={contact}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                index={index}
              />
            ))}
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
