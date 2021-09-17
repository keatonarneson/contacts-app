import { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';

const ContactItem = ({ contact }) => {
  const { setSelectedContact } = useContext(GlobalContext);

  // useEffect(() => {
  //   getContacts();
  // }, []);

  const clickHandler = () => {
    setSelectedContact(contact);
  };

  return (
    <li onClick={clickHandler}>{`${contact.firstName} ${contact.lastName}`}</li>
  );
};

export default ContactItem;
