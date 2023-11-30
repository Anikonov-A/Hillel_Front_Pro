import { ADD_CONTACT, DELETE_CONTACT, SET_CONTACTS } from './actions';

const initialState = {
    contacts: [],
};

const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CONTACT:
            return {
                ...state,
                contacts: [...state.contacts, action.payload],
            };

        case DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter((contact) => contact.id !== action.payload),
            };

        case SET_CONTACTS:
            return {
                ...state,
                contacts: action.payload,
            };

        default:
            return state;
    }
};

export default contactsReducer;