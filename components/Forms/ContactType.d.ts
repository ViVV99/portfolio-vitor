import { InferType } from 'yup';
import { contactSchema } from './schemas/contact.schema';

export type ContactType = InferType<typeof contactSchema>;
