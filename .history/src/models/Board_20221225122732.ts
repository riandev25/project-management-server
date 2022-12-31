import mongoose, { Schema } from 'mongoose';

const checklistItemSchema = new Schema({
  id: { type: Number, required: true },
  description: { type: String, required: true },
  isChecked: { type: Boolean, required: true },
  isOptionOpen: { type: Boolean, required: true },
});

const checklistItemsSchema = new Schema({
  checklistItems: { type: [checklistItemSchema], required: true },
});

const checklistObjectSchema = new Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  percentage: { type: Number, required: true },
  checklistItems: { type: [checklistItemSchema] },
});

// const { DB_USERNAME, DB_PASSWORD } = process.env;
const BoardConn = mongoose.createConnection(process.env.MONGO_BOARD_URI);

export const Board = BoardConn.model(
  'Board',
  checklistItemsSchema,
  'board-name'
);
