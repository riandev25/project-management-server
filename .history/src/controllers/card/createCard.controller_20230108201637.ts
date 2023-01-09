import asyncHandler from 'express-async-handler';
import { Card } from '../../models/card.model';

export const createCard = asyncHandler(async (req, res) => {
  const label = await Card.insertMany(req.body);
  res.status(201).send(label);
});
