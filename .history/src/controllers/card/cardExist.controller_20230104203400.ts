import asyncHandler from 'express-async-handler';
import { Card } from '../../models/card.model';

export const cardExist = asyncHandler(async (req, res, next) => {
  const { cardName, idBoard } = req.query;

  if (!idBoard && !cardName) {
    res.send(404);
  } else {
    // Query to database
    const query = { idBoard, cardName };

    const label = await Card.find(query);
    res.status(200).send(label);
  }
  next();
});
