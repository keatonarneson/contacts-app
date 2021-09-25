import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const ContactItem = ({ contact, activeIndex, setActiveIndex, index }) => {
  const { setSelectedContact } = useContext(GlobalContext);

  const clickHandler = () => {
    setSelectedContact(contact);
    setActiveIndex(index);
  };

  return (
    <li
      className={activeIndex === index ? 'selected-contact' : ''}
      onClick={clickHandler}
    >
      {contact && `${contact.firstName} ${contact.lastName}`}
    </li>
  );
};

export default ContactItem;
