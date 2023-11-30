export const ADD_CONTACT = 'ADD_CONTACT';
export const DELETE_CONTACT = 'DELETE_CONTACT';
export const SET_CONTACTS = 'SET_CONTACTS';

export const addContact = (newContact) => ({
    type: ADD_CONTACT,
    payload: newContact,
});

export const deleteContact = (contactId) => ({
    type: DELETE_CONTACT,
    payload: contactId,
});

export const setContacts = (contacts) => ({
    type: SET_CONTACTS,
    payload: contacts,
});