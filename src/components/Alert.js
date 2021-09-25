import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Alert = () => {
  const { message, messageType } = useContext(GlobalContext);

  return <div className={`message-container ${messageType}`}>{message}</div>;
};

export default Alert;
