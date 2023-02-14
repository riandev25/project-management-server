import asyncHandler from 'express-async-handler';
import { CheckItem } from '../../models/checklist.model';

export const deleteCheckItem = asyncHandler(async (req, res, next) => {
  const { idCheckItem } = req.params;

  const query = { _id: idCheckItem };

  const checkItem = await CheckItem.findByIdAndDelete(query);
  res.status(204).send(checkItem);
  next();
});
