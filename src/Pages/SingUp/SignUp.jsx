


import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
// import { useHistory } from 'react-router-dom';
import { MD5 } from 'crypto-js';


// export default function SignUp() {

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    key: '',
    secret: ''
  });

  const sign = MD5('POST/books{isbn:"9781118464465"}sarvar1').toString();
  console.log(sign)



  // const history = useHistory();
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  console.log(formData,"formadartaaa")

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://no23.lavina.tech/signup', formData);
console.log(response)
      if (response.status === 200) {
        console.log('Muaffaqiyatli o`tildi');
        // history.push('/signin');
        navigate("/home")
      } else {
        console.error('Muaffaqiyatsiz ', response.data);
      }
    } catch (error) {
      console.error('Error', error.message);
    }
  };

  return (

    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          borderRadius: 3,
          padding: 3,
          marginTop: 20,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          background: 'white',
        }}
      >
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
        <Grid container spacing={2}>
              <Grid value={formData.name} onChange={handleChange} item xs={12} sm={6}>
                <TextField
                  autoComplete="name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                />
              </Grid>
              <Grid value={formData.email} onChange={handleChange} item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid value={formData.key} onChange={handleChange} item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="key"
                  label="key"
                  name="key"
                  autoComplete="key"
                />
              </Grid>
              <Grid value={formData.secret} onChange={handleChange} item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="secret"
                  label="secret"
                  type="secret"
                  id="secret"
                  autoComplete="new-secret"
                />
              </Grid>
            </Grid>
          {/* <NavLink to="/signin"> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          {/* </NavLink> */}
          <Grid container justifyContent="center">
            <Grid item>
              <NavLink to="/signin" variant="body2">
                Already have an account? Sign in
              </NavLink>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}



export default SignUpForm;



































// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// const SignUpForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     key: '',
//     secret: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };
//   console.log(formData,"formadartaaa")

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// // console.log(e,"eeeee")
// //     try {
// //       const response = await fetch('https://0001.uz/signup', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json'
// //         },
// //         body: JSON.stringify(formData)
// //       });

// //       console.log(response)
// //       if (response.success) {
// //         console.log('User registered successfully!');
// //       } else {
// //         console.error('Registration failed.');
// //       }
// //     } catch (error) {
// //       console.error('Error during registration:', error);
// //     }
// //   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('https://no23.lavina.tech/signup', formData);
// console.log(response)
//       if (response.status === 200) {
//         console.log('Muaffaqiyatli o`tildi');
//       } else {
//         console.error('Muaffaqiyatsiz ', response.data);
//       }
//     } catch (error) {
//       console.error('Error', error.message);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input type="text" name="name" value={formData.name} onChange={handleChange} />
//       </label>
//       <br />
//       <label>
//         Email:
//         <input type="email" name="email" value={formData.email} onChange={handleChange} />
//       </label>
//       <br />
//       <label>
//         Key:
//         <input type="text" name="key" value={formData.key} onChange={handleChange} />
//       </label>
//       <br />
//       <label>
//         Secret:
//         <input type="text" name="secret" value={formData.secret} onChange={handleChange} />
//       </label>
//       <br />
//       {/* <Link to="/signin"> */}
//       <button type="submit">Register</button>
//       {/* </Link> */}
//     </form>
//   );
// };

// export default SignUpForm;
