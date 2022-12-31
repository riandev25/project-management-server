import { Schema } from 'mongoose';

export const labelSchema = new Schema({
  // id: { type: String, required: true },
  name: { type: String, required: true },
  bgColorStrip: { type: String, required: true },
  bgColor: { type: String, required: true },
  bgColorHover: { type: String, required: true },
  iconColor: { type: String, required: true },
  isChecked: { type: Boolean, required: true },
  idCard: { type: String, required: true}
  // isOpen: { type: Boolean, required: true },
});
