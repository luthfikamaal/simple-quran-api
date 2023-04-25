import express from 'express';
import SurahController from './controllers/SurahController.js';

const router = express.Router();

router.get('/surahs', SurahController.index);
router.get('/surahs/:number', SurahController.show);

export default router;
