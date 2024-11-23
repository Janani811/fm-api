import dotenv from 'dotenv';
dotenv.config();

export default {
  port: process.env.PORT,
  db_url: process.env.DB_URL,
  jwt_secret_key: process.env.JWT_SECRET,
  front_end_url: process.env.FRONTEND_URL
};
