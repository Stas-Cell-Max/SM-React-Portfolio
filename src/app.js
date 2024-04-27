import express from 'express';
import contactRoutes from './routes/contactRoutes.js';

const app = express();

app.use('/api/contact', contactRoutes);

export default app;
