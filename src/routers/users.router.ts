
import users from '../controllers/users.controller';
import express from 'express';
const router = express.Router();

router.get('/', users.getAll);
router.post('/', users.addNew);

export default router;