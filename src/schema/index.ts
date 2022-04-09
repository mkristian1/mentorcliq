import * as Yup from 'yup';

export const schemaRegistration = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
})
