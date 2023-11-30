import './App.css';
import Contacts from "./Contacts/Contacts";
import { useEffect} from "react";
import AddContact from "./AddContact/AddContact";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {addContact, setContacts,deleteContact} from './store/actions';

function App() {
    const USERS_DATA = 'https://jsonplaceholder.typicode.com/users';

    const dispatch = useDispatch();
    const contacts = useSelector((state) => state.contacts.contacts);

    const removeContact = (contactId) => {
        dispatch(deleteContact(contactId));
    };

    const saveContact = (newContact) => {
        dispatch(addContact(newContact));
    };

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(USERS_DATA);
            const data = await res.json();
            dispatch(setContacts(data));
        };
        fetchData();
    }, [dispatch]);

    return (
        <Router>
            <div className="container mx-auto">
                <div className="p-2 flex justify-center gap-2">
                    <Link to="/" className="text-xl bg-sky-700 rounded px-4 py-1 text-blue-50 hover:bg-sky-600 duration-300">
                        Contacts
                    </Link>
                    <Link to="/add-contact" className="text-xl bg-sky-700 rounded px-4 py-1 text-blue-50 hover:bg-sky-600 duration-300">
                        Add Contact
                    </Link>
                </div>
                <Routes>
                    <Route path="/" element={<Contacts contacts={contacts} deleteContact={removeContact}/>} />
                    <Route path="/add-contact" element={<AddContact saveContact={saveContact} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;