import * as Yup from 'yup';

export const ContactFormSchema = Yup.object().shape({
    name: Yup.string().min(3).max(32).required().label('نام'),
    email: Yup.string().email().required().label('ایمیل'),
    subject: Yup.string().min(3).max(255).required().label('موضوع'),
    message: Yup.string().min(3).max(2048).required().label('پیام'),
});
