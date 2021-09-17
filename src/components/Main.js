import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';

import Email from './EmailItem';
import EmailForm from './EmailForm';

const Main = () => {
  const [valueFirst, setValueFirst] = useState('');
  const [valueLast, setValueLast] = useState('');
  const [valueEmail, setValueEmail] = useState('');
  const {
    selectedContact,
    contacts,
    getContacts,
    showEmailForm,
    toggleShowEmailForm,
    setTempContact,
  } = useContext(GlobalContext);

  useEffect(() => {
    getContacts();
  }, []);

  useEffect(() => {
    if (Object.keys(selectedContact).length !== 0) {
      setValueFirst(selectedContact.firstName);
      setValueLast(selectedContact.lastName);
    }
  }, [selectedContact]);

  const handleChangeFirst = e => {
    setValueFirst(e.target.value);
  };

  const handleChangeLast = e => {
    setValueLast(e.target.value);
  };

  const handleEmailForm = () => {
    toggleShowEmailForm(showEmailForm);
  };

  console.log(setTempContact);

  return (
    <div className="main-container">
      <div className="alert-container"></div>

      <div className="form-container">
        <form>
          <label for="first-name">First Name</label>
          <br />
          <input
            type="text"
            id="first-name"
            name="first-name"
            placeholder="First Name"
            value={valueFirst}
            onChange={handleChangeFirst}
          />
        </form>
        <form>
          <label for="last-name">Last Name</label>
          <br />
          <input
            type="text"
            id="last-name"
            name="last-name"
            placeholder="Last Name"
            value={valueLast}
            onChange={handleChangeLast}
          />
        </form>
      </div>

      <br />

      <div className="email-container">
        <h6>Email</h6>
        <ul>
          {selectedContact.emails && <Email emails={selectedContact.emails} />}
        </ul>
        <div className="add-email-container">
          <button onClick={handleEmailForm} className="circle email-add">
            <div className="bar horizontal" />
            <div className="bar vertical" />
          </button>

          <p id="add-email">add email</p>
        </div>
        <EmailForm
          showEmailForm={showEmailForm}
          value={valueEmail}
          setValue={setValueEmail}
          // setTempContactEmail={setTempContact.emails}
        />
      </div>

      <div className="button-container">
        <button id="delete-btn">Delete</button>
        <div className="button-group">
          <button id="cancel-btn">Cancel</button>
          <button id="save-btn">Save</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
