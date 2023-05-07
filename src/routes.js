const express = require('express');
const SurahController = require('./controllers/SurahController.js');

const router = express.Router();

router.get('/surahs', SurahController.index);
router.get('/surahs/:number', SurahController.show);

module.exports = router;
