import asyncHandler from 'express-async-handler';
import { List } from '../../models/list.model';

export const updateList = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const query = { id };
  // const update = { $push: {cards: req.body }};
  const update = req.body;

  const card = await List.findByIdAndUpdate(query, update);
  res.status(204).send(card);
  next();
});
