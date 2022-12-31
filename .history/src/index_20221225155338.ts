import * as dotenv from 'dotenv';
import { createApp } from './utils/createApp';
import 'dotenv/config';
// import { connectToMongoDB } from './database/mongodb';

console.log(process.env.DB_USERNAME);
const PORT = process.env.PORT || 3001;

const main = async () => {
  console.log(`Running in ${process.env.ENVIRONMENT} mode.`);

  try {
    const app = createApp();
    // connectToMongoDB();
    app.listen(PORT, () => console.log(`Running on Port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

main();
