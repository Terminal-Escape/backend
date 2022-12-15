const { Router } = require('express');
const Rooms = require('../models/Rooms');

module.exports = Router().get('/', async (req, res, next) => {
  try {
    const room = await Rooms.getAll();
    res.json(room);
  } catch (e) {
    next(e);
  }
});
