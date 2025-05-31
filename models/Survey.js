const mongoose = require('mongoose');

const surveySchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  contactNumber: { type: String, required: true },
  favoriteFood: [String], 
  ratings: {
    eatOut: { type: Number, required: true },
    watchMovies: { type: Number, required: true },
    watchTV: { type: Number, required: true },
    listenToRadio: { type: Number, required: true }
  }
});

module.exports = mongoose.model('Survey', surveySchema);
