import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import {Contact} from "../types";

interface ContactsState {
    contacts: Contact[];
}

export const getContacts = createAsyncThunk<Contact[]>('contacts/fetchContacts', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return await response.json();
});

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: { contacts: [] } as ContactsState,
    reducers: {
        addContact: (state, action: PayloadAction<Contact>) => {
            state.contacts.push(action.payload);
        },
        deleteContact: (state, action: PayloadAction<number>) => {
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
