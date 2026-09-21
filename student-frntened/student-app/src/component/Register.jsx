import React, { useState } from 'react';
// import axios from 'axios';
import { Box, TextField, Button, Typography, Container } from '@mui/material';
import axiosInstance from '../../axiosinterceptor';

const Register = () => {
const [form, setForm] = useState({
rollnumber: '',
candidatename: '',
course: '',
email: '',
marks: '',
password: ''
});

function handleChange(e) {
const { name, value } = e.target;
setForm((prevForm) => ({
...prevForm,
[name]: value
}));
}

async function handleSubmit(e) {
e.preventDefault();


try {
  const response = await axiosInstance.post(
    '/api/user/add',
    form
  );

  console.log(response.data);
  alert('Student registered successfully!');

  setForm({
    rollnumber: '',
    candidatename: '',
    course: '',
    email: '',
    marks: '',
    password: ''
  });
} catch (error) {
  console.error('Error registering student:', error);
  alert('Registration failed!');
}


}

return ( <Box className='register-page'> <Container maxWidth='sm'> <Box className='register-card'> <Typography variant='h4' fontWeight='bold' className='register-title'>
Register </Typography>


      <Box component='form' onSubmit={handleSubmit} autoComplete='off'>
        <TextField
          fullWidth
          label='Roll Number'
          name='rollnumber'
          value={form.rollnumber}
          onChange={handleChange}
          className='register-field'
        />

        <TextField
          fullWidth
          label='Candidate Name'
          name='candidatename'
          value={form.candidatename}
          onChange={handleChange}
          className='register-field'
        />

        <TextField
          fullWidth
          label='Course'
          name='course'
          value={form.course}
          onChange={handleChange}
          className='register-field'
        />

        <TextField
          fullWidth
          label='Email'
          type='email'
          name='email'
          value={form.email}
          onChange={handleChange}
          className='register-field'
        />

        <TextField
          fullWidth
          label='Marks'
          name='marks'
          value={form.marks}
          onChange={handleChange}
          className='register-field'
        />

        <TextField
          fullWidth
          label='Password'
          type='password'
          name='password'
          value={form.password}
          onChange={handleChange}
          className='register-field'
        />

        <Button
          type='submit'
          variant='contained'
          fullWidth
          className='register-button'
        >
          OK
        </Button>
      </Box>
    </Box>
  </Container>
</Box>


);
};

export default Register;
