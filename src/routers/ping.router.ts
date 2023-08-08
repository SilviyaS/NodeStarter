import home from '../controllers/ping.controller';
import express from 'express';
const router = express.Router();

router.get('/', home.index);

export default router;
