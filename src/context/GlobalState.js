import { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

// Initial State
const initialState = {
  selectedContact: {},
  contacts: [],
  error: null,
  showEmailForm: false,
  message: '',
  messageType: 'success',
  loading: true,
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  async function getContacts() {
    try {
      const res = await axios.get(
        'https://avb-contacts-api.herokuapp.com/contacts/paginated?itemsPerPage=50'
      );

      // Sort contacts by First Name
      let sortedContacts = res.data.contacts;
      sortedContacts.sort((a, b) => {
        let fa = a.firstName.toLowerCase();
        let fb = b.firstName.toLowerCase();

        if (fa < fb) {
          return -1;
        }

        if (fa > fb) {
          return 1;
        }

        return 0;
      });

      dispatch({
        type: 'GET_CONTACTS',
        payload: sortedContacts,
      });
    } catch (err) {
      setAlertMessage(err.response.data.message);
      setMessageType('error');
      setTimeout(() => {
        setAlertMessage('');
      }, 10000);
    }
  }

  async function addContact(contact) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post(
        'https://avb-contacts-api.herokuapp.com/contacts',
        contact,
        config
      );

      dispatch({
        type: 'ADD_CONTACT',
        payload: res.data,
      });

      setAlertMessage(
        `Successfully added ${contact.firstName} ${contact.lastName}`
      );
      setMessageType();
      setTimeout(() => {
        setAlertMessage('');
      }, 5000);

      getContacts();
    } catch (err) {
      setAlertMessage(err.response.data.message);
      setMessageType('error');
      setTimeout(() => {
        setAlertMessage('');
      }, 10000);
    }
  }

  async function updateContact(contact) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.put(
        `https://avb-contacts-api.herokuapp.com/contacts/${contact.id}`,
        contact,
        config
      );

      dispatch({
        type: 'UPDATE_CONTACT',
        payload: res.data,
      });

      setAlertMessage(
        `Successfully updated ${contact.firstName} ${contact.lastName}`
      );
      setMessageType();
      setTimeout(() => {
        setAlertMessage('');
      }, 5000);

      getContacts();
    } catch (err) {
      setAlertMessage(err.response.data.message);
      setMessageType('error');
      setTimeout(() => {
        setAlertMessage('');
      }, 10000);
    }
  }

  async function deleteContact(contact) {
    try {
      await axios.delete(
        `https://avb-contacts-api.herokuapp.com/contacts/${contact.id}`
      );

      dispatch({
        type: 'DELETE_CONTACT',
        payload: contact.id,
      });

      setSelectedContact({});
      setAlertMessage(
        `Successfully deleted ${contact.firstName} ${contact.lastName}`
      );
      setMessageType();
      setTimeout(() => {
        setAlertMessage('');
      }, 5000);
      getContacts();
    } catch (err) {
      setAlertMessage(err.response.data.message);
      setMessageType('error');
      setTimeout(() => {
        setAlertMessage('');
      }, 10000);
    }
  }

  function setSelectedContact(selectedContact) {
    dispatch({
      type: 'SET_SELECTED_CONTACT',
      payload: selectedContact,
    });
  }

  function toggleShowEmailForm(showEmailForm) {
    dispatch({
      type: 'TOGGLE_SHOW_EMAIL_FORM',
      payload: !showEmailForm,
    });
  }

  function setAlertMessage(message) {
    dispatch({
      type: 'SET_ALERT_MESSAGE',
      payload: message,
    });
  }

  function setMessageType(type = 'success') {
    dispatch({
      type: 'SET_MESSAGE_TYPE',
      payload: type,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        selectedContact: state.selectedContact,
        contacts: state.contacts,
        showEmailForm: state.showEmailForm,
        message: state.message,
        messageType: state.messageType,
        loading: state.loading,
        getContacts,
        setSelectedContact,
        toggleShowEmailForm,
        addContact,
        updateContact,
        deleteContact,
        setAlertMessage,
        setMessageType,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
