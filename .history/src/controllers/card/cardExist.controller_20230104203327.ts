import asyncHandler from 'express-async-handler';
import { Card } from '../../models/card.model';

export const cardExist = asyncHandler(async (req, res, next) => {
  const { cardName, idBoard } = req.query;

  if (!idBoard && !cardName) {
    res.send(404);
  } else {
    // Q to database
    const query = { idBoard, cardName };

    // // Optional query to database
    // const optionalQuery: any = {};
    // if (cardName) optionalQuery.name = cardName;

    const label = await Card.find(query);
    res.status(200).send(label);
  }
  next();
});
