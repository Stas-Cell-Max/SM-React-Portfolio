import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import Contact from './models/Contact.js'; // Importing the Contact model
import dotenv from 'dotenv'; // Manage environment variables
import nodemailer from 'nodemailer';

dotenv.config(); // Load environment variables from .env file

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PORT = process.env.PORT || 3002;

const corsOptions = {
    origin: process.env.CORS_ORIGIN, // Use environment variable for CORS origin
    optionsSuccessStatus: 200 
};

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }) // Use environment variable for MongoDB URI
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.json()); // Updated from bodyParser.json()

app.post('/submit-form', (req, res) => {
    const { firstName, lastName, email, occupationLocation, message } = req.body;
  
    const newContact = new Contact({
      firstName,
      lastName,
      email,
      occupationLocation,
      message
    });
  
    newContact.save()
      .then(() => {
        res.status(200).send({ message: 'Form data received and saved successfully' });
  
        // Sending email to the owner
        sendEmail({
          from: 'your-email@gmail.com',
          to: 'your-email@gmail.com', // where you want to receive the notifications
          subject: 'New Contact Form Submission',
          text: `You have received a new message from ${firstName} ${lastName} - Email: ${email}, Message: ${message}`
        });
  
        // Optionally, send a confirmation email to the user
        sendEmail({
          from: 'your-email@gmail.com',
          to: email,
          subject: 'Thank you for contacting us!',
          text: 'We have received your message and will get back to you shortly.'
        });
      })
      .catch(err => {
        console.error('Error saving contact form data:', err);
        res.status(400).send('Failed to save form data');
      });
  });
  

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Create a reusable transporter object using SMTP transport
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-password'
    }
  });
  
  // Email sending function
  function sendEmail(mailOptions) {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Message sent: ' + info.response);
    });
  }
  

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
