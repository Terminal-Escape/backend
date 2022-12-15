const { Router } = require('express');
const UserItem = require('../models/UserItem');

module.exports = Router()
  // unused
  .put('/:id', async (req, res, next) => {
    try {
      const updateItem = await UserItem.updateById(req.params.id, req.body);
      if (!updateItem) next();
      res.json(updateItem);
    } catch (e) {
      next(e);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const itemList = await UserItem.getAll();
      res.json(itemList);
    } catch (e) {
      next(e);
    }
  });
