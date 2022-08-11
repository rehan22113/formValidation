import * as Yup from 'yup'

export const validateYupSchema = Yup.object({
    first_name:Yup.string().min(2,"minimum character two required").max(20).required("First name Field not be empty"),
    last_name:Yup.string().min(2,"minimum character two required").max(20).required("Last name field not be empty"),
    email:Yup.string().email().required("Email field not be empty"),
    password:Yup.string().min(6).max(14).required("password field not be empty")
})
