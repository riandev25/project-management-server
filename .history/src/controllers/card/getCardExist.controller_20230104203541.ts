import asyncHandler from 'express-async-handler';
import { Card } from '../../models/card.model';

export const getCardExist = asyncHandler(async (req, res, next) => {
  const { cardName, idBoard } = req.query;

  if (idBoard && cardName) {
    // Query to database
    const query = { idBoard, cardName };

    const cardExist = await Card.find(query);
    res.status(200).send(cardExist);
    next();
  } else {
    res.send(404);
  }
});
