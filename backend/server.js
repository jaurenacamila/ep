import express from 'express'
import { connectToDatabase } from './connection/connection.js'
import { serverPort } from './config/config.js'

const app = express();

app.get('/', (req, res) => {
    res.send('you are on /');
});

async function startServer() {
    try {
      await connectToDatabase();
      app.listen(serverPort, () => {
        console.log('Server port:', serverPort);
      });
    } catch (err) {
      console.error('Error starting the server:', err);
    }
  }
  
startServer();