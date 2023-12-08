import "./App.css";
import Contacts from "./Contacts/Contacts";
import AddContact from "./AddContact/AddContact";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getContacts } from "./store/contactSlice";
import { useEffect } from "react";
import {AppDispatch} from "./store/store";


interface AppProps {}



function App(props: AppProps) {
  const dispatch:AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
      <Router>
        <div className="container mx-auto">
          <div className="p-2 flex justify-center gap-2">
            <Link
                to="/"
                className="text-xl bg-sky-700 rounded px-4 py-1 text-blue-50 hover:bg-sky-600 duration-300"
            >
              Contacts
            </Link>
            <Link
                to="/add-contact"
                className="text-xl bg-sky-700 rounded px-4 py-1 text-blue-50 hover:bg-sky-600 duration-300"
            >
              Add Contact
            </Link>
          </div>
          <Routes>
            <Route
                path="/"
                element={<Contacts  />}
            />
            <Route
                path="/add-contact"
                element={<AddContact/>}
            />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
