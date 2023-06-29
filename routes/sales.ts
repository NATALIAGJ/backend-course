import express from 'express';
import { create, getAll } from '../controllers/sales';
import { validateUser } from '../middlewares/auth';

const router = express.Router();

router.use(validateUser())
router.get('/', getAll);
router.post('/', create);

export default router;