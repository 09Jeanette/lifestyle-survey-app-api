const express = require('express');
const router = express.Router();
const { submitSurvey, getSurveyResults } = require('../controllers/surveyController');

router.post('/', submitSurvey);
router.get('/results', getSurveyResults);

module.exports = router;
