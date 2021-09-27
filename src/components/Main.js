import { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';

import EmailItem from './EmailItem';
import EmailForm from './EmailForm';
import Alert from './Alert';

const Main = ({
  valueFirst,
  setValueFirst,
  valueLast,
  setValueLast,
  emailArray,
  setEmailArray,
  valueEmail,
  setValueEmail,
  setActiveIndex,
}) => {
  const {
    selectedContact,
    setSelectedContact,
    getContacts,
    showEmailForm,
    toggleShowEmailForm,
    addContact,
    updateContact,
    deleteContact,
    message,
    contacts,
  } = useContext(GlobalContext);

  useEffect(() => {
    getContacts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (Object.keys(selectedContact).length !== 0) {
      setValueFirst(selectedContact.firstName);
      setValueLast(selectedContact.lastName);
    }
  }, [selectedContact, setValueFirst, setValueLast]);

  useEffect(() => {
    if (selectedContact.emails) {
      setEmailArray(selectedContact.emails);
    }

    // Highlights ContactItem
    if (selectedContact.id) {
      let index = contacts.findIndex(i => i.id === selectedContact.id);
      setActiveIndex(index);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedContact, setEmailArray, contacts]);

  const handleChangeFirst = e => {
    setValueFirst(e.target.value);
  };

  const handleChangeLast = e => {
    setValueLast(e.target.value);
  };

  const handleFormEnter = e => {
    e.preventDefault();
  };

  const handleEmailForm = () => {
    toggleShowEmailForm(showEmailForm);
  };

  const handleSave = () => {
    let contact = {
      firstName: valueFirst,
      lastName: valueLast,
      emails: emailArray,
    };
    if (Object.keys(selectedContact).length !== 0) {
      contact = { ...contact, id: selectedContact.id };
      updateContact(contact);
    } else {
      addContact(contact);
    }

    getContacts();
  };

  const handleDelete = e => {
    deleteContact(selectedContact);
    setValueEmail('');
    setEmailArray([]);
    setValueFirst('');
    setValueLast('');
    setActiveIndex(-1);
  };

  const handleCancel = () => {
    setValueEmail('');
    setEmailArray([]);
    setValueFirst('');
    setValueLast('');
    setSelectedContact({});
    setActiveIndex(-1);
  };

  return (
    <div className="main-container">
      <div className="alert-container">{message && <Alert />}</div>

      <div className="form-container">
        <form onSubmit={handleFormEnter}>
          <label htmlFor="first-name">First Name</label>
          <br />
          <input
            type="text"
            id="first-name"
            name="first-name"
            placeholder="First Name"
            required
            value={valueFirst}
            onChange={handleChangeFirst}
          />
        </form>
        <form onSubmit={handleFormEnter}>
          <label htmlFor="last-name">Last Name</label>
          <br />
          <input
            type="text"
            id="last-name"
            name="last-name"
            placeholder="Last Name"
            required
            value={valueLast}
            onChange={handleChangeLast}
          />
        </form>
      </div>

      <br />

      <div className="email-container">
        <h6>Email</h6>
        <ul>
          {emailArray?.map((email, i) => (
            <EmailItem
              key={i}
              email={email}
              emailArray={emailArray}
              setEmailArray={setEmailArray}
            />
          ))}
        </ul>

        <div className="add-email-container">
          <button onClick={handleEmailForm} className="circle email-add">
            <div className="bar horizontal" />
            <div className="bar vertical" />
          </button>

          <p id="add-email" onClick={handleEmailForm}>
            add email
          </p>
        </div>
        <EmailForm
          showEmailForm={showEmailForm}
          formValue={valueEmail}
          setFormValue={setValueEmail}
          emailArray={emailArray}
          setEmailArray={setEmailArray}
        />
      </div>

      <div className="button-container">
        <button
          id="delete-btn"
          disabled={Object.keys(selectedContact).length === 0}
          onClick={() => {
            const confirmBox = window.confirm(
              'Do you really want to delete this contact?'
            );
            if (confirmBox === true) {
              handleDelete();
            }
          }}
        >
          Delete
        </button>
        <div className="button-group">
          <button
            id="cancel-btn"
            onClick={handleCancel}
            disabled={
              valueLast <= 0 &&
              valueFirst <= 0 &&
              valueEmail <= 0 &&
              emailArray.length <= 0
            }
          >
            Cancel
          </button>
          <button
            id="save-btn"
            onClick={handleSave}
            disabled={valueFirst <= 0 || valueLast <= 0}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
