import { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';

const EmailItem = ({ emails }) => {
  const {} = useContext(GlobalContext);

  // useEffect(() => {
  //   getContacts();
  // }, []);

  const clickHandler = () => {};

  return emails.map(email => (
    <li key={email} onClick={clickHandler}>
      {email}
    </li>
  ));
};

export default EmailItem;
