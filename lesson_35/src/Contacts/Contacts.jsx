import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Modal from "../Modal/Modal";
import { deleteContact } from "../store/contactSlice";

export default function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);

  const [contactIdToDelete, setContactIdToDelete] = useState(null);

  const handleDeleteClick = (contactId) => {
    setContactIdToDelete(contactId);
  };

  const handleDelete = () => {
    dispatch(deleteContact(contactIdToDelete));
    setContactIdToDelete(null);
  };

  return (
    <div>
      {contacts.length > 0 ? (
        <div>
          <div className="flex-col pt-10">
            {contacts.map((contact) => (
              <div
                className="text-sky-600 text-2xl flex mb-2 border-b-4 items-center"
                key={contact.id}
              >
                <div className="w-2/6">{contact.name}</div>
                <div className="w-2/6">{contact.username}</div>
                <div>{contact.phone}</div>
                <button
                  className="ml-auto text-xl bg-red-700 rounded px-4 text-blue-50 hover:bg-red-600 duration-300"
                  onClick={() => handleDeleteClick(contact.id)}
                >
                  DELETE
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <h2 className="text-center text-2xl py-24">There is no data here</h2>
      )}
      <Modal
        showModal={!!contactIdToDelete}
        onClose={() => setContactIdToDelete(null)}
        onConfirm={handleDelete}
      />
    </div>
  );
}
