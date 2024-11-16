const express=require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const contactRoutes = require('./routes/contactRoutes');
const pool = require('./config/db');

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/contacts', contactRoutes);

const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log('Server is up and running');
})