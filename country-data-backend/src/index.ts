import express from 'express';
import cors from 'cors';
import countryRoutes from './routes/countryRoutes';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Routes
app.use('/countries', countryRoutes);

// Start server
const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const gracefulShutdown = () => {
  server.close(() => {
    console.log('Server Stopped..');
    process.exit(0);
  });
};
process.on('SIGINT', gracefulShutdown);  
process.on('SIGTERM', gracefulShutdown);

process.on('exit', () => {
  console.log('Process is exiting..');
});