import { string,object} from 'yup'

const phoneRegExp = /^\+380[0-9]{9}$/;

const ValidationSchema = object({
    name:string().min(2,"Must be bigger then 2 symbols").required("Name is required"),
    username:string().min(3,"Must be bigger then 3 symbols").max(16,"Must be less then 16 symbols").required("Username is required"),
    phone:string().matches(phoneRegExp, "Phone number must include +380 first and then 9 digits").required("Phone is required"),
})
export default ValidationSchema