const pool = require('../utils/pool');

module.exports = class Item {
  id;
  item_name;
  item_true;
  
  constructor(row) {
    this.id = row.id;
    this.item_name = row.item_name;
    this.item_true = row.item_true;
  }

  static async updateById(id, attrs) {
    const item = await Item.getById(id);
    if (!item) return null;
    const { item_name, item_true } = { ...item, ...attrs };
    const { rows } = await pool.query(
      `
      UPDATE user_items
      SET item_true=$3
      WHERE id=$1 RETURNING *`,
      [id, item_name, item_true]
    );
    return new Item(rows[0]);
  }
  static async getAll() {
    const { rows } = await pool.query(
      'SELECT * from user_items'
    );
    return rows.map((item) => new Item(item));
  }
};
