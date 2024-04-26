import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PORT = process.env.PORT || 3002;

const corsOptions = {
    origin: 'http://localhost:5173', 
    optionsSuccessStatus: 200 
};

app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, 'dist'))); // Serve static files
app.use(bodyParser.json()); // Parse JSON bodies

// POST endpoint to receive form data
app.post('/submit-form', (req, res) => {
    const { firstName, lastName, email, occupationLocation, message } = req.body;
    console.log('Received submission:', req.body);
    // handle the data, e.g., save it to a database
    res.status(200).json({ message: 'Form data received successfully' });

  });

// The "catchall" handler: for any request that doesn't match one above, send back index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
