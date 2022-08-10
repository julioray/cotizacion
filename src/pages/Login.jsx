import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography,
  Alert
} from '@material-ui/core';
import { signIn } from '../services/firebase/firebaseMethods';

const Login = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  return (
    <>
      <Helmet>
        <title>Login | UNAMBA</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center'
        }}
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              email: '@gmail.com',
              password: ''
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email('No es un email valido')
                .max(255)
                .required('Email es obligatorio'),
              password: Yup.string()
                .max(255)
                .required('Password es obligatorio')
            })}
            onSubmit={async (values, { setSubmitting }) => {
              try {
                await signIn(values.email, values.password);
                navigate('/app/dashboard', { replace: true });
              } catch (e) {
                console.log(e.message);
                console.log('code', e.code);
                if (e.code === 'auth/wrong-password') {
                  setErrorMessage('La contraseña es incorrecta');
                }
                console.log('in catchhhh');
                console.log(e.message);
                setSubmitting(false);
              }
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values
            }) => (
              <form onSubmit={handleSubmit}>
                <Box sx={{ mb: 3 }}>
                  <Box mb={3}>
                    <Alert severity="error">{errorMessage}</Alert>
                  </Box>

                  <Typography color="textPrimary" variant="h2">
                    Inicio de Sesion
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                  >
                    Inicia sesion en la plataforma de cotización
                  </Typography>
                </Box>
                <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label="Usuario"
                  margin="normal"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="email"
                  value={values.email}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label="Contraseña"
                  margin="normal"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  value={values.password}
                  variant="outlined"
                />
                <Box sx={{ py: 2 }}>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Login
                  </Button>
                </Box>
                <Typography color="textSecondary" variant="body1">
                  No tienes una cuenta aún
                  <Link component={RouterLink} to="/register" variant="h6">
                    Registrate
                  </Link>
                </Typography>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </>
  );
};

export default Login;
