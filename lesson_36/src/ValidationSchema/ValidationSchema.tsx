import * as Yup from 'yup';

const phoneRegExp = /^\+380[0-9]{9}$/;

const ValidationSchema = Yup.object({
    name: Yup.string().min(2, "Must be bigger than 2 symbols").required("Name is required"),
    username: Yup.string().min(3, "Must be bigger than 3 symbols").max(16, "Must be less than 16 symbols").required("Username is required"),
    phone: Yup.string().matches(phoneRegExp, "Phone number must include +380 first and then 9 digits").required("Phone is required"),
});

export default ValidationSchema;