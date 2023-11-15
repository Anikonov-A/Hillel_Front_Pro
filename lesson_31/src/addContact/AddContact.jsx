import {useRef, useState} from "react";

export default function AddContact({saveContact, handleBackToContacts}) {
    const name = useRef('');
    const username = useRef('');
    const phone = useRef('');

    const [error,setError]=useState('')

    const handleAddContact = () => {
        if (!name.current.value || !username.current.value || !phone.current.value) {
          setError(`Please fill all fields`)
        } else {
            const newContact = {
                name: name.current.value,
                username: username.current.value,
                phone: phone.current.value,
                id: Math.floor(Math.random() * 1000)
            };
            saveContact(newContact)

            name.current.value = '';
            username.current.value = '';
            phone.current.value = '';

            setError('')
        }
    }

    return (
        <div>
            <div className="flex flex-col gap-3 mx-auto w-1/3 pt-5">
                <input type="text" ref={name} placeholder="Enter name" className={`border-4 `}/>
                <input type="text" ref={username} placeholder="Enter your user name" className={`border-4 `}/>
                <input type="text" ref={phone} placeholder="Enter your phone" className={`border-4`}/>
                {error && <p className="text-white text-2xl text-center bg-red-600 rounded">{error}</p>}
                <div className="flex gap-2">
                    <button onClick={handleAddContact}
                            className="bg-sky-700 w-1/2 mx-auto py-2 text-xl text-white rounded hover:bg-sky-600 duration-300">Add
                        Contact
                    </button>
                    <button onClick={handleBackToContacts}
                            className="bg-orange-600 w-1/2 mx-auto py-2 text-xl text-white rounded hover:bg-orange-500 duration-500">Back
                        to Contacts
                    </button>
                </div>
            </div>
        </div>
    )
}