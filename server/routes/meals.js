const express = require('express');
const router = express.Router();
const Meal = require('../models/Meal');

router.get('/:userId', async (req, res) => {
  const meals = await Meal.find({ userId: req.params.userId });
  res.json(meals);
});

router.post('/', async (req, res) => {
  const meal = new Meal(req.body);
  await meal.save();
  res.status(201).json(meal);
});

module.exports = router;
