import mongoose from 'mongoose';
import { dbPort, dbName } from '../config/config.js'

async function connectToDatabase() {
  try {
    await mongoose.connect(`mongodb://127.0.0.1:${dbPort}/${dbName}`);
    //mongodb://<hostname>:<port>/<database> -> 'mongodb://127.0.0.1:27017/test'
    //Use this line if your database has authentication enabled: await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');
    console.log('Db port:', dbPort);
    console.log('Db name:', dbName)
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
}

export { connectToDatabase };
