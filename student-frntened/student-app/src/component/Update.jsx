import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, TextField, Button, Typography, Container } from '@mui/material';

const Update = () => {
const { rollnumber } = useParams();
const navigate = useNavigate();

const [form, setForm] = useState({
rollnumber: '',
candidatename: '',
course: '',
email: '',
marks: '',
password: ''
});

useEffect(() => {
axios
.get(`http://localhost:3030/user/${rollnumber}`)
.then((response) => {
setForm(response.data);
})
.catch((error) => {
console.error(error);
});
}, [rollnumber]);

const handleChange = (e) => {
const { name, value } = e.target;
setForm({
...form,
[name]: value
});
};

const handleUpdate = async (e) => {
e.preventDefault();


try {
  await axios.put(
    `http://localhost:3030/user/${rollnumber}`,
    form
  );

  alert('Student updated successfully!');
  navigate('/table');
} catch (error) {
  console.error(error);
  alert('Update failed!');
}


};

return ( <Container maxWidth='sm'>
<Box sx={{ mt: 5, p: 4, bgcolor: '#e3f2fd', borderRadius: 3 }}>
<Typography variant='h4' align='center' sx={{ mb: 3 }}>
Update Student </Typography>


    <Box component='form' onSubmit={handleUpdate}>
      <TextField
        fullWidth
        label='Roll Number'
        name='rollnumber'
        value={form.rollnumber}
        disabled
        sx={{ mb: 2 }}
      />

      <TextField
        fullWidth
        label='Candidate Name'
        name='candidatename'
        value={form.candidatename}
        onChange={handleChange}
        sx={{ mb: 2 }}
      />

      <TextField
        fullWidth
        label='Course'
        name='course'
        value={form.course}
        onChange={handleChange}
        sx={{ mb: 2 }}
      />

      <TextField
        fullWidth
        label='Email'
        name='email'
        value={form.email}
        onChange={handleChange}
        sx={{ mb: 2 }}
      />

      <TextField
        fullWidth
        label='Marks'
        name='marks'
        value={form.marks}
        onChange={handleChange}
        sx={{ mb: 2 }}
      />

      <TextField
        fullWidth
        label='Password'
        name='password'
        value={form.password}
        onChange={handleChange}
        sx={{ mb: 3 }}
      />

      <Button type='submit' variant='contained' fullWidth>
        Update
      </Button>
    </Box>
  </Box>
</Container>


);
};

export default Update;
