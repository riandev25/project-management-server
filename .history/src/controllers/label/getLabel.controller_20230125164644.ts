import asyncHandler from 'express-async-handler';
import { Label } from '../../models/label.model';

export const getLabel = asyncHandler(async (req, res, next) => {
  const { name, iconColor, checked, idList } = req.query;

  if (idList) {
    // Default query to database
    const defaultQuery = { idList };

    // Optional query to database
    const optionalQuery: any = {};
    if (name) optionalQuery.name = name;
    if (iconColor) optionalQuery.iconColor = iconColor;
    if (checked) optionalQuery.checked = checked;

    const label = await Label.find({ ...defaultQuery, ...optionalQuery });
    res.status(200).send(label);
    next();
  } else {
    res.send(404);
  }
});
