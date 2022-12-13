const { Router } = require('express');
const Item = require('../models/UserItem');

module.exports = Router()
  .put('/:id', async (req, res, next) => {
    try {
      const updateItem = await Item.updateById(req.params.id, req.body);
      if (!updateItem) next();
      res.json(updateItem);
    } catch (e) {
      next(e);
    }
  });

