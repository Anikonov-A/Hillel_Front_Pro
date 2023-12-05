import { configureStore }  from "@reduxjs/toolkit"
import {contactsSlice} from "./contactSlice"

export const store = configureStore({
    reducer: {
        contacts: contactsSlice.reducer,
    },
});

export default store;