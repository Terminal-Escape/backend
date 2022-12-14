const { Router } = require('express');
const Items = require('../models/Items');

module.exports = Router().get('/'), async (req, res, next) => {
  try {
    const items = await Items.getAll();
    res.json(items);
  } catch (e) {
    next(e);
  }
};
