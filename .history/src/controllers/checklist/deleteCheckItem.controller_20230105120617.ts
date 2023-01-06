import asyncHandler from 'express-async-handler';
import { CheckItem } from '../../models/checklist.model';

export const deleteCheckItem = asyncHandler(async (req, res, next) => {
  const { id, idCheckItem } = req.params;

  const query = { idChecklist: id, idCheckItem };

  const checkItem = await CheckItem.findOneAndDelete(query);
  res.status(204).send(checkItem);
  next();
});
