import { Router } from 'express';
import { createList } from '../controllers/list/createList.controller';
import { deleteLists } from '../controllers/list/deleteLists.controller';
import { deleteSingleList } from '../controllers/list/deleteSingleList';
import { getList } from '../controllers/list/getList.controller';
import { updateCard } from '../controllers/list/updateCard.controller';
import { updateList } from '../controllers/list/updateList.controller';
import { authenticateUser } from '../middlewares/authenticate';
import { verifyUser } from '../strategies/jwt.strategy';

const router = Router();

// router.use(authenticateUser);
router.use(verifyUser);

router.post('', createList);
router.get('', getList);
router.delete('', deleteLists);
router.delete('/:id', deleteSingleList);
router.patch('/:id', updateList);

// Cards

router.patch('/:id/cards/:idCard', updateCard);

export default router;
