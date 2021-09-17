import { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

// Initial State
const initialState = {
  selectedContact: {},
  contacts: [],
  error: null,
  showEmailForm: false,
  tempContact: {
    firstName: '',
    lastName: '',
    emails: [],
  },
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
        'https://avb-contacts-api.herokuapp.com/contacts/paginated'
      );

      dispatch({
        type: 'GET_CONTACTS',
        payload: res.data.contacts,
      });
    } catch (error) {
      dispatch({
        type: 'CONTACTS_ERROR',
        payload: error.response.data.error,
      });
    }
  }

  function setSelectedContact(selectedContact) {
    dispatch({
      type: 'SET_SELECTED_CONTACTS',
      payload: selectedContact,
    });
  }

  function toggleShowEmailForm(showEmailForm) {
    dispatch({
      type: 'TOGGLE_SHOW_EMAIL_FORM',
      payload: !showEmailForm,
    });
  }

  function setTempContact(tempFirstName, tempLastName, tempEmails) {
    dispatch({
      type: 'SET_TEMP_CONTACT',
      payload: {
        firstName: tempFirstName,
        lastName: tempLastName,
        emails: tempEmails,
      },
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        selectedContact: state.selectedContact,
        contacts: state.contacts,
        showEmailForm: state.showEmailForm,
        tempContact: state.tempContact,
        getContacts,
        setSelectedContact,
        toggleShowEmailForm,
        setTempContact,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
