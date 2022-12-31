import asyncHandler from 'express-async-handler';
import { Card } from '../../models/card.model';

export const getSingleBoard = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  // const { cardName, idBoard } = req.query;

  // Default query to database
  const defaultQuery = { id };

  // Optional query to database
  // const optionalQuery: any = {};
  // if (cardName) optionalQuery.name = cardName;

  const board = await Card.find(defaultQuery);
  res.status(200).send(board);
  next();
});
