import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';

const ContactTable = ({ contacts, onEdit, onDelete }) => {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Company</TableCell>
                    <TableCell>Job Title</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {contacts.map((contact) => (
                <TableRow key={contact.id}>
                <TableCell>{contact.firstName}</TableCell>
                <TableCell>{contact.lastName}</TableCell>
                <TableCell>{contact.email}</TableCell>
                <TableCell>{contact.phoneNumber}</TableCell>
                <TableCell>{contact.company}</TableCell>
                <TableCell>{contact.jobTitle}</TableCell>
                <TableCell>
                    <Button variant="outlined" onClick={() => onEdit(contact)}>Edit</Button>
                    <Button variant="outlined" color="error" onClick={() => onDelete(contact.id)}>Delete</Button>
                </TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default ContactTable
