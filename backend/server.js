import express from 'express'
import { connectToDatabase } from './connection/connection.js'

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, Express with MongoDB!');
});

async function startServer() {
    try {
      await connectToDatabase();
      console.log('Connected to the database');
      app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
      });
    } catch (err) {
      console.error('Error starting the server:', err);
    }
  }
  
  startServer();