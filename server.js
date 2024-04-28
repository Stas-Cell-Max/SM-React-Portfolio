import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import Contact from './models/Contact.js'; // Importing the Contact model
import dotenv from 'dotenv'; // Manage environment variables

dotenv.config(); // Load environment variables from .env file

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PORT = process.env.PORT || 3002;

const corsOptions = {
  origin: process.env.CORS_ORIGIN,
  optionsSuccessStatus: 200,
};

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }) // Use environment variable for MongoDB URI
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

  app.use(cors());
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.json()); // Updated from bodyParser.json()

app.post('/submit-form', async (req, res) => {
  try {
    const { firstName, lastName, email, occupationLocation, message } = req.body;

    const newContact = new Contact({
      firstName,
      lastName,
      email,
      occupationLocation,
      message
    });

    await newContact.save();
    res.status(200).send({ message: 'Form data received and saved successfully' });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).send('An error occurred while processing your request.');
  }
});


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
