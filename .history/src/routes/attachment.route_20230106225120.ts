import { Router } from 'express';
import { addAttachment } from '../controllers/attachment/addAttachment.controller';
import { getAttachment } from '../controllers/attachment/getAttachment.controller';
import { authenticateUser } from '../middlewares/authenticate';
import { upload } from '../utils/multer';

const router = Router();

router.use(authenticateUser);

router.post('', upload.single('image'), addAttachment);
router.get('', getAttachment);

export default router;
