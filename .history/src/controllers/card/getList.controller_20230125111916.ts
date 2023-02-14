import asyncHandler from 'express-async-handler';
import { Card } from '../../models/card.model';

export const getList = asyncHandler(async (req, res, next) => {
  const { cardName, idBoard } = req.query;

  if (!idBoard) {
    // Default query to database
    const defaultQuery = { idBoard };

    // Optional query to database
    const optionalQuery: any = {};
    if (cardName) optionalQuery.name = cardName;

    const cardExist = await Card.find({ ...defaultQuery, ...optionalQuery });
    res.status(200).send(cardExist);
    next();
  } else {
    res.send(404);
  }
});
