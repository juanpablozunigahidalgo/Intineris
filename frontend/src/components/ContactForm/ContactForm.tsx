import React, { useState } from 'react';
import { Grid, TextField, Button, Typography, Box } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import emailjs from 'emailjs-com';
import './ContactForm.css'; // Import the CSS file

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const isSmallScreen = useMediaQuery('(max-width:600px)');

  const validateForm = () => {
    let isValid = true;
    let newErrors = { name: '', email: '', message: '' };

    if (!formData.name) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
      isValid = false;
    }

    if (!formData.message) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      emailjs
        .send(
          'YOUR_SERVICE_ID',
          'YOUR_TEMPLATE_ID',
          formData,
          'YOUR_USER_ID'
        )
        .then(
          (result) => {
            console.log(result.text);
            alert('Message sent successfully!');
          },
          (error) => {
            console.log(error.text);
            alert('An error occurred, please try again.');
          }
        );
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Box className="form-container">
      <Grid container spacing={10} direction={isSmallScreen ? 'column' : 'row'}>
        {/* Left Side: Title and Text */}
        <Grid item xs={12} sm={6} container direction="column" spacing={2} className="left-side">
          <Grid item>
            <Typography variant="h4" gutterBottom className="title">
              Get in contact
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" className="description">
              If you want to join this project as developer, business contributor or investor. Please do not hesistate to send a message Us.
            </Typography>
          </Grid>
        </Grid>

        {/* Right Side: Form */}
        <Grid item xs={12} sm={6} className="right-side">
          <form onSubmit={handleSubmit} noValidate className="form">
            <TextField
              label="Name"
              name="name"
              fullWidth
              value={formData.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
              margin="normal"
              variant="outlined"
              className="input-field"
            />
            <TextField
              label="Email"
              name="email"
              fullWidth
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              margin="normal"
              variant="outlined"
              className="input-field"
            />
            <TextField
              label="Message"
              name="message"
              fullWidth
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
              error={!!errors.message}
              helperText={errors.message}
              margin="normal"
              variant="outlined"
              className="input-field"
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ backgroundColor: '#001122', color: 'white' }}
              className="submit-button"
            >
              Submit
            </Button>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactForm;
