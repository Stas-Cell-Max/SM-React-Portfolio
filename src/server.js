import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import Contact from '../models/Contact.js';
import dotenv from 'dotenv';
import { sendEmail } from './utils/mailer.js'; // Importing the sendEmail function from utils

dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PORT = process.env.PORT || 3002;

const corsOptions = {
    origin: process.env.CORS_ORIGIN,
    optionsSuccessStatus: 200 
};

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.json());

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

    // Sending email to the owner
    await sendEmail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: 'New Contact Form Submission',
      text: `You have received a new message from ${firstName} ${lastName} - Email: ${email}, Message: ${message}`
    });

    // Optionally, send a confirmation email to the user
    await sendEmail({
      from: process.env.EMAIL_FROM,
      to: email,
      subject: 'Thank you for contacting us!',
      text: 'We have received your message and will get back to you shortly.'
    });

    res.status(200).send({ message: 'Form data received and saved successfully' });
  } catch (err) {
    console.error('Error:', err);
    res.status(400).send('Error in saving form data');
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
