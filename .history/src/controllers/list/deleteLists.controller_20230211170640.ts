import asyncHandler from 'express-async-handler';
import { List } from '../../models/list.model';

export const deleteLists = asyncHandler(async (req, res, next) => {
  const { idCard, idBoard } = req.query;

  const query = { idCard, idBoard };

  const card = await List.deleteMany(query);
  res.status(204).send(card);
  next();
});
