import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
const navigate = useNavigate();

const handleLogout = () => {
localStorage.removeItem('isLoggedIn');
localStorage.removeItem('token');
setIsLoggedIn(false);
navigate('/login');
};

return (
<Box sx={{ flexGrow: 1 }}> <AppBar position='static'> <Toolbar>

      <IconButton
        size='medium'
        edge='start'
        color='inherit'
        aria-label='menu'
        sx={{ mr: 2 }}
      />

      <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
        Student Management System
      </Typography>

      <Link to='/'>
        <Button color='inherit' sx={{ color: 'white' }}>
          Home
        </Button>
      </Link>

      {!isLoggedIn && (
        <>
          <Link to='/login'>
            <Button color='inherit' sx={{ color: 'white' }}>
              Login
            </Button>
          </Link>

          <Link to='/about'>
            <Button color='inherit' sx={{ color: 'white' }}>
              About
            </Button>
          </Link>

          <Link to='/register'>
            <Button color='inherit' sx={{ color: 'white' }}>
              Registration
            </Button>
          </Link>
        </>
      )}

      {isLoggedIn && (
        <>
          <Link to='/table1'>
            <Button color='inherit' sx={{ color: 'white' }}>
              Table
            </Button>
          </Link>

          <Link to='/feedback'>
            <Button color='inherit' sx={{ color: 'white' }}>
              Feedback
            </Button>
          </Link>

          <Button
            color='inherit'
            sx={{ color: 'white' }}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </>
      )}

    </Toolbar>
  </AppBar>
</Box>


);
};

export default Navbar;
