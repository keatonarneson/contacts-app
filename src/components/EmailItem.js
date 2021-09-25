const EmailItem = ({ email, emailArray, setEmailArray }) => {
  const clickHandler = e => {
    let newEmailArray = emailArray.filter(emailItem => emailItem !== email);
    setEmailArray(newEmailArray);
  };

  return (
    <li className="email-item">
      {email}
      <button onClick={clickHandler} className="circle email-delete hidden">
        <div className="bar horizontal" />
      </button>
    </li>
  );
};

export default EmailItem;
