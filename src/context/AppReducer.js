/* eslint-disable import/no-anonymous-default-export */
export default (state, action) => {
  switch (action.type) {
    case 'GET_CONTACTS':
      return {
        ...state,
        loading: false,
        contacts: action.payload,
      };
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case 'UPDATE_CONTACT':
      const updatedContact = action.payload;

      const updatedContacts = state.contacts.map(contact => {
        if (contact.id === updatedContact.id) {
          return updatedContact;
        }
        return contact;
      });
      return {
        ...state,
        contacts: updatedContacts,
      };
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    case 'SET_SELECTED_CONTACT':
      return {
        ...state,
        selectedContact: action.payload,
      };
    case 'TOGGLE_SHOW_EMAIL_FORM':
      return {
        ...state,
        showEmailForm: action.payload,
      };
    case 'SET_ALERT_MESSAGE':
      return {
        ...state,
        message: action.payload,
      };
    case 'SET_MESSAGE_TYPE':
      return {
        ...state,
        messageType: action.payload,
      };
    default:
      return state;
  }
};
