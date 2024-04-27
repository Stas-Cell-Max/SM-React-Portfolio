// Contact.js

import mongoose from 'mongoose';

// Define the schema for the contact information
const contactSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  occupationLocation: { type: String, required: true },
  message: { type: String, required: true }
});

// Create a model from the schema
const Contact = mongoose.model('Contact', contactSchema);

export default Contact;
