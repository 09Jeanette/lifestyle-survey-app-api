const mongoose = require('mongoose');

const surveySchema = new mongoose.Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  age: { type: Number, required: true },
  date: { type: Date, required: true },
  favoriteFood: [String],
  ratings: {
    eatOut: Number,
    watchMovies: Number,
    watchTV: Number,
    listenToRadio: Number
  }
});

module.exports = mongoose.model('Survey', surveySchema);
