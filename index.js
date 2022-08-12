import 'dotenv/config';
import './database/connection.js';
import express from 'express';
import authRouter from './routes/auth.route.js';

const app = express();
app.use(express.json());
app.use('/', authRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('igjfdsdz'));

