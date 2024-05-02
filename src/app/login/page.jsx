'use client';
import React, { useState } from 'react';
import {
  Typography,
  TextField,
  Button,
  Link,
  RadioGroup,
  FormControlLabel,
  Radio,
  Paper,
  Box,
} from '@mui/material';
import './login.css';
const Login = () => {
  const [slideValue, setSlideValue] = useState('login');

  const handleSlideChange = (event) => {
    console.log('event', event);
    setSlideValue(event.target.value);
  };
  return (
    <div className='userform'>
      <Paper className='wrapper'>
        <div className='titleText'>
          <Typography variant='h4' className='title'>
            {slideValue === 'login' ? 'Login Form' : 'Signup Form'}
          </Typography>
        </div>
        <Box className='slideControls' sx={{ mt: 2 }}>
          <RadioGroup
            aria-label='slide'
            name='slide'
            value={slideValue}
            onChange={handleSlideChange}
            row
          >
            <FormControlLabel
              value='login'
              control={<Radio style={{ display: 'none' }} />}
              label={
                <Typography variant='body1' fontWeight='bold'>
                  Login
                </Typography>
              }
              checked={slideValue == 'login'}
              className={`slide ${slideValue == 'login' && 'active'}`}
            />
            <FormControlLabel
              value='signup'
              control={<Radio style={{ display: 'none' }} />}
              label={
                <Typography variant='body1' fontWeight='bold'>
                  Signup
                </Typography>
              }
              checked={slideValue == 'signup'}
              className={`slide ${slideValue == 'signup' && 'active'}`}
            />
          </RadioGroup>
        </Box>
        <div className='formContainer'>
          <div className='formInner'>
            {slideValue === 'login' ? (
              <form className='form' id='login-form'>
                <Box className='field'>
                  <TextField
                    sx={{ borderRadius: '12px' }}
                    type='text'
                    placeholder='Email Address'
                    required
                    fullWidth
                  />
                </Box>
                <Box className='field'>
                  <TextField
                    type='password'
                    placeholder='Password'
                    required
                    fullWidth
                  />
                </Box>
                <Box sx={{ mt: 3, mb: 3 }}>
                  <Link href='#' variant='body1' fontWeight='bold'>
                    Forgot password?
                  </Link>
                </Box>
                <Box className='field'>
                  <div className='btn'>
                    <Button
                      type='submit'
                      variant='contained'
                      color='primary'
                      fullWidth
                    >
                      <Typography variant='body1' fontWeight='bold'>
                        Login
                      </Typography>
                    </Button>
                  </div>
                </Box>
                <Box sx={{ mt: 3 }}>
                  <Typography
                    variant='body1'
                    fontWeight='bold'
                    textAlign='center'
                  >
                    Not a member?{' '}
                    <Link
                      href='#'
                      onClick={() => setSlideValue('signup')}
                      variant='body1'
                      fontWeight='bold'
                    >
                      Signup now
                    </Link>
                  </Typography>
                </Box>
              </form>
            ) : (
              <form className='form' action='#' id='signup-form'>
                <div className='field'>
                  <TextField
                    type='text'
                    placeholder='Email Address'
                    required
                    fullWidth
                  />
                </div>
                <div className='field'>
                  <TextField
                    type='password'
                    placeholder='Password'
                    required
                    fullWidth
                  />
                </div>
                <div className='field'>
                  <TextField
                    type='password'
                    placeholder='Confirm password'
                    required
                    fullWidth
                  />
                </div>
                <div className='field'>
                  <div className='btn'>
                    <div className='btn-layer'></div>
                    <Button
                      type='submit'
                      variant='contained'
                      color='primary'
                      fullWidth
                    >
                      <Typography variant='body1' fontWeight='bold'>
                        Signup
                      </Typography>
                    </Button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default Login;
