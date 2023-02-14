import asyncHandler from 'express-async-handler';
import { Card } from '../../models/card.model';

export const updateCard = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const query = { id };
  const update = { ...req.body };

  const card = await Card.findByIdAndUpdate(query, update);
  res.status(204).send(card);
  next();
});
