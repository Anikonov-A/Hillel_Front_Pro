import './App.css';
import Contacts from "./Contacts/Contacts";
import {useEffect, useState} from "react";
import AddContact from "./AddContact/AddContact";

function App() {
    const USERS_DATA = 'https://jsonplaceholder.typicode.com/users'

    const [page, setPage] = useState('contacts')

    const [contacts, setContacts] = useState([]);
    const deleteContact = (contactId) => {
        setContacts(contacts.filter((contact) => contact.id !== contactId));
    };
    const saveContact =(newContact)=>{
        setContacts([...contacts, newContact]);
        setPage("contacts")
    }
    const handleBackToContacts=()=>{
       setPage("contacts")
    }
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(USERS_DATA);
            const data = await res.json();
            setContacts(data);
        };
        fetchData();
    }, []);

    return (
        <div className="container mx-auto">
            <div className="p-2 flex justify-center gap-2">
                <button className="text-xl bg-sky-700 rounded px-4 py-1 text-blue-50 hover:bg-sky-600 duration-300"
                        onClick={() => {
                            setPage('contacts')
                        }}>Contacts
                </button>
                <button className="text-xl bg-sky-700 rounded px-4 py-1 text-blue-50 hover:bg-sky-600 duration-300"
                        onClick={() => {
                            setPage('AddContact')
                        }}>Add Contact
                </button>
            </div>
            {page === 'contacts' ?(contacts.length > 0 ? (<Contacts contacts={contacts} deleteContact={deleteContact}/>) :(<h2 className="text-center text-2xl py-24">There is no data here</h2>)) :(< AddContact saveContact={saveContact} handleBackToContacts={handleBackToContacts}/>)}
        </div>
    );
}

export default App;
