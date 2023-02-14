import asyncHandler from 'express-async-handler';
import { Card } from '../../models/card.model';

export const deleteLists = asyncHandler(async (req, res, next) => {
  const { idBoard } = req.query;

  const query = { idBoard };

  const card = await Card.deleteMany(query);
  res.status(204).send(card);
  next();
});
