import { Router } from 'express';
import { addAttachment } from '../controllers/attachment/addAttachment.controller';
import { authenticateUser } from '../middlewares/authenticate';
import { upload } from '../utils/multer';

const router = Router();

router.use(authenticateUser);

router.post('', upload.single('image'), addAttachment);

export default router;
