import React, { useState } from  'react';
import { Box, TextField, Button } from '@mui/material';

const ContactForm = ({ onSave }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        company: '',
        jobTitle: '',
    })

    const handleChange = (e)=>{
        const { name, value }=e.target;
        setFormData((prev)=>({...prev, [name]:value}));
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        onSave(formData);
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            company: '',
            jobTitle: '',
          });
    }

    return (
        <Box
         component="form"
         onSubmit={handleSubmit}
         sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400, margin: 'auto'}}>
            <TextField
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
            />
            <TextField
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
            />
            <TextField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <TextField
                label="Phone Number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
            />
            <TextField
                label="Company"
                name="company"
                value={formData.company}
                onChange={handleChange}
            />
            <TextField
                label="Job Title"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                required
            />
            <Button type="submit" variant="contained" color="primary">
                Save
            </Button>
         </Box>
    );
}

export default ContactForm;