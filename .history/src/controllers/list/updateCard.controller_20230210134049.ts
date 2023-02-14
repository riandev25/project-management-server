import asyncHandler from 'express-async-handler';
import { List } from '../../models/list.model';

export const updateCard = asyncHandler(async (req, res, next) => {
  const { id, idCard } = req.params;
  const { type } = req.query;

  console.log(req.body);

  const query = { _id: id, 'cards._id': idCard };
  const update =
    type === 'delete'
      ? { $pull: { cards: { _id: idCard } } }
      : { $set: { 'cards.$.cardName': req.body } };
  const card = await List.findOneAndUpdate(query, update);
  res.status(201).send(card);
  next();
});
