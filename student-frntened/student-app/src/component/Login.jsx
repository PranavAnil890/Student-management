import React, { useState } from 'react';
import {
Container,
Box,
Typography,
TextField,
Button
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../axiosinterceptor';

const Login = ({ setIsLoggedIn }) => {
const navigate = useNavigate();

const [form, setForm] = useState({
Email: '',
Password: ''
});

const handleChange = (e) => {
const { name, value } = e.target;


setForm((prev) => ({
  ...prev,
  [name]: value
}));


};

const handleSubmit = async (e) => {
e.preventDefault();


try {
  // Login API
  const response = await axiosInstance.post('/user/login', {
    email: form.Email,
    password: form.Password
  });

  // Save JWT token
  localStorage.setItem('token', response.data.token);

  // Save login status
  localStorage.setItem('isLoggedIn', 'true');

  // Update App state
  if (setIsLoggedIn) {
    setIsLoggedIn(true);
  }

  alert(response.data.message || 'Login Successful');

  // Navigate after login
  navigate('/table1');

} catch (error) {
  alert(error.response?.data?.message || 'Login Failed');
}


};

return ( <Box className='login-page'> <Container maxWidth='sm'> <Box className='login-card'>


      <Typography
        variant='h4'
        fontWeight='bold'
        className='login-title'
      >
        Login Page
      </Typography>

      <Box component='form' onSubmit={handleSubmit} autoComplete='off'>

        <TextField
          fullWidth
          label='Email'
          variant='outlined'
          name='Email'
          value={form.Email}
          onChange={handleChange}
          margin='normal'
        />

        <TextField
          fullWidth
          label='Password'
          type='password'
          variant='outlined'
          name='Password'
          value={form.Password}
          onChange={handleChange}
          margin='normal'
        />

        <Button
          type='submit'
          variant='contained'
          fullWidth
          sx={{ mt: 2 }}
        >
          Login
        </Button>

      </Box>
    </Box>
  </Container>
</Box>


);
};

export default Login;
