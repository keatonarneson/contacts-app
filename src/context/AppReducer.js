/* eslint-disable import/no-anonymous-default-export */
export default (state, action) => {
  switch (action.type) {
    case 'GET_CONTACTS':
      return {
        ...state,
        contacts: action.payload,
      };
    case 'CONTACTS_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    case 'SET_SELECTED_CONTACTS':
      return {
        ...state,
        selectedContact: action.payload,
      };
    case 'TOGGLE_SHOW_EMAIL_FORM':
      return {
        ...state,
        showEmailForm: action.payload,
      };
    case 'SET_TEMP_CONTACT':
      return {
        ...state,
        tempContact: action.payload,
      };
    default:
      return state;
  }
};
