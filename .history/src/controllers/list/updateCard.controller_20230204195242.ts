import asyncHandler from 'express-async-handler';
import { List } from '../../models/list.model';

export const updateCard = asyncHandler(async (req, res, next) => {
  const { id, idCard } = req.params;
  const {addCard} = req.query

  const query = { id, idCard };
  
  const update = addCard ? { $push: { cards: req.body } } : { $set: { "cards.$.cardName": req.body } }
  const card = await List.findByIdAndUpdate(query, update);
  res.status(204).send(card);
  next();
});