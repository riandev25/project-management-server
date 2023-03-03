import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import { createApp } from './utils/createApp';

dotenv.config();

const PORT = process.env.PORT || 3001;

const main = async () => {
  console.log(`Running in ${process.env.NODE_ENV} mode.`);

  try {
    const connect = mongoose.connect(process.env.MONGO_BOARD_URI!);
 
    connect.then((db) => {
    console.log("Connected correctly to server");
    }, (err) => { console.log(err); });
    
    const app = createApp();
    app.listen(PORT, () => console.log(`Running on Port ${PORT}`));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

main();
