import mongoose from 'mongoose';
import config from './config';

(async function dbInitialization() {
  try {
    await mongoose.connect(config.db_url as string);
    console.log('🚀 ~ DB Connection Successful !!');
  } catch (err) {
    console.log('dbInitialization', err);
  }
})();
