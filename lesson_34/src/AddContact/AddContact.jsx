import { useFormik } from "formik";
import ValidationSchema from "../ValidationSchema/ValidationSchema";

import { useNavigate ,Link } from 'react-router-dom';


export default function AddContact({ saveContact }) {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            name: "",
            username: "",
            phone: "",
        },
        onSubmit: (values) => {

            if (formik.isValid) {
                const newContact = {
                    name: values.name,
                    username: values.username,
                    phone: values.phone,
                    id: Math.floor(Math.random() * 1000),
                };
                saveContact(newContact);
                formik.resetForm();
                navigate('/');
            }
        },
        validationSchema: ValidationSchema,
    });

    return (
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-3 mx-auto w-1/3 pt-5">
            <label htmlFor="name">Enter your first name</label>
            <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                className={`border-4 rounded-xl px-2 py-1 ${
                    formik.touched.name && formik.errors.name ? "border-red-500" : ""
                }`}
            />
            {formik.touched.name && formik.errors.name && (
                <p className="text-red-600">{formik.errors.name}</p>
            )}

            <label htmlFor="username">Enter your user name</label>
            <input
                id="username"
                name="username"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
                className={`border-4 rounded-xl px-2 py-1 ${
                    formik.touched.username && formik.errors.username ? "border-red-500" : ""
                }`}
            />
            {formik.touched.username && formik.errors.username && (
                <p className="text-red-600">{formik.errors.username}</p>
            )}

            <label htmlFor="phone">Enter your phone</label>
            <input
                id="phone"
                name="phone"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
                className={`border-4 rounded-xl px-2 py-1 ${
                    formik.touched.phone && formik.errors.phone ? "border-red-500" : ""
                }`}
            />
            {formik.touched.phone && formik.errors.phone && (
                <p className="text-red-600">{formik.errors.phone}</p>
            )}

            <div className="flex gap-2">
                <button type="submit" className="bg-sky-700 w-1/2 mx-auto py-2 text-xl text-white rounded hover:bg-sky-600 duration-300">
                    Add Contact
                </button>
                <Link to="/" className="bg-orange-600 w-1/2 mx-auto py-2 text-xl text-white text-center rounded hover:bg-orange-500 duration-500">
                    Back to Contacts
                </Link>
            </div>
        </form>
    );
}