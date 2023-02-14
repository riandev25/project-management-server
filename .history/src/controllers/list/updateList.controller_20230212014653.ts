import asyncHandler from 'express-async-handler';
import { List } from '../../models/list.model';

export const updateList = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { addCard } = req.query;

  const query = { _id: id };
  // const update = { $push: {cards: req.body }};

  const update =
    addCard === 'true'
      ? { $push: { cards: { cardName: req.body.cardName } } }
      : req.body;

  const card = await List.findByIdAndUpdate(id, update);
  res.status(200).send(card);
  next();
});
