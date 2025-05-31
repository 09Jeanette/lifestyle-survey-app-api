const express = require('express');
const router = express.Router();
const { submitSurvey, getSurveyResults } = require('../controllers/surveyController');

router.post('/', submitSurvey);


module.exports = router;
