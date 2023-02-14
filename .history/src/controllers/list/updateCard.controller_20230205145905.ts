import asyncHandler from 'express-async-handler';
import { List } from '../../models/list.model';

export const updateCard = asyncHandler(async (req, res, next) => {
  const { id, idCard } = req.params;
  const { type } = req.query;

  const query = { _id: id, 'cards._id': idCard };
  const update =
    type === 'delete'
      ? { $unset: { 'cards.$.cardName': 1 } }
      : { $set: { 'cards.$.cardName': req.body } };
  const card = await List.findOneAndUpdate(query, update);
  res.status(204).send(card);
  next();
});
