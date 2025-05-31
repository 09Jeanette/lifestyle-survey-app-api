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

exports.getSurveyResults = async (req, res) => {
  try {
    const surveys = await Survey.find();

    if (!surveys.length) {
      return res.json({
        status: 'empty',
        message: 'No Surveys Available'
      });
    }

    const total = surveys.length;

    // Convert date of birth to age
    const ages = surveys.map(s => {
      const birthDate = new Date(s.dateOfBirth);
      const ageDiff = Date.now() - birthDate.getTime();
      return Math.floor(ageDiff / (1000 * 60 * 60 * 24 * 365.25));
    });

    const avgAge = (ages.reduce((a, b) => a + b, 0) / total).toFixed(1);
    const oldest = Math.max(...ages);
    const youngest = Math.min(...ages);

    // Food preference percentages
    const pizzaCount = surveys.filter(s => s.favoriteFood.includes('Pizza')).length;
    const pastaCount = surveys.filter(s => s.favoriteFood.includes('Pasta')).length;
    const papWorsCount = surveys.filter(s => s.favoriteFood.includes('Pap and Wors')).length;

    const pizzaPercentage = ((pizzaCount / total) * 100).toFixed(1);
    const pastaPercentage = ((pastaCount / total) * 100).toFixed(1);
    const papWorsPercentage = ((papWorsCount / total) * 100).toFixed(1);

    // Average lifestyle ratings
    const eatOutAvg = (surveys.reduce((sum, s) => sum + s.ratings.eatOut, 0) / total).toFixed(1);
    const watchMoviesAvg = (surveys.reduce((sum, s) => sum + s.ratings.watchMovies, 0) / total).toFixed(1);
    const watchTVAvg = (surveys.reduce((sum, s) => sum + s.ratings.watchTV, 0) / total).toFixed(1);
    const radioAvg = (surveys.reduce((sum, s) => sum + s.ratings.listenToRadio, 0) / total).toFixed(1);

    res.status(200).json({
      status: 'success',
      message: 'Survey results computed successfully',
      data: {
        totalSurveys: total,
        averageAge: Number(avgAge),
        oldestPersonAge: oldest,
        youngestPersonAge: youngest,
        foodPreferences: {
          pizza: Number(pizzaPercentage),
          pasta: Number(pastaPercentage),
          papAndWors: Number(papWorsPercentage)
        },
        lifestyleAverages: {
          eatOut: Number(eatOutAvg),
          watchMovies: Number(watchMoviesAvg),
          watchTV: Number(watchTVAvg),
          listenToRadio: Number(radioAvg)
        }
      }
    });

  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: 'Failed to compute results',
      error: err.message
    });
  }
};
