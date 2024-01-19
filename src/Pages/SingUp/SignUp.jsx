import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    key: '',
    secret: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  console.log(formData,"formadartaaa")

//   const handleSubmit = async (e) => {
//     e.preventDefault();
// console.log(e,"eeeee")
//     try {
//       const response = await fetch('https://0001.uz/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//       });

//       console.log(response)
//       if (response.success) {
//         console.log('User registered successfully!');
//       } else {
//         console.error('Registration failed.');
//       }
//     } catch (error) {
//       console.error('Error during registration:', error);
//     }
//   };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://0001.uz/signup', formData);
console.log(response)
      if (response.status === 200) {
        console.log('User registered successfully!');
      } else {
        console.error('Registration failed:', response.data);
      }
    } catch (error) {
      console.error('Error during registration:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <br />
      <label>
        Key:
        <input type="text" name="key" value={formData.key} onChange={handleChange} />
      </label>
      <br />
      <label>
        Secret:
        <input type="text" name="secret" value={formData.secret} onChange={handleChange} />
      </label>
      <br />
      <Link to="/signin">
      <button type="submit">Register</button>
      </Link>
    </form>
  );
};

export default SignUpForm;
