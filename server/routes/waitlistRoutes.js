import express from 'express';
import { applyToClub, getStats } from '../controllers/waitlistController.js';

const router = express.Router();

router.post('/apply', applyToClub);
router.get('/stats', getStats);

export default router;
