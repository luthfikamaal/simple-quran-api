const express = require('express');
const SurahController = require('./controllers/SurahController.js');

const router = express.Router();

router.get('/', (req, res) => {
  return res.status(200).json({
    repo: 'https://github.com/luthfikamaal/simple-quran-api',
  });
});
router.get('/surahs', SurahController.index);
router.get('/surahs/:number', SurahController.show);

module.exports = router;
