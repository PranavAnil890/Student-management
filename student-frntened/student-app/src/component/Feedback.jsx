import React, { useState } from 'react';
import {
Box,
TextField,
Button,
Typography,
Container
} from '@mui/material';

const Feedback = () => {
const [form, setForm] = useState({
email: '',
course: '',
feedback: ''
});

function handleChange(e) {
const { name, value } = e.target;
setForm((prevForm) => ({
...prevForm,
[name]: value
}));
}

function handleSubmit(e) {
e.preventDefault();
console.log(form);
}

return ( <Box className='feedback-page'> <Container maxWidth='sm'> <Box className='feedback-card'> <Typography variant='h4' fontWeight='bold' className='feedback-title'>
Student Feedback </Typography>


      <Box component='form' noValidate autoComplete='off'>
        <TextField
          fullWidth
          label='Email'
          type='email'
          variant='outlined'
          name='email'
          value={form.email}
          onChange={handleChange}
          className='feedback-field'
        />

        <TextField
          fullWidth
          label='Course'
          variant='outlined'
          name='course'
          value={form.course}
          onChange={handleChange}
          className='feedback-field'
        />

        <TextField
          fullWidth
          label='Feedback'
          multiline
          rows={4}
          variant='outlined'
          name='feedback'
          value={form.feedback}
          onChange={handleChange}
          className='feedback-field'
        />

        <Button
          variant='contained'
          color='primary'
          fullWidth
          onClick={handleSubmit}
          className='feedback-button'
        >
          OK
        </Button>
      </Box>
    </Box>
  </Container>
</Box>


);
};

export default Feedback;
