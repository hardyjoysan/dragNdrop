import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import path from 'path';
import routes from './routes';

const app = express();

// Enable environment variables from .env file
dotenv.config();

// Add middleware for parsing URL encoded bodies (which are usually sent by browser)
app.use(cors());

// Security middleware that handles several kinds of attacks in the HTTP/HTTPS protocols
app.use(helmet());

// Static folder configuration
app.use(express.static("build"));

// Routes configuration
app.use('/api/v1', routes);
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});


app.listen(process.env.NODE_PORT).on('listening', () => {
    console.log(`🚀 is live on port ${process.env.NODE_PORT || 5000}`);
});

export default app;