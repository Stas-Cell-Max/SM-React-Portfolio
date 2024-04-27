import Contact from '../models/Contact.js';
import { sendContactEmail } from '../utils/mailer.js';

export const submitContactForm = async (req, res) => {
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
    await sendContactEmail(firstName, lastName, email, occupationLocation, message);
    res.status(200).send({ message: 'Form data received and saved successfully' });
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
};
