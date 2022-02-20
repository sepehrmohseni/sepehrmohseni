import * as React from 'react';
// formik
import { Formik } from 'formik';

import {
  Card,
  CardProps,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
  styled,
  useTheme,
  Link,
} from '@mui/material';

import CustomTextField from './CustomTextField';
import CustomButton from './CustomButton';
// validation
import { ContactFormSchema } from '../../utils/contactForm';

interface ContactFormProps {}

const CustomCard = styled(Card)<CardProps>(({ theme }) => ({
  maxWidth: '32rem',
}));

const ContactForm: React.FunctionComponent<ContactFormProps> = (props) => {
  const toCapitalize = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const theme = useTheme();

  return (
    <CustomCard>
      <CardHeader
        title={
          <Typography color='secondary' component='h2' variant='h5'>
            Contact form
          </Typography>
        }
        subheader={
          <Link
            style={{
              textDecoration: 'none',
              color: theme.palette.primary.light,
            }}
            href='https://www.linkedin.com/in/sepehr-mohseni/'
          >
            or Click Here
          </Link>
        }
      />

      <Formik
        initialValues={{ name: '', email: '', subject: '', message: '' }}
        onSubmit={(values) => console.log(values)}
        validationSchema={ContactFormSchema}
      >
        {({
          errors,
          touched,
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
        }) => (
          <>
            <CardContent
              sx={{
                paddingBottom: 0,
                padding: 0,
                margin: '1rem',
              }}
            >
              <form onReset={handleReset} onSubmit={handleSubmit} noValidate>
                <CustomTextField
                  error={touched.name && errors.name ? true : false}
                  fullWidth
                  helperText={touched.name && errors.name && errors.name}
                  id='contact-form-name'
                  label={toCapitalize('name')}
                  name='name'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  sx={{ marginBottom: '1rem' }}
                  type='text'
                  value={values.name}
                  variant='filled'
                  color='info'
                />
                <CustomTextField
                  error={touched.email && errors.email ? true : false}
                  fullWidth
                  helperText={touched.email && errors.email && errors.email}
                  id='contact-form-email'
                  label={toCapitalize('email')}
                  name='email'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  required
                  sx={{ marginBottom: '1rem' }}
                  type='email'
                  value={values.email}
                  variant='filled'
                  color='warning'
                />
                <CustomTextField
                  error={touched.subject && errors.subject ? true : false}
                  fullWidth
                  helperText={
                    touched.subject && errors.subject && errors.subject
                  }
                  label={toCapitalize('subject')}
                  name='subject'
                  id='contact-form-subject'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  sx={{ marginBottom: '1rem' }}
                  type='text'
                  value={values.subject}
                  variant='filled'
                  color='secondary'
                />
                <CustomTextField
                  error={touched.message && errors.message ? true : false}
                  fullWidth
                  helperText={
                    touched.message && errors.message && errors.message
                  }
                  id='contact-form-message'
                  label={toCapitalize('message')}
                  maxRows={6}
                  minRows={4}
                  multiline
                  name='message'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  required
                  type='text'
                  value={values.message}
                  variant='filled'
                  color='success'
                />
              </form>
            </CardContent>
            <CardActions
              sx={{ justifyContent: 'flex-end', margin: '1rem', padding: 0 }}
            >
              <CustomButton
                onClick={() => {
                  let resetForm = true;
                  handleSubmit();
                  for (let item in errors) {
                    if (item) resetForm = false;
                  }
                  if (resetForm) handleReset();
                }}
                type='submit'
                variant='contained'
                disabled={true}
              >
                Submit
              </CustomButton>
            </CardActions>
          </>
        )}
      </Formik>
    </CustomCard>
  );
};

export default ContactForm;
