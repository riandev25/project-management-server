import { Router } from 'express';
import { createBoard } from '../controllers/board/createBoard.controller';
import { deleteBoard } from '../controllers/board/deleteBoard.controller';
import { getBoard } from '../controllers/board/getBoard.controller';
import { getSingleBoard } from '../controllers/board/getSingleBoard.controller';
import { updateBoard } from '../controllers/board/updateBoard.controller';
import { authenticateUser } from '../middlewares/authenticate';
import { verifyUser } from '../strategies/jwt.strategy';

const router = Router();

// router.use(authenticateUser);
router.use(verifyUser);

router.post('', createBoard);
router.get('', getBoard);
router.get('/:id', getSingleBoard);
router.delete('/:id', deleteBoard);
router.patch('/:id', updateBoard);

export default router;
