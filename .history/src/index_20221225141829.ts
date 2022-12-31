import * as dotenv from 'dotenv';
import { createApp } from './utils/createApp';
import * as path from 'path';
// import { connectToMongoDB } from './database/mongodb';
dotenv.config();

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
