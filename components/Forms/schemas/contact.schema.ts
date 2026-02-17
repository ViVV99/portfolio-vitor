import * as yup from 'yup';

export const contactSchema = yup.object({
  name: yup
    .string()
    .required('Name is required.')
    .min(3, 'Minimum 3 characters'),

  email: yup
    .string()
    .email('Invalid email')
    .required('Email is required.'),

  message: yup.string().required('Your contact message is required.'),
});