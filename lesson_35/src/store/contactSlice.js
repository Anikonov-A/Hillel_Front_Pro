import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getContacts = createAsyncThunk('contacts/fetchContacts', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return await response.json();
});

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: { contacts: [] },
    reducers: {
        addContact: (state, action) => {
            state.contacts.push(action.payload);
        },
        deleteContact: (state, action) => {
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getContacts.fulfilled, (state, action) => {
            state.contacts = action.payload;
        });
    },
});


export const { addContact, deleteContact } = contactsSlice.actions;