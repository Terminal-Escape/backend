const { Router } = require('express');
const RoomOne = require('../models/RoomOne');

module.exports = Router().get('/', async (req, res, next) => {
  try {
    const room = await RoomOne.getAll();
    res.json(room);
  } catch (e) {
    next(e);
  }
});

