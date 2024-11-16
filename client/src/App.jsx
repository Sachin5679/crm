import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Box, Typography } from '@mui/material';
import ContactForm from './components/ContactForm';
import ContactTable from './components/ContactTable';

function App() {
  const [contacts, setContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null);

  const handleSave = (contact) => {
    if (editingContact) {
      setContacts((prev)=>
        prev.map((c)=>
        (c.id===editingContact.id?{...contact, id: c.id } : c)
        )
      );
      setEditingContact(null);
    } else {
      setContacts((prev)=>[...prev, {...contact, id:Date.now()}]);
    }
  };

  const handleEdit = (contact)=>{
    setEditingContact(contact)
  };

  const handleDelete=(id)=>{
    setContacts((prev)=>prev.filter((contact)=>contact.id!==id));
  }

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Box
        sx={{
          flex: 1,
          padding: 4,
          backgroundColor: '#f5f5f5',
          borderRight: '1px solid #ddd',
        }}
      >
        <Typography variant="h5" gutterBottom>
          Contact Form
        </Typography>
        <ContactForm onSave={handleSave}/>
      </Box>

      
      <Box sx={{ flex: 2, padding: 2 }}>
        <Typography variant="h5" gutterBottom>
          Contact List
        </Typography>
        <ContactTable contacts={contacts} onEdit={handleEdit} onDelete={handleDelete}/>
      </Box>
    </Box>
  )
}

export default App
