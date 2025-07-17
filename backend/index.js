import dotenv from 'dotenv';
import mongoose from 'mongoose';
import server from './server.js';

dotenv.config();

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connected');
  server.listen(PORT, () => {
    console.log(`🚀🚀Server is running on port ${PORT}`);
  });
})
.catch((err) => console.log(err));