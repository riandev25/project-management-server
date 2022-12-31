import asyncHandler from 'express-async-handler';
import { Label } from '../../models/label.model';

export const getLabel = asyncHandler(async (req, res, next) => {
  const { name, iconColor, idCard } = req.query;

  if (!idCard) {
    res.send(404);
  } else {
    const query = { idCard };
    // Optional query
    const optionalQuery: any = {};
    if (name) optionalQuery.name = name;
    if (iconColor) optionalQuery.iconColor = iconColor;

    const label = await Label.find({ ...query, ...optionalQuery });
    res.status(200).send(label);
  }
  next();
});
