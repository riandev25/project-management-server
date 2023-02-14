import asyncHandler from 'express-async-handler';
import { List } from '../../models/list.model';

export const deleteSingleList = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const card = await List.findByIdAndDelete(id);
  res.status(204).send(card);
  next();
});
