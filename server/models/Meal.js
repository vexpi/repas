const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema({
  userId: String,
  date: String,
  mealType: String,
  recipe: String
});

module.exports = mongoose.model('Meal', mealSchema);
