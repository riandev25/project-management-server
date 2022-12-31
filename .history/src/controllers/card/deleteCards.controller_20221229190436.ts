import asyncHandler from 'express-async-handler';
import { Card } from '../../models/card.model';

export const deleteCards = asyncHandler(async (req, res, next) => {
  const { idBoard } = req.query;

  const query = { idBoard };

  const card = await Card.find(query);
  res.status(204).send(card);
  next();
});
