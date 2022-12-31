import { Router } from 'express';
import { createCard } from '../controllers/card/createCard.controller';
import { deleteCards } from '../controllers/card/deleteCards.controller';
import { deleteSingleCard } from '../controllers/card/deleteSingleCard';
import { getCard } from '../controllers/card/getCard.controller';
import { authenticateUser } from '../middlewares/authenticate';

const router = Router();

router.use(authenticateUser);

router.post('', createCard);
router.get('', getCard);
router.delete('', deleteCards);
router.delete('/:id', deleteSingleCard);

export default router;
