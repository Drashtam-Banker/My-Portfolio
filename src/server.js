import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import config from './config/config.js';
import ContactRouter from './server/routes/contact.routes.js';
import UserRouter from './server/routes/user.routes.js';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create Express app
const app = express();
const port = 8080;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Welcome route
app.get('/', (req, res) => {
    res.status(200).json({
        message: "Welcome to DressStore Application!"
    });
});

// Mount API routes
app.use('/api/contacts', ContactRouter);
app.use('/api/users', UserRouter);

// Serve static files from the React build folder in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../build')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
  });
}

// Set mongoose's Promise to global
mongoose.Promise = global.Promise;

// MongoDB Connection
try {
    await mongoose.connect(config.mongoUri);
    console.log('✅ Connected to MongoDB Atlas - Database: Skeleton');
    
    const PORT = config.port || 8080;
    app.listen(PORT, () => {
        console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
} catch (error) {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1);
}

// Handle MongoDB connection events
mongoose.connection.on('connected', () => {
    console.log('✅ MongoDB connection established');
});

mongoose.connection.on('error', (err) => {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
});

mongoose.connection.on('disconnected', () => {
    console.log('❌ MongoDB disconnected');
});

// Handle process termination
process.on('SIGINT', async () => {
    try {
        await mongoose.connection.close();
        console.log('MongoDB connection closed through app termination');
        process.exit(0);
    } catch (err) {
        console.error('Error during termination:', err);
        process.exit(1);
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ 
        error: "Internal server error",
        message: err.message 
    });
});

export default app;