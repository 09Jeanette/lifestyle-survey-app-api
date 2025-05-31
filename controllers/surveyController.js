const Survey = require('../models/Survey');

exports.submitSurvey = async (req, res) => {
  try {
    const survey = new Survey(req.body);
    await survey.save();
    res.status(201).json({
      status: 'success',
      message: 'Survey saved successfully'
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: 'Failed to save survey',
      error: err.message
    });
  }
};


