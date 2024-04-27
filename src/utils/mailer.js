import nodemailer from 'nodemailer';

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail', // Replace with your email provider
  auth: {
    user: process.env.EMAIL_USERNAME, // Replace with your email
    pass: process.env.EMAIL_PASSWORD, // Replace with your email password
  },
});

// Email sending logic
export const sendContactEmail = async (firstName, lastName, email, occupationLocation, message) => {
  const mailOptions = {
    from: process.env.EMAIL_USERNAME, // Sender address
    to: process.env.RECEIVER_EMAIL, // List of recipients
    subject: 'New Contact Form Submission', // Subject line
    text: `You've got a new contact form submission from:
    Name: ${firstName} ${lastName}
    Email: ${email}
    Occupation & Location: ${occupationLocation}
    Message: ${message}`,
    // Optionally you can define 'html' for HTML emails
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
    // 'info' contains information about the sent message like its messageId
  } catch (error) {
    console.error('Error sending email: %s', error);
    throw error; // Or handle this error as needed
  }
};
