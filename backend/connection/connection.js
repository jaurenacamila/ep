import mongoose from 'mongoose';

async function connectToDatabase() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
    // Use this line if your database has authentication enabled
    // await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
}

export { connectToDatabase };
