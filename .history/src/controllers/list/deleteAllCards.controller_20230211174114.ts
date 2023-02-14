import asyncHandler from 'express-async-handler';
import { List } from '../../models/list.model';

export const deleteAllCards = asyncHandler(async (req, res, next) => {
  const { idBoard } = req.query;

  const query = { idBoard };

  const card = await List.findByI(query);
  res.status(204).send(card);
  next();
});
