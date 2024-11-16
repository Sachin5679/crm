import { useEffect, useState } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Box, Typography } from '@mui/material';
import ContactForm from './components/ContactForm';
import ContactTable from './components/ContactTable';

function App() {
  const [contacts, setContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null);

  useEffect(()=>{
    axios.get('http://localhost:5000/api/contacts').then(response => {
      setContacts(response.data);
    }).catch(err => {
      console.error('Error fetching contacts:', err);
    });
  }, []);

  const handleSave = (contact) => {
    if (editingContact) {
      axios.put(`http://localhost:5000/api/contacts/${editingContact.id}`, contact).then(response => {
        setContacts(prev => prev.map(c=>(c.id===editingContact.id?response.data:c)));
        setEditingContact(null);
      }).catch(err =>{
          console.error('Error updating contact:', err);
      });
    } else {
      axios.post('http://localhost:5000/api/contacts', contact).then(response=>{
        setContacts(prev=>[...prev, response.data]);
      }).catch(err=>{
        console.error('Error creating contact:', err);
      });
    }
  };

  const handleEdit = (contact)=>{
    setEditingContact(contact)
  };

  const handleDelete=(id)=>{
    axios.delete(`http://localhost:5000/api/contacts/${id}`).then(()=>{
      setContacts(prev=>prev.filter(contact=>contact.id!==id));
    }).catch(err=>{
      console.error('Error deleting contact:', err);
    })
  }

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Box
        sx={{
          flex: 1,
          padding: 4,
          borderRight: '1px solid #ddd',
        }}
      >
        <Typography variant="h5" gutterBottom>
          Add Contact
        </Typography>
        <ContactForm onSave={handleSave} editingContact={editingContact} />
      </Box>

      
      <Box sx={{ flex: 2, padding: 2 }}>
        <ContactTable contacts={contacts} onEdit={handleEdit} onDelete={handleDelete}/>
      </Box>
    </Box>
  )
}

export default App
