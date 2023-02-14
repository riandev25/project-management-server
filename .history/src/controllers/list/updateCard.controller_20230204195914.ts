import asyncHandler from 'express-async-handler';
import { List } from '../../models/list.model';

export const updateCard = asyncHandler(async (req, res, next) => {
  const { id, idCard } = req.params;

  const query = { id, idCard };
  const update = { $set: { 'cards.$.cardName': req.body } };
  const card = await List.findByIdAndUpdate(query, update);
  res.status(204).send(card);
  next();
});
