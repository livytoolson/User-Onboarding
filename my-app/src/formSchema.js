import * as yup from "yup";

export default yup.object().shape({
    name: yup
        .string()
        .required('Name is required')
        .min(2, 'Name must be at least 2 characters'),
    email: yup
        .string()
        .email('Must be a valid email address')
        .required('Email is required'),
    password: yup
        .string()
        .required('Passowrd is required'),
    termsOfService: yup
        .boolean()
        .required('You must agree to the Terms of Service before continuing'),
});