const Contact = require('../models/contactModel');

const createContact = async(req,res)=>{
    try {
        const { firstName, lastName, email, phoneNumber, company, jobTitle } = req.body;
        const newContact = await Contact.create(firstName,lastName,email,phoneNumber,company,jobTitle);
        res.status(201).json(newContact);
    } catch(err){
        res.status(500).json({message: err.message});
    }
};

const getContacts = async(req,res)=>{
    try{
        const contacts = await Contact.getAll();
        res.json(contacts)
    } catch(err){
        res.status(500).json({message: err.message});
    }
};

const updateContact = async(req,res)=>{
    try {
        const { id }=req.params;
        const { firstName, lastName, email, phoneNumber, company, jobTitle} = req.body;
        const updatedContact=await Contact.update(id, firstName, lastName, email, phoneNumber, company, jobTitle);
        if (!updatedContact) {
            return res.status(404).json({ message: 'Contact not found' });
          }
        res.json(updatedContact);
    }catch(err){
        res.status(500).json({ message: err.message });
    }
};

const deleteContact = async(req,res)=>{
    try {
        const { id } = req.params;
        const deletedContact = await Contact.delete(id);
        if (!deletedContact) {
          return res.status(404).json({ message: 'Contact not found' });
        }
        res.json({ message: 'Contact deleted successfully' });
    } catch(err){
        res.status(500).json({ message: err.message });
    }
};

module.exports = { createContact, getContacts, updateContact, deleteContact };